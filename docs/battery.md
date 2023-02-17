# Battery

| Field | Description                                              | Type    | Minimum       | Required |
| ----- | -------------------------------------------------------- | ------- | ------------- | -------- |
| v     | Battery reading read by the modem                        | integer | 1             | Yes      |
| ts    | Timestamp as Unix epoch with millisecond precision (UTC) | integer | 1234567890123 | Yes      |

## Data transition: nRF Asset Tracker -> LwM2M def

| Field | LwM2M converter lib | coiote azure | firmware                                            | LwM2M def. |
| ----- | ------------------- | ------------ | --------------------------------------------------- | ---------- |
| v     | 3.7                 | 3.0.7        | LWM2M_OBJECT_DEVICE_ID, 0, POWER_SOURCE_VOLTAGE_RID | 3.7        |
| ts    | **????**            | **????**     | **????**                                            | **????**   |
