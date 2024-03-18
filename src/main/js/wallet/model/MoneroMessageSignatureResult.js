/**
 * Message signature verification result.
 * 
 * @class
 */
class MoneroMessageSignatureResult {
  
  constructor(stateOrIsGood, isOld, signatureType, version) {
    if (typeof stateOrIsGood === "boolean") {
      this.state = {};
      this.state.isGood = stateOrIsGood;
      this.state.isOld = isOld;
      this.state.signatureType = signatureType;
      this.state.version = version;
    } else {
      this.state = stateOrIsGood;
    }
  }
  
  toJson() {
    return Object.assign({}, this.state);
  }

  isGood() {
    return this.state.isGood;
  }

  setIsGood(isGood) {
    this.state.isGood = isGood;
    return this;
  }
  
  isOld() {
    return this.state.isOld;
  }

  setIsOld(isOld) {
    this.state.isOld = isOld;
    return this;
  }
  
  getSignatureType() {
    return this.state.signatureType;
  }

  setSignatureType(signatureType) {
    this.state.signatureType = signatureType;
    return this;
  }
  
  getVersion() {
    return this.state.version;
  }

  setVersion(version) {
    this.state.version = version;
    return this;
  }
}

module.exports = MoneroMessageSignatureResult;