const assert = require("assert");
const BigInteger = require("../../common/biginteger").BigInteger;
const GenUtils = require("../../common/GenUtils");
const MoneroOutput = require("./MoneroOutput");

/**
 * Represents a transaction on the Monero network.
 * 
 * @class
 */
class MoneroTx {
  
  /**
   * Construct the model.
   * 
   * @param {MoneroTx|object} state is existing state to initialize from (optional)
   */
  constructor(state) {
    
    // initialize internal state
    if (!state) state = {};
    else if (state instanceof MoneroTx) state = state.toJson();
    else if (typeof state === "object") state = Object.assign({}, state);
    else throw new MoneroError("state must be a MoneroTx or JavaScript object");
    this.state = state;
    
    // deserialize fee
    if (state.fee !== undefined && !(state.fee instanceof BigInteger)) state.fee = BigInteger.parse(state.fee);
    
    // deserialize inputs
    if (state.inputs) {
      for (let i = 0; i < state.inputs.length; i++) {
        if (!(state.inputs[i] instanceof MoneroOutput)) {
          state.inputs[i] = new MoneroOutput(Object.assign(state.inputs[i], {tx: this}));
        }
      }
    }
    
    // deserialize outputs
    if (state.outputs) {
      for (let i = 0; i < state.outputs.length; i++) {
        if (!(state.outputs[i] instanceof MoneroOutput)) {
          state.outputs[i] = new MoneroOutput(Object.assign(state.outputs[i], {tx: this}));
        }
      }
    }
  }
  
  getBlock() {
    return this.state.block;
  }
  
  setBlock(block) {
    this.state.block = block;
    return this;
  }
  
  getHeight() {
    return this.getBlock() === undefined ? undefined : this.getBlock().getHeight();
  }
  
  getHash() {
    return this.state.hash;
  }
  
  setHash(hash) {
    this.state.hash = hash;
    return this;
  }
  
  getVersion() {
    return this.state.version;
  }
  
  setVersion(version) {
    this.state.version = version;
    return this;
  }
  
  isMinerTx() {
    return this.state.isMinerTx;
  }
  
  setIsMinerTx(miner) {
    this.state.isMinerTx = miner;
    return this;
  }
  
  getPaymentId() {
    return this.state.paymentId;
  }
  
  setPaymentId(paymentId) {
    this.state.paymentId = paymentId;
    return this;
  }
  
  getFee() {
    return this.state.fee;
  }
  
  setFee(fee) {
    this.state.fee = fee;
    return this;
  }
  
  getRingSize() {
    return this.state.ringSize;
  }
  
  setRingSize(ringSize) {
    this.state.ringSize = ringSize;
    return this;
  }
  
  getRelay() {
    return this.state.relay;
  }
  
  setRelay(relay) {
    this.state.relay = relay;
    return this;
  }
  
  isRelayed() {
    return this.state.isRelayed;
  }
  
  setIsRelayed(isRelayed) {
    this.state.isRelayed = isRelayed;
    return this;
  }
  
  isConfirmed() {
    return this.state.isConfirmed;
  }
  
  setIsConfirmed(isConfirmed) {
    this.state.isConfirmed = isConfirmed;
    return this;
  }
  
  inTxPool() {
    return this.state.inTxPool;
  }
  
  setInTxPool(inTxPool) {
    this.state.inTxPool = inTxPool;
    return this;
  }
  
  getNumConfirmations() {
    return this.state.numConfirmations;
  }
  
  setNumConfirmations(numConfirmations) {
    this.state.numConfirmations = numConfirmations;
    return this;
  }
  
  getUnlockHeight() {
    return this.state.unlockHeight;
  }
  
  setUnlockHeight(unlockHeight) {
    this.state.unlockHeight = unlockHeight;
    return this;
  }
  
  getLastRelayedTimestamp() {
    return this.state.lastRelayedTimestamp;
  }
  
  setLastRelayedTimestamp(lastRelayedTimestamp) {
    this.state.lastRelayedTimestamp = lastRelayedTimestamp;
    return this;
  }
  
