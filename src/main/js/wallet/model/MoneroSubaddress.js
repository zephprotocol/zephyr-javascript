const ZephyrBalance = require("./ZephyrBalance");
const GenUtils = require("../../common/GenUtils");
const assert = require("assert");

/**
 * Monero subaddress model.
 */
class MoneroSubaddress {
  constructor(stateOrAddress, accountIndex, index) {
    if (stateOrAddress === undefined || typeof stateOrAddress === "string") {
      this.state = {};
      this.setAddress(stateOrAddress);
      this.setAccountIndex(accountIndex);
      this.setIndex(index);
    } else {
      this.state = stateOrAddress;
      assert(
        accountIndex === undefined && index === undefined,
        "Can construct MoneroSubaddress with object or params but not both",
      );
      if (this.state.balance !== undefined && !(this.state.balance instanceof ZephyrBalance))
        this.state.balance = new ZephyrBalance(this.state.balance);
      if (this.state.unlockedBalance !== undefined && !(this.state.unlockedBalance instanceof ZephyrBalance))
        this.state.unlockedBalance = new ZephyrBalance(this.state.unlockedBalance);
    }
  }

  toJson() {
    let json = Object.assign({}, this.state);
    if (json.balance) json.balance = json.balance.toJson();
    if (json.unlockedBalance) json.unlockedBalance = json.unlockedBalance.toJson();
    return json;
  }

  getAccountIndex() {
    return this.state.accountIndex;
  }

  setAccountIndex(accountIndex) {
    this.state.accountIndex = accountIndex;
    return this;
  }

  getIndex() {
    return this.state.index;
  }

  setIndex(index) {
    this.state.index = index;
    return this;
  }

  getAddress() {
    return this.state.address;
  }

  setAddress(address) {
    this.state.address = address;
    return this;
  }

  getLabel() {
    return this.state.label;
  }

  setLabel(label) {
    this.state.label = label;
    return this;
  }

  getBalance() {
    return this.state.balance;
  }

  setBalance(balance) {
    this.state.balance = balance;
    return this;
  }

  getUnlockedBalance() {
    return this.state.unlockedBalance;
  }

  setUnlockedBalance(unlockedBalance) {
    this.state.unlockedBalance = unlockedBalance;
    return this;
  }

  getNumUnspentOutputs() {
    return this.state.numUnspentOutputs;
  }

  setNumUnspentOutputs(numUnspentOutputs) {
    this.state.numUnspentOutputs = numUnspentOutputs;
    return this;
  }

  isUsed() {
    return this.state.isUsed;
  }

  setIsUsed(isUsed) {
    this.state.isUsed = isUsed;
    return this;
  }

  getNumBlocksToUnlock() {
    return this.state.numBlocksToUnlock;
  }

  setNumBlocksToUnlock(numBlocksToUnlock) {
    this.state.numBlocksToUnlock = numBlocksToUnlock;
    return this;
  }

  toString(indent) {
    let str = "";
    str += GenUtils.kvLine("Account index", this.getAccountIndex(), indent);
    str += GenUtils.kvLine("Subaddress index", this.getIndex(), indent);
    str += GenUtils.kvLine("Address", this.getAddress(), indent);
    str += GenUtils.kvLine("Label", this.getLabel(), indent);
    str += GenUtils.kvLine("Balance", this.getBalance(), indent);
    str += GenUtils.kvLine("Unlocked balance", this.getUnlockedBalance(), indent);
    str += GenUtils.kvLine("Num unspent outputs", this.getNumUnspentOutputs(), indent);
    str += GenUtils.kvLine("Is used", this.isUsed(), indent);
    str += GenUtils.kvLine("Num blocks to unlock", this.isUsed(), indent);
    return str.slice(0, str.length - 1); // strip last newline
  }
}

module.exports = MoneroSubaddress;
