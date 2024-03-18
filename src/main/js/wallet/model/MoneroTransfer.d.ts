export = MoneroTransfer;
/**
 * Models a base transfer of funds to or from the wallet.
 *
 * @class
 */
declare class MoneroTransfer {
    /**
     * Construct the model.
     *
     * @param {MoneroTransfer|object} state is existing state to initialize from (optional)
     */
    constructor(state: MoneroTransfer | object);
    state: any;
    copy(): MoneroTransfer;
    toJson(): any;
    getTx(): any;
    setTx(tx: any): MoneroTransfer;
    isOutgoing(): boolean;
    isIncoming(): void;
    getAccountIndex(): any;
    setAccountIndex(accountIndex: any): MoneroTransfer;
    getAmount(): any;
    setAmount(amount: any): MoneroTransfer;
    setCurrency(currency: any): MoneroTransfer;
    getCurrency(): any;
    /**
     * Updates this transaction by merging the latest information from the given
     * transaction.
     *
     * Merging can modify or build references to the transfer given so it
     * should not be re-used or it should be copied before calling this method.
     *
     * @param transfer is the transfer to merge into this one
     * @return {MoneroTransfer} the merged transfer
     */
    merge(transfer: any): MoneroTransfer;
    toString(indent?: number): string;
    _validate(): void;
}
