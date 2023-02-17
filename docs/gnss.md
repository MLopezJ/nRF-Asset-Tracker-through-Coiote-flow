# GNSS

| Field | Description                               | Type   | Minimum | Maximum | Required |
| ----- | ----------------------------------------- | ------ | ------- | ------- | -------- |
| lng   | Longitude                                 | number | -180    | 180     | Yes      |
| lat   | Latitude                                  | number | -90     | 90      | Yes      |
| acc   | Accuracy (2D 1-sigma) in meters           | number | 0       |         | No       |
| alt   | Altitude above WGS-84 ellipsoid in meters | number |         |         | Yes      |
| spd   | Horizontal speed in meters                | number | 0       |         | Yes      |
| hdg   | Heading of movement in degrees            | number | 0       | 360     | Yes      |

## Data transition: nRF Asset Tracker -> LwM2M def

| nRF Asset Tracker | LwM2M converter lib | coiote azure | firmware                                   | LwM2M def   |
| ----------------- | ------------------- | ------------ | ------------------------------------------ | ----------- |
| lng               | 6.1                 | "6.0.1"      | LWM2M_OBJECT_LOCATION_ID, 0, LONGITUDE_RID | 6.1         |
| lat               | 6.0                 | "6.0.0"      | LWM2M_OBJECT_LOCATION_ID, 0, LATITUDE_RID  | 6.0         |
| acc               | 6.3                 | 6.0.3        | LWM2M_OBJECT_LOCATION_ID, 0, RADIUS_RID    | 6.3         |
| alt               | 6.2                 | "6.0.2"      | LWM2M_OBJECT_LOCATION_ID, 0, ALTITUDE_RID  | 6.2         |
| spd               | 6.6                 | "6.0.6"      | LWM2M_OBJECT_LOCATION_ID, 0, SPEED_RID     | 6.6         |
| hdg               | **???????**         | **???????**  | **???????**                                | **???????** |
