const BigInteger = require("../../common/biginteger").BigInteger;

/**
 * Zephyr reserve info, contains the network reserve info at current height
 */
class ZephyrReserveInfo {
  constructor(stateOrAmount, assetType) {
    this.state = {};
    // construct from json
    if (typeof stateOrAmount === "object") {
      // deserialize balances
      Object.entries(stateOrAmount).forEach(([key, value]) => this.setReserveInfo(key, value));
    } else {
      throw new Error("ZephyrReserveInfo constructor requires an object");
    }
  }

  toJson() {
    let json = Object.assign({}, this.state);
    Object.entries(json).forEach(([key, value]) => (json[key] = value.toString()));
    return json;
  }

  setReserveInfo(key, value) {
    // deserialize supply
    if (value !== undefined && !(value instanceof BigInteger)) value = BigInteger.parse(value);
    this.state[key] = value;
  }

  toDict() {
    return this.state;
  }

  toArray() {
    return Object.entries(this.state);
  }

  toString(indent = 0) {
    let str = "";
    Object.entries(this.state).forEach(([key, value]) => {
      str += GenUtils.kvLine(key, value.toString(), indent);
      str += GenUtils.kvLine(key, value.toString(), indent);
    });

    return str;
  }
}

module.exports = ZephyrReserveInfo;
