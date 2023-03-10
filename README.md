# nRF Asset Tracker through Coiote flow

> Module and data flow of the nRF Asset Tracker by its integration with Coiote from AVSystem

## Modules

![IMG_7647](https://user-images.githubusercontent.com/8351865/219425836-2cc4e559-277a-4578-b148-0e164b27996d.jpg)

### Links

- [LwM2M](https://github.com/OpenMobileAlliance/lwm2m-registry)
- [Thingy:91 (firmware)](https://github.com/NordicSemiconductor/asset-tracker-cloud-firmware-azure)
- [Coiote Azure](https://iotdevzone.avsystem.com/docs/Demo_Projects/Tracking_tutorial/)
- [LwM2M converter lib](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js)
- [nRF Asset Tracker](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json)

## DATA

When data go through the module flow its change its form although refers to the same LwM2M definition.

| LwM2M Object.Resource | firmware                                           | coiote azure | LwM2M converter lib | nRF Asset Tracker |
| ---------- | -------------------------------------------------- | ------------ | ------------------- | ----------------- |
| 3.2        | LWM2M_OBJECT_DEVICE_ID, 0, DEVICE_SERIAL_NUMBER_ID | 3.0.2        | 3.2                 | imei              |

In LwM2M the object `3` refers to `Device` and its resource `2` to the `serial number`. The firmware module uses the serial number of the device, which is the last value mentioned, but call it `LWM2M_OBJECT_DEVICE_ID, 0, DEVICE_SERIAL_NUMBER_ID`. Similar in the Coiote module, there this same value refers to `3.0.2` and in the LwM2M converter library it is `3.2`. The most drastical change is in nRF Asset Tracker, where the variable name to refers to this value as `imei`.

Same situation happens for the rest of values of the [nRF Asset Tracker](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json) input data. In order to provide clarity in this data transition, the following JSON was created; where keys represent the variable name in the `nRF Asset Tracker` module, values are the name in the `firmware` module and comments are how the object looks like in the `LwM2M definition`.


There are some values that were not able to find in this flow transition. Those are documented here: 
> [missing values](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/blob/saga/src/missingValues.ts) in json format

### Data transicion

```javascript
const dataTransicion = {
  cfg: {
    act: "CONFIGURATION_OBJECT_ID, 0, PASSIVE_MODE_RID", // 50009.0
    actwt: "CONFIGURATION_OBJECT_ID, 0, ACTIVE_WAIT_TIMEOUT_RID", // 50009.2
    mvres: "CONFIGURATION_OBJECT_ID, 0, MOVEMENT_RESOLUTION_RID", // 50009.3
    mvt: "CONFIGURATION_OBJECT_ID, 0, MOVEMENT_TIMEOUT_RID", // 50009.4
    loct: "CONFIGURATION_OBJECT_ID, 0, LOCATION_TIMEOUT_RID", // 50009.1
    accath: "CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_ACT_THRESHOLD_RID", // "50009.5"
    accith: "CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_THRESHOLD_RID", // 50009.8
    accito: "CONFIGURATION_OBJECT_ID, 0, ACCELEROMETER_INACT_TIMEOUT_RID", // 50009.9
    nod: [] // @see https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow/issues/2#issuecomment-1440102847
  },
  bat: {
    v: "LWM2M_OBJECT_DEVICE_ID, 0, POWER_SOURCE_VOLTAGE_RID", // 3.7
    ts: 1645072000000
  },
  env: {
    v: {
      temp: "IPSO_OBJECT_TEMP_SENSOR_ID, 0, SENSOR_VALUE_RID", // 3303.5700
      hum: "IPSO_OBJECT_HUMIDITY_SENSOR_ID, 0, SENSOR_VALUE_RID", // 3304.5700
      atmp: "IPSO_OBJECT_PRESSURE_ID, 0, SENSOR_VALUE_RID", //3323.5700 or 3315.5700 
      // @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/issues/24
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
      brdV: LWM2M_OBJECT_DEVICE_ID, 0, MANUFACTURER_RID // 3.0
    },
    ts: 1645072000000,
  },
  roam: {
    v: {
      band: "???????", // ***** Value is required in nRF Asset Tracker *****
      nw: LWM2M_OBJECT_CONNECTIVITY_MONITORING_ID, 0, NETWORK_BEARER_ID, // 4.0
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

## Process

![IMG_7647](https://user-images.githubusercontent.com/8351865/219425836-2cc4e559-277a-4578-b148-0e164b27996d.jpg)

1. Thingy:91 send data to Coiote Dashboard
2. Coiote transform data to coiote dialect
3. Azure receives the data 
4. Data is transformed to [LwM2M equivalent](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js)
5. Result of step 4 is checked against [LwM2M types lib](https://github.com/NordicSemiconductor/lwm2m-types-js)
6. If result of check is positive, the data is transformed to nRF Asset Tracker dialect. (to be implemented)
7. Result is send to web app.
