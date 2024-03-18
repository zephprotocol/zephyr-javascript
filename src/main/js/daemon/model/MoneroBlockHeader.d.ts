export = MoneroBlockHeader;
/**
 * Models a Monero block header which contains information about the block.
 *
 * @class
 */
declare class MoneroBlockHeader {
    /**
     * Construct the model.
     *
     * @param {MoneroBlockHeader|object} state is existing state to initialize from (optional)
     */
    constructor(state: MoneroBlockHeader | object);
    state: any;
    copy(): MoneroBlockHeader;
    toJson(): any;
    getHash(): any;
    setHash(hash: any): MoneroBlockHeader;
    /**
     * Return the block's height which is the total number of blocks that have occurred before.
     *
     * @return {number} the block's height
     */
    getHeight(): number;
    /**
     * Set the block's height which is the total number of blocks that have occurred before.
     *
     * @param {number} height is the block's height to set
     * @return {MoneroBlockHeader} a reference to this header for chaining
     */
    setHeight(height: number): MoneroBlockHeader;
    getTimestamp(): any;
    setTimestamp(timestamp: any): MoneroBlockHeader;
    getSize(): any;
    setSize(size: any): MoneroBlockHeader;
    getWeight(): any;
    setWeight(weight: any): MoneroBlockHeader;
    getLongTermWeight(): any;
    setLongTermWeight(longTermWeight: any): MoneroBlockHeader;
    getDepth(): any;
    setDepth(depth: any): MoneroBlockHeader;
    getDifficulty(): any;
    setDifficulty(difficulty: any): MoneroBlockHeader;
    getCumulativeDifficulty(): any;
    setCumulativeDifficulty(cumulativeDifficulty: any): MoneroBlockHeader;
    getMajorVersion(): any;
    setMajorVersion(majorVersion: any): MoneroBlockHeader;
    getMinorVersion(): any;
    setMinorVersion(minorVersion: any): MoneroBlockHeader;
    getNonce(): any;
    setNonce(nonce: any): MoneroBlockHeader;
    getMinerTxHash(): any;
    setMinerTxHash(minerTxHash: any): MoneroBlockHeader;
    getNumTxs(): any;
    setNumTxs(numTxs: any): MoneroBlockHeader;
    getOrphanStatus(): any;
    setOrphanStatus(orphanStatus: any): MoneroBlockHeader;
    getPrevHash(): any;
    setPrevHash(prevHash: any): MoneroBlockHeader;
    getReward(): any;
    setReward(reward: any): MoneroBlockHeader;
    getPowHash(): any;
    setPowHash(powHash: any): MoneroBlockHeader;
    getPricingRecord(): any;
    setPricingRecord(pricingRecord: any): MoneroBlockHeader;
    merge(header: any): MoneroBlockHeader;
    toString(indent?: number): string;
}