  getReceivedTimestamp() {
    return this.state.receivedTimestamp;
  }
  
  setReceivedTimestamp(receivedTimestamp) {
    this.state.receivedTimestamp = receivedTimestamp;
    return this;
  }
  
  isDoubleSpendSeen() {
    return this.state.isDoubleSpendSeen;
  }
  
  setIsDoubleSpend(isDoubleSpendSeen) {
    this.state.isDoubleSpendSeen = isDoubleSpendSeen;
    return this;
  }
  
  getKey() {
    return this.state.key;
  }
  
  setKey(key) {
    this.state.key = key;
    return this;
  }
  
  /**
   * Get full transaction hex.  Full hex = pruned hex + prunable hex.
   * 
   * @return {string} is full transaction hex
   */
  getFullHex() {
    return this.state.fullHex;
  }
  
  setFullHex(fullHex) {
    this.state.fullHex = fullHex;
    return this;
  }
  
  /**
   * Get pruned transaction hex.  Full hex = pruned hex + prunable hex.
   * 
   * @return {string} is pruned transaction hex
   */
  getPrunedHex() {
    return this.state.prunedHex;
  }
  
  setPrunedHex(prunedHex) {
    this.state.prunedHex = prunedHex;
    return this;
  }
  
  /**
   * Get prunable transaction hex which is hex that is removed from a pruned
   * transaction. Full hex = pruned hex + prunable hex.
   * 
   * @return {string} is the prunable transaction hex
   */
  getPrunableHex() {
    return this.state.prunableHex;
  }
  
  setPrunableHex(prunableHex) {
    this.state.prunableHex = prunableHex;
    return this;
  }
  
  getPrunableHash() {
    return this.state.prunableHash;
  }
  
  setPrunableHash(prunableHash) {
    this.state.prunableHash = prunableHash;
    return this;
  }
  
  getSize() {
    return this.state.size;
  }
  
  setSize(size) {
    this.state.size = size;
    return this;
  }
  
  getWeight() {
    return this.state.weight;
  }
  
  setWeight(weight) {
    this.state.weight = weight;
    return this;
  }
  
  getInputs() {
    return this.state.inputs;
  }
  
  setInputs(inputs) {
    this.state.inputs = inputs;
    return this;
  }
  
  getOutputs() {
    return this.state.outputs;
  }
  
  setOutputs(outputs) {
    this.state.outputs = outputs;
    return this;
  }
  
  getOutputIndices() {
    return this.state.outputIndices;
  }
  
  setOutputIndices(outputIndices) {
    this.state.outputIndices = outputIndices;
    return this;
  }
  
  getMetadata() {
    return this.state.metadata;
  }
  
  setMetadata(metadata) {
    this.state.metadata = metadata;
    return this;
  }
  
  getExtra() {
    return this.state.extra;
  }
  
  setExtra(extra) {
    this.state.extra = extra;
    return this;
  }

  getRctSignatures() {
    return this.state.rctSignatures;
  }
  
  setRctSignatures(rctSignatures) {
    this.state.rctSignatures = rctSignatures;
    return this;
  }
  
  getRctSigPrunable() {
    return this.state.rctSigPrunable;
  }
  
  setRctSigPrunable(rctSigPrunable) {
    this.state.rctSigPrunable = rctSigPrunable;
    return this;
  }
  
  isKeptByBlock() {
    return  this.state.isKeptByBlock;
  }
  
  setIsKeptByBlock(isKeptByBlock) {
    this.state.isKeptByBlock = isKeptByBlock;
    return this;
  }
  
  isFailed() {
    return this.state.isFailed;
  }
  
  setIsFailed(isFailed) {
    this.state.isFailed = isFailed;
    return this;
  }
  
  getLastFailedHeight() {
    return this.state.lastFailedHeight;
  }
  
  setLastFailedHeight(lastFailedHeight) {
    this.state.lastFailedHeight = lastFailedHeight;
    return this;
  }
  
  getLastFailedHash() {
    return this.state.lastFailedHash;
  }
  
