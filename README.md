# nRF Asset Tracker through Coiote flow

> Module and data flow of the nRF Asset Tracker by its integration with Coiote from AVSystem 


## Modules

There are many modules involves in this flow:

- LwM2M
- Thingy:91
- Coiote
- Azure
- nRF Asset Tracker

![IMG_7647](https://user-images.githubusercontent.com/8351865/219425836-2cc4e559-277a-4578-b148-0e164b27996d.jpg)

## DATA

Even when the modules refers to the same data definition, the name of their variables change.

- LwM2M definiton
- Firmware 
- Coiote format
- LwM2M Equivalent
- nRF Asset Tracker format


![IMG_7649](https://user-images.githubusercontent.com/8351865/219426657-b7d5a18e-c64c-471b-8b2e-0000259486b4.jpg)


### nRF Asset Tracker data
This integration should provide to the `nRF Asset Tracker module` the following values in order to be successful:

{
   [Global Navigation Satellite System (GNSS)](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#gnss),
   [Config](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#config),
   [Batery](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#batery),
   [Environment](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#environment),
   [Device](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#device),
   Roaming Information
}

#### GNSS

| Field | Description | Type | Minimum | Maximum | Required |
|-------|-------------|------|---------|---------|----------|
| lng   | Longitude   | number | -180    | 180     | Yes      |
| lat   | Latitude    | number | -90     | 90      | Yes      |
| acc   | Accuracy (2D 1-sigma) in meters | number | 0    |         | No       |
| alt   | Altitude above WGS-84 ellipsoid in meters | number |         |         | Yes      |
| spd   | Horizontal speed in meters | number | 0    |         | Yes      |
| hdg   | Heading of movement in degrees | number | 0    | 360     | Yes      |

##### nRF Asset Tracker -> LwM2M def


| nRF Asset Tracker | LwM2M converter lib | coiote azure | firmware | LwM2M def | 
|-------|------|---------|---------|-------------|
| lng   | 6.1  | "6.0.1" | LONGITUDE_RID | 6.1 |
| lat   | 6.0  | "6.0.1" | LATITUDE_RID  | 6.0 |
| acc   | **???????** | **???????** | **???????** | **???????** |
| alt   | 6.2  | "6.0.2" | ALTITUDE_RID  | 6.2 |
| spd   | 6.6  | "6.0.6" | SPEED_RID     | 6.6 |
| hdg   | **???????** | **???????** | **???????** | **???????** |


### Config

| Property | Description | Type | Minimum | Maximum | Examples | Required |
|----------|-------------|------|---------|---------|----------|----------|
| act      | Whether to enable the active mode. | boolean | | | false | Yes |
| actwt    | In active mode: Wait this amount of seconds until sending the next update. The actual interval will be this time plus the time it takes to get a GNSS fix. | integer | 1 | 2147483647 | 60 | Yes |
| mvres    | Movement resolution (in seconds): After detecting movement in passive mode send an update and wait this amount of time until movement again can trigger the next update. | integer | 1 | 2147483647 | 300 | Yes |
| mvt      | Movement timeout (in seconds): Send update at least this often in passive mode. | integer | 1 | 2147483647 | 3600 | Yes |
| loct     | Location search timeout (in seconds): Timeout for location search (GNSS fix, cellular, and WiFi positioning). | integer | 1 | 2147483647 | 60 | Yes |
| accath   | Accelerometer activity threshold (in m/s²): Minimal absolute value for an accelerometer reading to be considered movement. | number | 0 | 78.4532 | 10.5 | Yes |
| accith   | Accelerometer inactivity threshold (in m/s²): Maximum absolute value for an accelerometer reading to be considered stillness. Must be smaller than the accelerometer activity threshold. | number | 0 | 78.4532 | 5.2 | Yes |
| accito   | Accelerometer inactivity timeout (in s): Hysteresis timeout for stillness detection. Must be smaller than the movement resolution. | number | 0.08 | 5242.88 | 1.7 | Yes |
| nod      | List of modules which should be disabled when sampling data. | array of strings | | | ["gnss"], ["ncell"], ["gnss", "ncell"] | Yes |

#### nRF Asset Tracker -> LwM2M def

| Property | LwM2M converter lib | coiote azure | firmware | LwM2M def. |
|----------|---------------------|--------------|----------|------------|
| act      | **????**              | **????**       | **????**   | **????**     | 
| actwt    | **????**              | **????**       | **????**   | **????**     | 
| mvres    | **????**              | **????**       | **????**   | **????**     | 
| mvt      | **????**              | **????**       | **????**   | **????**     | 
| loct     | **????**              | **????**       | **????**   | **????**     | 
| accath   | **????**              | **????**       | **????**   | **????**     | 
| accith   | **????**              | **????**       | **????**   | **????**     | 
| accito   | **????**              | **????**       | **????**   | **????**     | 
| nod      | **????**              | **????**       | **????**   | **????**     | 

### Batery
| Field | Description | Type | Minimum | Required |
|-------|-------------|------|---------|----------|
| v     | Battery reading read by the modem | integer | 1 | Yes |
| ts    | Timestamp as Unix epoch with millisecond precision (UTC) | integer | 1234567890123 | Yes |


#### nRF Asset Tracker -> LwM2M def
| Field | LwM2M converter lib | coiote azure | firmware | LwM2M def. |
|-------|-------------|------|---------|----------|
| v     | **????** | **????** | **????** | **????** |
| ts    | **????** | **????** | **????** | **????** |


### Environment
| Field | Description | Type | Minimum | Maximum | Required |
|-------|-------------|------|---------|---------|----------|
| temp  | Temperature reading from external sensor | number |         |         | Yes      |
| hum   | Humidity reading from external sensor | number | 1       | 100     | Yes      |
| atmp  | Atmospheric pressure reading from external sensor in kPa | number | 0 | | Yes |


#### nRF Asset Tracker -> LwM2M def
| Field | LwM2M converter lib | coiote azure | firmware | LwM2M def. |
|-------|-------------|------|---------|---------|
| temp  | 3303.5700 | 3303.0.5700 | IPSO_OBJECT_TEMP_SENSOR_ID, 0, SENSOR_VALUE_RID | 3303.5700 |   
| hum   | 3304.5700 | 3304.0.5700 | IPSO_OBJECT_HUMIDITY_SENSOR_ID, 0, SENSOR_VALUE_RID | 3304.5700 |   
| atmp | **????** | **????** | **????** | **????** |


### Device

| Field | Description | Type | Min Length | Max Length | Examples | Required |
| ----- | ----------- | ---- | ---------- | ---------- | -------- | -------- |
| imei  | Board IMEI  | string | 15 | 16 | ["352656106111232"] | Yes |
| iccid | SIM ICCID | string | 19 | 20 | ["89450421180216216095"] | Yes |
| modV  | Modem Firmware Version | string | 1 |  | ["mfw_nrf9160_1.0.0"] | Yes |
| brdV  | Board Version | string | 1 |  | ["thingy91_nrf9160"] | Yes |

##### nRF Asset Tracker -> LwM2M def
| Field | LwM2M converter lib | coiote azure | firmware | LwM2M def. |
| ----- | ------------------ | ------------ | -------- | ---------- |
| imei  |  3.2          | 3.0.2     | LWM2M_OBJECT_DEVICE_ID, 0, DEVICE_SERIAL_NUMBER_ID | 3.2   |
| iccid | **????**           | **????**     | **????**, MODEM_ICCID | **????**   |
| modV  | 3.3          | 3.0.3   | LWM2M_OBJECT_DEVICE_ID, MODEM_FIRMWARE_VERSION | 3.3  |
| brdV  | **????**           | **????**     | **????**, MODEM_BOARD | **????**   |


