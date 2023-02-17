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
This integration should provide to the `nRF Asset Tracker module` the [following values](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json) in order to be successful:

{
   [Global Navigation Satellite System (GNSS)](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#gnss),
   [Config](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#config),
   [Battery](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#battery),
   [Environment](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#environment),
   [Device](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#device),
   [Roaming Information](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/README.md#roaming)
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
| lng   | 6.1  | "6.0.1" | LWM2M_OBJECT_LOCATION_ID, 0, LONGITUDE_RID | 6.1 |
| lat   | 6.0  | "6.0.0" | LWM2M_OBJECT_LOCATION_ID, 0, LATITUDE_RID  | 6.0 |
| acc   | 6.3 | 6.0.3 | LWM2M_OBJECT_LOCATION_ID, 0, RADIUS_RID | 6.3 |
| alt   | 6.2  | "6.0.2" | LWM2M_OBJECT_LOCATION_ID, 0, ALTITUDE_RID  | 6.2 |
| spd   | 6.6  | "6.0.6" | LWM2M_OBJECT_LOCATION_ID, 0, SPEED_RID     | 6.6 |
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
| act      | **????**   | 50009.0.0       | CONFIGURATION_OBJECT_ID, 0, PASSIVE_MODE_RID   | **????**     | 
| actwt    | **????**     | 50009.0.2       | CONFIGURATION_OBJECT_ID, 0, ACTIVE_WAIT_TIMEOUT_RID   | **????**     | 
| mvres    | **????**    | 50009.0.3       | CONFIGURATION_OBJECT_ID, 0, MOVEMENT_RESOLUTION_RID   | **????**     | 
| mvt      | **????**      | 50009.0.4       | CONFIGURATION_OBJECT_ID, 0, MOVEMENT_TIMEOUT_RID  | **????**     | 
| loct     | **????**      | 50009.0.1       | CONFIGURATION_OBJECT_ID, 0, LOCATION_TIMEOUT_RID   | **????**     | 
| accath   | **????**     | 50009.0.        |  CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_ACT_THRESHOLD_RID   | **????**     | 
| accith   | **????**    | 50009.0.5       |  CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_THRESHOLD_RID | **????**     | 
| accito   | **????**      | 50009.0.9        |  CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_TIMEOUT_RID   | **????**     | 
| nod      | **????**      | **????**       | **????**   | **????**     | 

### Battery
| Field | Description | Type | Minimum | Required |
|-------|-------------|------|---------|----------|
| v     | Battery reading read by the modem | integer | 1 | Yes |
| ts    | Timestamp as Unix epoch with millisecond precision (UTC) | integer | 1234567890123 | Yes |


#### nRF Asset Tracker -> LwM2M def
| Field | LwM2M converter lib | coiote azure | firmware | LwM2M def. |
|-------|-------------|------|---------|----------|
| v     | 3.7 | 3.0.7 | LWM2M_OBJECT_DEVICE_ID, 0, POWER_SOURCE_VOLTAGE_RID | 3.7 |
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
| atmp | 3323.5700 | 3323.0.5700 | IPSO_OBJECT_PRESSURE_ID, 0, SENSOR_VALUE_RID | 3323.5700 |


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


### Roaming
| Field  | Type    | Description  | Minimum Value | Maximum Value | Examples                    | Required |
| ------ | ------- | ------------ | ------------- | ------------- | --------------------------- | --- |
| band   | integer | Band         | 1             | N/A           | 3                           | Yes |
| nw     | string  | Network mode | 1             | N/A           | "LTE-M", "NB-IoT"           | Yes |
| rsrp   | number  | Reference Signal Received Power (RSRP). The average power level in dBm received from a single reference signal in an LTE (Long-term Evolution) network. Typically this value ranges from -140 to -40 dBm. | -140 | -40 | -97, -104 | Yes |
| area   | integer | Area code.   | 1             | N/A           | 12                          | Yes |
| mccmnc | integer | Mobile country code and mobile network code | 10000 | 999999 | 24202, 310410 | Yes |
| cell   | integer | Cell id      | 1             | N/A           | 33703719                    | Yes |
| ip     | string  | IP address   | 1             | N/A           | "10.81.183.99", "2001:0db8:85a3:0000:0000:8a2e:0370:7334", "2001:db8:85a3::8a2e:370:7334" | Yes |
| eest   | integer | The %CONEVAL AT command returns amongst other data the energy estimate: Relative estimated energy consumption of data transmission compared to nominal consumption. A higher value means smaller energy consumption. 5: Difficulties in setting up connections. Maximum number of repetitions might be needed for data. 6: Poor conditions. Setting up a connection might require retries and a higher number of repetitions for data. 7: Normal conditions for cIoT device. No repetitions for data or only a few repetitions in the worst case. 8: Good conditions. Possibly very good conditions for small amounts of data. 9: Very good conditions. Efficient data transfer estimated also for larger amounts of data. | 5 | 9 | 5, 7 | Yes |


#### nRF Asset Tracker -> LwM2M def
| Field | LwM2M converter lib | coiote azure | firmware | LwM2M def. |
| ------ | --------------------------- | ----------------- | ------------- | ------------- | 
| band   | **????** | **????** | **????** | **????** |
| nw     | **????** | **????** | **????** | **????** |
| rsrp   | 4.2 | 4.0.2 | LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,RSS | 4.2 |
| area   | 4.12 | 4.0.12 | LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,LAC | 4.12 |
| mccmnc |  4.10 & 4.9 | 4.0.10 & 4.0.9 |  LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,SMCC & LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,SMNC | 4.10 & 4.9 |
| cell   | 4.8 | 4.0.8 | LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,CELLID | 4.8 |
| ip     | 4.4| 4.0.4 | LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,IP_ADDRESSES |  4.4 |
| eest   | **????** | **????** | **????** | **????** |