  setLastFailedHash(lastFailedHash) {
    this.state.lastFailedHash = lastFailedHash;
    return this;
  }
  
  getMaxUsedBlockHeight() {
    return this.state.maxUsedBlockHeight;
  }
  
  setMaxUsedBlockHeight(maxUsedBlockHeight) {
    this.state.maxUsedBlockHeight = maxUsedBlockHeight;
    return this;
  }
  
  getMaxUsedBlockHash() {
    return this.state.maxUsedBlockHash;
  }
  
  setMaxUsedBlockHash(maxUsedBlockHash) {
    this.state.maxUsedBlockHash = maxUsedBlockHash;
    return this;
  }
  
  getSignatures() {
    return this.state.signatures;
  }
  
  setSignatures(signatures) {
    this.state.signatures = signatures;
    return this;
  }
  
  copy() {
    return new MoneroTx(this);
  }
  
  toJson() {
    let json = Object.assign({}, this.state);
    if (this.getFee()) json.fee = this.getFee().toString();
    if (this.getInputs()) {
      json.inputs = [];
      for (let input of this.getInputs()) json.inputs.push(input.toJson());
    }
    if (this.getOutputs()) {
      json.outputs = [];
      for (let output of this.getOutputs()) json.outputs.push(output.toJson());
    }
    if (this.getExtra()) json.extra = this.getExtra().slice();
    delete json.block;  // do not serialize parent block
    return json;
  }
  
