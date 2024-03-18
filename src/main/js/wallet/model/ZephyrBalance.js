const BigInteger = require("../../common/biginteger").BigInteger;
const GenUtils = require("../../common/GenUtils");

/**
 * Zephyr balance model, holds pairs of asset and amount/balance
 */
class ZephyrBalance {
  constructor(stateOrAmount, assetType) {
    this.state = {};
    // construct from json
    if (typeof stateOrAmount === "object") {
      // deserialize balances
      Object.entries(stateOrAmount).forEach(([assetType, amount]) => {
        return this.setAssetBalance(assetType, amount);
      });
    } else {
      // construct from individual params
      this.setAssetBalance(assetType, stateOrAmount);
    }
  }

  toJson() {
    let json = Object.assign({}, this.state);
    Object.entries(json).forEach(([assetType, amount]) => (json[assetType] = amount.toString()));
    return json;
  }

  setAssetBalance(asset, amount) {
    // deserialize amount
    if (amount !== undefined && !(amount instanceof BigInteger)) amount = BigInteger.parse(amount);
    this.state[asset] = amount;
  }

  toDict() {
    return this.state;
  }

  toArray() {
    return Object.entries(this.state);
  }

  toString(indent = 0) {
    let str = "";
    Object.entries(this.state).forEach(([assetType, amount]) => {
      str += GenUtils.kvLine("Asset", assetType, indent);
      str += GenUtils.kvLine("Amount", amount.toString(), indent);
    });

    return str;
  }
}

module.exports = ZephyrBalance;
