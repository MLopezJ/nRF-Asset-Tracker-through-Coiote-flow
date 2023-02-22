# Device

| Field | Description            | Type   | Min Length | Max Length | Examples                 | Required |
| ----- | ---------------------- | ------ | ---------- | ---------- | ------------------------ | -------- |
| imei  | Board IMEI             | string | 15         | 16         | ["352656106111232"]      | Yes      |
| iccid | SIM ICCID              | string | 19         | 20         | ["89450421180216216095"] | Yes      |
| modV  | Modem Firmware Version | string | 1          |            | ["mfw_nrf9160_1.0.0"]    | Yes      |
| brdV  | Board Version          | string | 1          |            | ["thingy91_nrf9160"]     | Yes      |

## Data transition: nRF Asset Tracker -> LwM2M def

| Field | LwM2M converter lib | coiote azure | firmware                                           | LwM2M def. |
| ----- | ------------------- | ------------ | -------------------------------------------------- | ---------- |
| imei  | 3.2                 | 3.0.2        | LWM2M_OBJECT_DEVICE_ID, 0, DEVICE_SERIAL_NUMBER_ID | 3.2        |
| iccid | **????**            | **????**     | **????**, MODEM_ICCID                              | **????**   |
| modV  | 3.3                 | 3.0.3        | LWM2M_OBJECT_DEVICE_ID, MODEM_FIRMWARE_VERSION     | 3.3        |
| brdV  | 3.0                 | 3.0.0     | LWM2M_OBJECT_DEVICE_ID, 0, MANUFACTURER_RID        | 3.0   |