  /**
   * Updates this transaction by merging the latest information from the given
   * transaction.
   * 
   * @param tx is the transaction to update this transaction with
   * @return {MoneroTx} this for method chaining
   */
  merge(tx) {
    assert(tx instanceof MoneroTx);
    if (this === tx) return this;
    
    // merge blocks if they're different
    if (this.getBlock() !== tx.getBlock()) {
      if (this.getBlock() === undefined) {
        this.setBlock(tx.getBlock());
        this.getBlock().getTxs[this.getBlock().getTxs().indexOf(tx)] = this; // update block to point to this tx
      } else if (tx.getBlock() !== undefined) {
        this.getBlock().merge(tx.getBlock()); // comes back to merging txs
        return this;
      }
    }
    
    // otherwise merge tx fields
    this.setHash(GenUtils.reconcile(this.getHash(), tx.getHash()));
    this.setVersion(GenUtils.reconcile(this.getVersion(), tx.getVersion()));
    this.setPaymentId(GenUtils.reconcile(this.getPaymentId(), tx.getPaymentId()));
    this.setFee(GenUtils.reconcile(this.getFee(), tx.getFee()));
    this.setRingSize(GenUtils.reconcile(this.getRingSize(), tx.getRingSize()));
    this.setIsConfirmed(GenUtils.reconcile(this.isConfirmed(), tx.isConfirmed(), {resolveTrue: true})); // tx can become confirmed
    this.setIsMinerTx(GenUtils.reconcile(this.isMinerTx(), tx.isMinerTx()));
    this.setRelay(GenUtils.reconcile(this.getRelay(), tx.getRelay(), {resolveTrue: true}));       // tx can become relayed
    this.setIsRelayed(GenUtils.reconcile(this.isRelayed(), tx.isRelayed(), {resolveTrue: true})); // tx can become relayed
    this.setIsDoubleSpend(GenUtils.reconcile(this.isDoubleSpendSeen(), tx.isDoubleSpendSeen(), {resolveTrue: true})); // double spend can become seen
    this.setKey(GenUtils.reconcile(this.getKey(), tx.getKey()));
    this.setFullHex(GenUtils.reconcile(this.getFullHex(), tx.getFullHex()));
    this.setPrunedHex(GenUtils.reconcile(this.getPrunedHex(), tx.getPrunedHex()));
    this.setPrunableHex(GenUtils.reconcile(this.getPrunableHex(), tx.getPrunableHex()));
    this.setPrunableHash(GenUtils.reconcile(this.getPrunableHash(), tx.getPrunableHash()));
    this.setSize(GenUtils.reconcile(this.getSize(), tx.getSize()));
    this.setWeight(GenUtils.reconcile(this.getWeight(), tx.getWeight()));
    this.setOutputIndices(GenUtils.reconcile(this.getOutputIndices(), tx.getOutputIndices()));
    this.setMetadata(GenUtils.reconcile(this.getMetadata(), tx.getMetadata()));
    this.setExtra(GenUtils.reconcile(this.getExtra(), tx.getExtra()));
    this.setRctSignatures(GenUtils.reconcile(this.getRctSignatures(), tx.getRctSignatures()));
    this.setRctSigPrunable(GenUtils.reconcile(this.getRctSigPrunable(), tx.getRctSigPrunable()));
    this.setIsKeptByBlock(GenUtils.reconcile(this.isKeptByBlock(), tx.isKeptByBlock()));
    this.setIsFailed(GenUtils.reconcile(this.isFailed(), tx.isFailed(), {resolveTrue: true}));
    this.setLastFailedHeight(GenUtils.reconcile(this.getLastFailedHeight(), tx.getLastFailedHeight()));
    this.setLastFailedHash(GenUtils.reconcile(this.getLastFailedHash(), tx.getLastFailedHash()));
    this.setMaxUsedBlockHeight(GenUtils.reconcile(this.getMaxUsedBlockHeight(), tx.getMaxUsedBlockHeight()));
    this.setMaxUsedBlockHash(GenUtils.reconcile(this.getMaxUsedBlockHash(), tx.getMaxUsedBlockHash()));
    this.setSignatures(GenUtils.reconcile(this.getSignatures(), tx.getSignatures()));
    this.setUnlockHeight(GenUtils.reconcile(this.getUnlockHeight(), tx.getUnlockHeight()));
    this.setNumConfirmations(GenUtils.reconcile(this.getNumConfirmations(), tx.getNumConfirmations(), {resolveMax: true})); // num confirmations can increase
    
    // merge inputs
    if (tx.getInputs()) {
      for (let merger of tx.getInputs()) {
        let merged = false;
        merger.setTx(this);
        if (!this.getInputs()) this.setInputs([]);
        for (let mergee of this.getInputs()) {
          if (mergee.getKeyImage().getHex() === merger.getKeyImage().getHex()) {
            mergee.merge(merger);
            merged = true;
            break;
          }
        }
        if (!merged) this.getInputs().push(merger);
      }
    }
    
    // merge outputs
    if (tx.getOutputs()) {
      for (let output of tx.getOutputs()) output.setTx(this);
      if (!this.getOutputs()) this.setOutputs(tx.getOutputs());
      else {
        
        // merge outputs if key image or stealth public key present, otherwise append
        for (let merger of tx.getOutputs()) {
          let merged = false;
          merger.setTx(this);
          for (let mergee of this.getOutputs()) {
            if ((merger.getKeyImage() && mergee.getKeyImage().getHex() === merger.getKeyImage().getHex()) ||
                (merger.getStealthPublicKey() && mergee.getStealthPublicKey() === merger.getStealthPublicKey())) {
             mergee.merge(merger);
             merged = true;
             break;
            }
          }
          if (!merged) this.getOutputs().push(merger); // append output
        }
      }
    }
    
    // handle unrelayed -> relayed -> confirmed
    if (this.isConfirmed()) {
      this.setInTxPool(false);
      this.setReceivedTimestamp(undefined);
      this.setLastRelayedTimestamp(undefined);
    } else {
      this.setInTxPool(GenUtils.reconcile(this.inTxPool(), tx.inTxPool(), {resolveTrue: true})); // unrelayed -> tx pool
      this.setReceivedTimestamp(GenUtils.reconcile(this.getReceivedTimestamp(), tx.getReceivedTimestamp(), {resolveMax: false})); // take earliest receive time
      this.setLastRelayedTimestamp(GenUtils.reconcile(this.getLastRelayedTimestamp(), tx.getLastRelayedTimestamp(), {resolveMax: true}));  // take latest relay time
    }
    
    return this;  // for chaining
  }
  
