export = MoneroTx;
/**
 * Represents a transaction on the Monero network.
 *
 * @class
 */
declare class MoneroTx {
    /**
     * Construct the model.
     *
     * @param {MoneroTx|object} state is existing state to initialize from (optional)
     */
    constructor(state: MoneroTx | object);
    state: any;
    getBlock(): any;
    setBlock(block: any): MoneroTx;
    getHeight(): any;
    getHash(): any;
    setHash(hash: any): MoneroTx;
    getVersion(): any;
    setVersion(version: any): MoneroTx;
    isMinerTx(): any;
    setIsMinerTx(miner: any): MoneroTx;
    getPaymentId(): any;
    setPaymentId(paymentId: any): MoneroTx;
    getFee(): any;
    setFee(fee: any): MoneroTx;
    getRingSize(): any;
    setRingSize(ringSize: any): MoneroTx;
    getRelay(): any;
    setRelay(relay: any): MoneroTx;
    isRelayed(): any;
    setIsRelayed(isRelayed: any): MoneroTx;
    isConfirmed(): any;
    setIsConfirmed(isConfirmed: any): MoneroTx;
    inTxPool(): any;
    setInTxPool(inTxPool: any): MoneroTx;
    getNumConfirmations(): any;
    setNumConfirmations(numConfirmations: any): MoneroTx;
    getUnlockHeight(): any;
    setUnlockHeight(unlockHeight: any): MoneroTx;
    getLastRelayedTimestamp(): any;
    setLastRelayedTimestamp(lastRelayedTimestamp: any): MoneroTx;
    getReceivedTimestamp(): any;
    setReceivedTimestamp(receivedTimestamp: any): MoneroTx;
    isDoubleSpendSeen(): any;
    setIsDoubleSpend(isDoubleSpendSeen: any): MoneroTx;
    getKey(): any;
    setKey(key: any): MoneroTx;
    /**
     * Get full transaction hex.  Full hex = pruned hex + prunable hex.
     *
     * @return {string} is full transaction hex
     */
    getFullHex(): string;
    setFullHex(fullHex: any): MoneroTx;
    /**
     * Get pruned transaction hex.  Full hex = pruned hex + prunable hex.
     *
     * @return {string} is pruned transaction hex
     */
    getPrunedHex(): string;
    setPrunedHex(prunedHex: any): MoneroTx;
    /**
     * Get prunable transaction hex which is hex that is removed from a pruned
     * transaction. Full hex = pruned hex + prunable hex.
     *
     * @return {string} is the prunable transaction hex
     */
    getPrunableHex(): string;
    setPrunableHex(prunableHex: any): MoneroTx;
    getPrunableHash(): any;
    setPrunableHash(prunableHash: any): MoneroTx;
    getSize(): any;
    setSize(size: any): MoneroTx;
    getWeight(): any;
    setWeight(weight: any): MoneroTx;
    getInputs(): any;
    setInputs(inputs: any): MoneroTx;
    getOutputs(): any;
    setOutputs(outputs: any): MoneroTx;
    getOutputIndices(): any;
    setOutputIndices(outputIndices: any): MoneroTx;
    getMetadata(): any;
    setMetadata(metadata: any): MoneroTx;
    getExtra(): any;
    setExtra(extra: any): MoneroTx;
    getRctSignatures(): any;
    setRctSignatures(rctSignatures: any): MoneroTx;
    getRctSigPrunable(): any;
    setRctSigPrunable(rctSigPrunable: any): MoneroTx;
    isKeptByBlock(): any;
    setIsKeptByBlock(isKeptByBlock: any): MoneroTx;
    isFailed(): any;
    setIsFailed(isFailed: any): MoneroTx;
    getLastFailedHeight(): any;
    setLastFailedHeight(lastFailedHeight: any): MoneroTx;
    getLastFailedHash(): any;
    setLastFailedHash(lastFailedHash: any): MoneroTx;
    getMaxUsedBlockHeight(): any;
    setMaxUsedBlockHeight(maxUsedBlockHeight: any): MoneroTx;
    getMaxUsedBlockHash(): any;
    setMaxUsedBlockHash(maxUsedBlockHash: any): MoneroTx;
    getSignatures(): any;
    setSignatures(signatures: any): MoneroTx;
    copy(): MoneroTx;
    toJson(): any;
    /**
     * Updates this transaction by merging the latest information from the given
     * transaction.
     *
     * @param tx is the transaction to update this transaction with
     * @return {MoneroTx} this for method chaining
     */
    merge(tx: any): MoneroTx;
    toString(indent?: number): string;
}
declare namespace MoneroTx {
    const DEFAULT_PAYMENT_ID: string;
}
