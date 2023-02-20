/**
 * It is required to found the LwM2M definition and firmware's equivalent var name for the following variables.
 *
 * Object is a representation of required input in nRF Asset Tracker
 * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json
 *
 *
 */
const missingValues = {
  cfg: {
    /**
     * About: List of modules which should be disabled when sampling data
     * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/cfg.schema.json#L61
     */
    nod: "???????", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****
  },
  bat: {
    /**
     * About: Timestamp as Unix epoch with millisecond precision (UTC)
     * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json#L21
     */
    ts: "???????", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****
  },
  env: {},
  gnss: {
    v: {
      /**
       * About: Heading of movement in degrees
       * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json#L95
       */
      hdg: "???????", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****
    },
  },
  dev: {
    v: {
      /**
       * About: SIM ICCID
       * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json#L126
       */
      iccid: "??????????, MODEM_ICCID", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****

      /**
       * About: Board Version
       * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json#L139
       */
      brdV: "??????????, MODEM_BOARD", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****
    },
  },
  roam: {
    v: {
      /**
       * About: band
       * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json#L163
       */
      band: "???????", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****

      /**
       * About: Network mode
       * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json#L169
       */
      nw: "???????", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****

      /**
       * About: The %CONEVAL AT command returns amongst other data the energy estimate: Relative estimated energy consumption of data transmission
       * compared to nominal consumption. A higher value means smaller energy consumption. 5: Difficulties in setting up connections. Maximum number
       * of repetitions might be needed for data. 6: Poor conditions. Setting up a connection might require retries and a higher number of repetitions
       * for data. 7: Normal conditions for cIoT device. No repetitions for data or only a few repetitions in the worst case. 8: Good conditions.
       * Possibly very good conditions for small amounts of data. 9: Very good conditions. Efficient data transfer estimated also for larger amounts of data.
       * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.schema.json#L211
       */
      eest: "???????", // ***** Value is required in nRF Asset Tracker and equivalent definition was not found in firmware *****
    },
  },
};
