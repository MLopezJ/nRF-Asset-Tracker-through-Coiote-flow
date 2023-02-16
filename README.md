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
   Config,
   Batery,
   Enviromental
   Device,
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


| nRF Asset Tracker | LwM2M | LwM2M converter lib | coiote azure | firmware | Required |
|-------|-------------|------|---------|---------|----------|
| lng   | 6.1   | 6.1  | "6.0.1"    | LONGITUDE_RID     | Yes      |
| lat   | 6.0    | 6.0 | "6.0.1"     | LATITUDE_RID      | Yes      |
| **acc**   | **???????** | **???????** | **???????**    |   **???????**     | **No**       |
| alt   |  6.2 | 6.2 |   "6.0.2"    |    ALTITUDE_RID     | Yes      |
| spd   | 6.6 | 6.6 | "6.0.6"    |     SPEED_RID    | Yes      |
| **hdg**   | **???????** | **???????** | **???????**   | **???????**     | **Yes**      |

