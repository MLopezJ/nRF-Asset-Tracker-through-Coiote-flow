# nRF Asset Tracker through Coiote flow

> Module and data flow of the nRF Asset Tracker by its integration with Coiote from AVSystem

## Modules

Every one of the following modules speak LwM2M but they do in different dialect

![IMG_7647](https://user-images.githubusercontent.com/8351865/219425836-2cc4e559-277a-4578-b148-0e164b27996d.jpg)

### Links

- LwM2M
- Thingy:91
- Coiote
- Azure
- nRF Asset Tracker

## DATA

Even when the modules refers to the same data definition, the name of their variables change.

- LwM2M definiton
- Firmware
- Coiote format
- LwM2M Equivalent
- nRF Asset Tracker format

![IMG_7649](https://user-images.githubusercontent.com/8351865/219426657-b7d5a18e-c64c-471b-8b2e-0000259486b4.jpg)

### nRF Asset Tracker data

As been said, when data go through the module flow its change its form although refers to the same LwM2M definition.

| LwM2M def. | firmware                                           | coiote azure | LwM2M converter lib | nRF Asset Tracker |
| ---------- | -------------------------------------------------- | ------------ | ------------------- | ----------------- |
| 3.2        | LWM2M_OBJECT_DEVICE_ID, 0, DEVICE_SERIAL_NUMBER_ID | 3.0.2        | 3.2                 | imei              |

In the last table its shown how one value is defined as `3.2` in LwM2M, is treated as `LWM2M_OBJECT_DEVICE_ID, 0, DEVICE_SERIAL_NUMBER_ID` and at the end being assiged to `imei` var.

The following json provide a flow transition for all the values from [nRF Asset Tracker](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json). `Key` represent the variable name in `nRF Asset Tracker` module, `value` in `firmware` module and `comment` in `LwM2M definition`

```javascript
const dataTransiccion = {
  cfg: {
    act: "CONFIGURATION_OBJECT_ID, 0, PASSIVE_MODE_RID", // 50009.0
    actwt: "CONFIGURATION_OBJECT_ID, 0, ACTIVE_WAIT_TIMEOUT_RID", // 50009.2
    mvres: "CONFIGURATION_OBJECT_ID, 0, MOVEMENT_RESOLUTION_RID", // 50009.3
    mvt: "CONFIGURATION_OBJECT_ID, 0, MOVEMENT_TIMEOUT_RID", // 50009.4
    loct: "CONFIGURATION_OBJECT_ID, 0, LOCATION_TIMEOUT_RID", // 50009.1
    accath: "CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_ACT_THRESHOLD_RID", // "50009.5"
    accith: "CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_THRESHOLD_RID", // 50009.8
    accito: "CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_TIMEOUT_RID", // 50009.9
    nod: "???????", // ***** Value is required in nRF Asset Tracker *****
  },
  bat: {
    v: "LWM2M_OBJECT_DEVICE_ID, 0, POWER_SOURCE_VOLTAGE_RID", // 3.7
    ts: "???????", // ***** Value is required in nRF Asset Tracker *****
  },
  env: {
    v: {
      temp: "IPSO_OBJECT_TEMP_SENSOR_ID, 0, SENSOR_VALUE_RID", // 3303.5700
      hum: "IPSO_OBJECT_HUMIDITY_SENSOR_ID, 0, SENSOR_VALUE_RID", // 3304.5700
      atmp: "IPSO_OBJECT_PRESSURE_ID, 0, SENSOR_VALUE_RID", //3323.5700
    },
    ts: 1645072000000,
  },
  gnss: {
    v: {
      lng: "LWM2M_OBJECT_LOCATION_ID, 0, LONGITUDE_RID", // 6.1
      lat: "LWM2M_OBJECT_LOCATION_ID, 0, LATITUDE_RID", // 6.0
      acc: "LWM2M_OBJECT_LOCATION_ID, 0, RADIUS_RID", // 6.3
      alt: "LWM2M_OBJECT_LOCATION_ID, 0, ALTITUDE_RID	", // 6.2
      spd: "LWM2M_OBJECT_LOCATION_ID, 0, SPEED_RID", // 6.6
      hdg: "???????", // ***** Value is required in nRF Asset Tracker *****
    },
    ts: 1645072000000,
  },
  dev: {
    v: {
      imei: "LWM2M_OBJECT_DEVICE_ID, 0, DEVICE_SERIAL_NUMBER_ID", // 3.2
      iccid: "??????????, MODEM_ICCID", // ***** Value is required in nRF Asset Tracker *****
      modV: "LWM2M_OBJECT_DEVICE_ID, MODEM_FIRMWARE_VERSION", // 3.3
      brdV: "??????????, MODEM_BOARD", // ***** Value is required in nRF Asset Tracker *****
    },
    ts: 1645072000000,
  },
  roam: {
    v: {
      band: "???????", // ***** Value is required in nRF Asset Tracker *****
      nw: "???????", // ***** Value is required in nRF Asset Tracker *****
      rsrp: "LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,RSS", // 4.2
      area: "LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,LAC	", // 4.12
      mccmnc:
        "LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,SMCC & LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,SMNC", //4.10 & 4.9
      cell: "LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,RSS", // 4.8
      ip: "LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID,0,LAC	", // 4.4
      eest: "???????", // ***** Value is required in nRF Asset Tracker *****
    },
    ts: 1645072000000,
  },
};
```