  toString(indent = 0) {
    let str = "";
    str += GenUtils.getIndent(indent) + "=== TX ===\n";
    str += GenUtils.kvLine("Tx hash", this.getHash(), indent);
    str += GenUtils.kvLine("Height", this.getHeight(), indent);
    str += GenUtils.kvLine("Version", this.getVersion(), indent);
    str += GenUtils.kvLine("Is miner tx", this.isMinerTx(), indent);
    str += GenUtils.kvLine("Payment ID", this.getPaymentId(), indent);
    str += GenUtils.kvLine("Fee", this.getFee(), indent);
    str += GenUtils.kvLine("Ring size", this.getRingSize(), indent);
    str += GenUtils.kvLine("Relay", this.getRelay(), indent);
    str += GenUtils.kvLine("Is relayed", this.isRelayed(), indent);
    str += GenUtils.kvLine("Is confirmed", this.isConfirmed(), indent);
    str += GenUtils.kvLine("In tx pool", this.inTxPool(), indent);
    str += GenUtils.kvLine("Num confirmations", this.getNumConfirmations(), indent);
    str += GenUtils.kvLine("Unlock height", this.getUnlockHeight(), indent);
    str += GenUtils.kvLine("Last relayed time", this.getLastRelayedTimestamp(), indent);
    str += GenUtils.kvLine("Received time", this.getReceivedTimestamp(), indent);
    str += GenUtils.kvLine("Is double spend", this.isDoubleSpendSeen(), indent);
    str += GenUtils.kvLine("Key", this.getKey(), indent);
    str += GenUtils.kvLine("Full hex", this.getFullHex(), indent);
    str += GenUtils.kvLine("Pruned hex", this.getPrunedHex(), indent);
    str += GenUtils.kvLine("Prunable hex", this.getPrunableHex(), indent);
    str += GenUtils.kvLine("Prunable hash", this.getPrunableHash(), indent);
    str += GenUtils.kvLine("Size", this.getSize(), indent);
    str += GenUtils.kvLine("Weight", this.getWeight(), indent);
    str += GenUtils.kvLine("Output indices", this.getOutputIndices(), indent);
    str += GenUtils.kvLine("Metadata", this.getMetadata(), indent);
    str += GenUtils.kvLine("Extra", this.getExtra(), indent);
    str += GenUtils.kvLine("RCT signatures", this.getRctSignatures(), indent);
    str += GenUtils.kvLine("RCT sig prunable", this.getRctSigPrunable(), indent);
    str += GenUtils.kvLine("Kept by block", this.isKeptByBlock(), indent);
    str += GenUtils.kvLine("Is failed", this.isFailed(), indent);
    str += GenUtils.kvLine("Last failed height", this.getLastFailedHeight(), indent);
    str += GenUtils.kvLine("Last failed hash", this.getLastFailedHash(), indent);
    str += GenUtils.kvLine("Max used block height", this.getMaxUsedBlockHeight(), indent);
    str += GenUtils.kvLine("Max used block hash", this.getMaxUsedBlockHash(), indent);
    str += GenUtils.kvLine("Signatures", this.getSignatures(), indent);
    if (this.getInputs()) {
      str += GenUtils.kvLine("Inputs", "", indent);
      for (let i = 0; i < this.getInputs().length; i++) {
        str += GenUtils.kvLine(i + 1, "", indent + 1);
        str += this.getInputs()[i].toString(indent + 2);
        str += '\n'
      }
    }
    if (this.getOutputs()) {
      str += GenUtils.kvLine("Outputs", "", indent);
      for (let i = 0; i < this.getOutputs().length; i++) {
        str += GenUtils.kvLine(i + 1, "", indent + 1);
        str += this.getOutputs()[i].toString(indent + 2);
        str += '\n'
      }
    }
    return str.slice(0, str.length - 1);  // strip last newline
  }
}

// default payment id
MoneroTx.DEFAULT_PAYMENT_ID = "0000000000000000";

module.exports = MoneroTx;