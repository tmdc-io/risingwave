// Copyright 2025 RisingWave Labs
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use prost::Message;
use risingwave_common::telemetry::pb_compatible::TelemetryToProtobuf;
use risingwave_common::telemetry::report::TelemetryReportCreator;
use risingwave_common::telemetry::{
    current_timestamp, report_event_common, SystemData, TelemetryNodeType, TelemetryReportBase,
    TelemetryResult,
};
use risingwave_pb::telemetry::{PbTelemetryDatabaseObject, PbTelemetryEventStage};
use serde::{Deserialize, Serialize};

const TELEMETRY_COMPACTOR_REPORT_TYPE: &str = "compactor";

#[allow(dead_code)] // please remove when used
pub(crate) fn report_event(
    event_stage: PbTelemetryEventStage,
    event_name: &str,
    catalog_id: i64,
    connector_name: Option<String>,
    object: Option<PbTelemetryDatabaseObject>,
    attributes: Option<jsonbb::Value>, // json object
) {
    report_event_common(
        event_stage,
        event_name,
        catalog_id,
        connector_name,
        object,
        attributes,
        TELEMETRY_COMPACTOR_REPORT_TYPE.to_owned(),
    );
}

#[derive(Clone, Copy)]
pub(crate) struct CompactorTelemetryCreator {}

impl CompactorTelemetryCreator {
    pub(crate) fn new() -> Self {
        Self {}
    }
}

#[async_trait::async_trait]
impl TelemetryReportCreator for CompactorTelemetryCreator {
    #[allow(refining_impl_trait)]
    async fn create_report(
        &self,
        tracking_id: String,
        session_id: String,
        up_time: u64,
    ) -> TelemetryResult<CompactorTelemetryReport> {
        Ok(CompactorTelemetryReport::new(
            tracking_id,
            session_id,
            up_time,
        ))
    }

    fn report_type(&self) -> &str {
        TELEMETRY_COMPACTOR_REPORT_TYPE
    }
}

impl TelemetryToProtobuf for CompactorTelemetryReport {
    fn to_pb_bytes(self) -> Vec<u8> {
        let pb_report = risingwave_pb::telemetry::CompactorReport {
            base: Some(self.base.into()),
        };
        pb_report.encode_to_vec()
    }
}

#[derive(Serialize, Deserialize)]
pub(crate) struct CompactorTelemetryReport {
    #[serde(flatten)]
    base: TelemetryReportBase,
}

impl CompactorTelemetryReport {
    pub(crate) fn new(tracking_id: String, session_id: String, up_time: u64) -> Self {
        Self {
            base: TelemetryReportBase {
                tracking_id,
                session_id,
                system_data: SystemData::new(),
                up_time,
                time_stamp: current_timestamp(),
                node_type: TelemetryNodeType::Compactor,
                is_test: false,
            },
        }
    }
}

#[cfg(test)]
mod test {
    use risingwave_common::telemetry::pb_compatible::TelemetryToProtobuf;
    use risingwave_common::telemetry::{post_telemetry_report_pb, TELEMETRY_REPORT_URL};

    use crate::telemetry::{CompactorTelemetryReport, TELEMETRY_COMPACTOR_REPORT_TYPE};

    // It is ok to use `TELEMETRY_REPORT_URL` here because we mark it as test and will not write to the database.
    #[cfg(not(madsim))]
    #[tokio::test]
    async fn test_compactor_telemetry_report() {
        let mut report = CompactorTelemetryReport::new(
            "7d45669c-08c7-4571-ae3d-d3a3e70a2f7e".to_owned(),
            "7d45669c-08c7-4571-ae3d-d3a3e70a2f7e".to_owned(),
            100,
        );
        report.base.is_test = true;

        let pb_report = report.to_pb_bytes();
        let url =
            (TELEMETRY_REPORT_URL.to_owned() + "/" + TELEMETRY_COMPACTOR_REPORT_TYPE).to_owned();

        // Retry 3 times to mitigate occasional failures on CI.
        tokio_retry::Retry::spawn(
            tokio_retry::strategy::ExponentialBackoff::from_millis(10).take(3),
            || post_telemetry_report_pb(&url, pb_report.clone()),
        )
        .await
        .unwrap();
    }
}
