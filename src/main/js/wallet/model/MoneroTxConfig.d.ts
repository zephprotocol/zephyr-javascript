export = MoneroTxConfig;
/**
 * Configures a transaction to send, sweep, or create a payment URI.
 */
declare class MoneroTxConfig {
    /**
     * <p>Generic request to transfer funds from a wallet.</p>
     *
     * <p>Examples:</p>
     *
     * <code>
     * let config1 = new MoneroTxConfig({<br>
     * &nbsp;&nbsp; accountIndex: 0,<br>
     * &nbsp;&nbsp; address: "59aZULsUF3YN...",<br>
     * &nbsp;&nbsp; amount: new BigInteger("500000"),<br>
     * &nbsp;&nbsp; priority: MoneroTxPriority.NORMAL,<br>
     * &nbsp;&nbsp; relay: true<br>
     * });<br><br>
     * </code>
     *
     * @param {MoneroTxConfig|object} config - configures the transaction to create (optional)
     * @param {string} config.address - single destination address
     * @param {BigInteger} config.amount - single destination amount
     * @param {string} config.sourceCurrency - used source currency
     * @param {string} config.destinationCurrency - used destination currency
     * @param {int} config.accountIndex - source account index to transfer funds from
     * @param {int} config.subaddressIndex - source subaddress index to transfer funds from
     * @param {int[]} config.subaddressIndices - source subaddress indices to transfer funds from
     * @param {boolean} config.relay - relay the transaction to peers to commit to the blockchain
     * @param {MoneroTxPriority} config.priority - transaction priority (default MoneroTxPriority.NORMAL)
     * @param {MoneroDestination[]} config.destinations - addresses and amounts in a multi-destination tx
     * @param {string} config.paymentId - transaction payment ID
     * @param {int} config.unlockHeight - minimum height for the transaction to unlock (default 0)
     * @param {string} config.note - transaction note saved locally with the wallet
     * @param {string} config.recipientName - recipient name saved locally with the wallet
     * @param {boolean} config.canSplit - allow funds to be transferred using multiple transactions
     * @param {BigInteger} config.belowAmount - for sweep requests, include outputs below this amount when sweeping wallet, account, subaddress, or all unlocked funds
     * @param {boolean} config.sweepEachSubaddress - for sweep requests, sweep each subaddress individually instead of together if true
     * @param {string} config.keyImage - key image to sweep (ignored except in sweepOutput() requests)
     */
    constructor(config: MoneroTxConfig | object, ...args: any[]);
    state: any;
    copy(): MoneroTxConfig;
    toJson(): any;
    /**
     * Set the address of a single-destination configuration.
     *
     * @param {string} address - the address to set for the single destination
     * @return {MoneroTxConfig} this configuration for chaining
     */
    setAddress(address: string): MoneroTxConfig;
    /**
     * Get the address of a single-destination configuration.
     *
     * @return {string} the address of the single destination
     */
    getAddress(): string;
    /**
     * Set the amount of a single-destination configuration.
     *
     * @param {BigInteger} amount - the amount to set for the single destination
     * @return {MoneroTxConfig} this configuration for chaining
     */
    setAmount(amount: BigInteger): MoneroTxConfig;
    /**
     * Get the amount of a single-destination configuration.
     *
     * @return {BigInteger} the amount of the single destination
     */
    getAmount(): BigInteger;
    addDestination(destination: any): MoneroTxConfig;
    getDestinations(): any;
    setDestinations(destinations: any, ...args: any[]): MoneroTxConfig;
    setDestination(destination: any): MoneroTxConfig;
    getPaymentId(): any;
    setPaymentId(paymentId: any): MoneroTxConfig;
    getPriority(): any;
    setPriority(priority: any): MoneroTxConfig;
    getCurrency(): any;
    setCurrency(currency: any): MoneroTxConfig;
    getTxType(): any;
    setTxType(txType: any): MoneroTxConfig;
    getFee(): any;
    setFee(fee: any): MoneroTxConfig;
    getAccountIndex(): any;
    setAccountIndex(accountIndex: any): MoneroTxConfig;
    setSubaddressIndex(subaddressIndex: any): MoneroTxConfig;
    getSubaddressIndices(): any;
    setSubaddressIndices(subaddressIndices: any, ...args: any[]): MoneroTxConfig;
    getUnlockHeight(): any;
    setUnlockHeight(unlockHeight: any): MoneroTxConfig;
    getRelay(): any;
    setRelay(relay: any): MoneroTxConfig;
    getCanSplit(): any;
    setCanSplit(canSplit: any): MoneroTxConfig;
    getNote(): any;
    setNote(note: any): MoneroTxConfig;
    getRecipientName(): any;
    setRecipientName(recipientName: any): MoneroTxConfig;
    getBelowAmount(): any;
    setBelowAmount(belowAmount: any): MoneroTxConfig;
    getSweepEachSubaddress(): any;
    setSweepEachSubaddress(sweepEachSubaddress: any): MoneroTxConfig;
    /**
     * Get the key image hex of the output to sweep.
     *
     * return {string} is the key image hex of the output to sweep
     */
    getKeyImage(): any;
    /**
     * Set the key image hex of the output to sweep.
     *
     * @param {string} keyImage is the key image hex of the output to sweep
     */
    setKeyImage(keyImage: string): MoneroTxConfig;
}
