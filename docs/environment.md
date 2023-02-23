# Environment

| Field | Description                                              | Type   | Minimum | Maximum | Required |
| ----- | -------------------------------------------------------- | ------ | ------- | ------- | -------- |
| temp  | Temperature reading from external sensor                 | number |         |         | Yes      |
| hum   | Humidity reading from external sensor                    | number | 1       | 100     | Yes      |
| atmp  | Atmospheric pressure reading from external sensor in kPa | number | 0       |         | Yes      |

## Data transition: nRF Asset Tracker -> LwM2M def

| Field | LwM2M converter lib | coiote azure | firmware                                            | LwM2M def. |
| ----- | ------------------- | ------------ | --------------------------------------------------- | ---------- |
| temp  | 3303.5700           | 3303.0.5700  | IPSO_OBJECT_TEMP_SENSOR_ID, 0, SENSOR_VALUE_RID     | 3303.5700  |
| hum   | 3304.5700           | 3304.0.5700  | IPSO_OBJECT_HUMIDITY_SENSOR_ID, 0, SENSOR_VALUE_RID | 3304.5700  |
| atmp  | 3323.5700           | 3323.0.5700  | IPSO_OBJECT_PRESSURE_ID, 0, SENSOR_VALUE_RID        | 3323.5700  |


_Note_: `atmp` value can be LwM2M `3315.5700`. See [this discussion](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/issues/24) for more info. 
