# Config

| Property | Description                                                                                                                                                                              | Type             | Minimum | Maximum    | Examples                               | Required |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- | ---------- | -------------------------------------- | -------- |
| act      | Whether to enable the active mode.                                                                                                                                                       | boolean          |         |            | false                                  | Yes      |
| actwt    | In active mode: Wait this amount of seconds until sending the next update. The actual interval will be this time plus the time it takes to get a GNSS fix.                               | integer          | 1       | 2147483647 | 60                                     | Yes      |
| mvres    | Movement resolution (in seconds): After detecting movement in passive mode send an update and wait this amount of time until movement again can trigger the next update.                 | integer          | 1       | 2147483647 | 300                                    | Yes      |
| mvt      | Movement timeout (in seconds): Send update at least this often in passive mode.                                                                                                          | integer          | 1       | 2147483647 | 3600                                   | Yes      |
| loct     | Location search timeout (in seconds): Timeout for location search (GNSS fix, cellular, and WiFi positioning).                                                                            | integer          | 1       | 2147483647 | 60                                     | Yes      |
| accath   | Accelerometer activity threshold (in m/s²): Minimal absolute value for an accelerometer reading to be considered movement.                                                               | number           | 0       | 78.4532    | 10.5                                   | Yes      |
| accith   | Accelerometer inactivity threshold (in m/s²): Maximum absolute value for an accelerometer reading to be considered stillness. Must be smaller than the accelerometer activity threshold. | number           | 0       | 78.4532    | 5.2                                    | Yes      |
| accito   | Accelerometer inactivity timeout (in s): Hysteresis timeout for stillness detection. Must be smaller than the movement resolution.                                                       | number           | 0.08    | 5242.88    | 1.7                                    | Yes      |
| nod      | List of modules which should be disabled when sampling data.                                                                                                                             | array of strings |         |            | ["gnss"], ["ncell"], ["gnss", "ncell"] | Yes      |

## Data transition: nRF Asset Tracker -> LwM2M def

| Property | LwM2M converter lib | coiote azure | firmware                                                      | LwM2M def. |
| -------- | ------------------- | ------------ | ------------------------------------------------------------- | ---------- |
| act      | **????**            | 50009.0.0    | CONFIGURATION_OBJECT_ID, 0, PASSIVE_MODE_RID                  | **????**   |
| actwt    | **????**            | 50009.0.2    | CONFIGURATION_OBJECT_ID, 0, ACTIVE_WAIT_TIMEOUT_RID           | **????**   |
| mvres    | **????**            | 50009.0.3    | CONFIGURATION_OBJECT_ID, 0, MOVEMENT_RESOLUTION_RID           | **????**   |
| mvt      | **????**            | 50009.0.4    | CONFIGURATION_OBJECT_ID, 0, MOVEMENT_TIMEOUT_RID              | **????**   |
| loct     | **????**            | 50009.0.1    | CONFIGURATION_OBJECT_ID, 0, LOCATION_TIMEOUT_RID              | **????**   |
| accath   | **????**            | 50009.0.5    | CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_ACT_THRESHOLD_RID   | **????**   |
| accith   | **????**            | 50009.0.8    | CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_THRESHOLD_RID | **????**   |
| accito   | **????**            | 50009.0.9    | CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_TIMEOUT_RID   | **????**   |
| nod      | **????**            | **????**     | **????**                                                      | **????**   |
