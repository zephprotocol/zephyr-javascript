export = MoneroTxSet;
/**
 * Groups transactions who share common hex data which is needed in order to
 * sign and submit the transactions.
 *
 * For example, multisig transactions created from createTxs() share a common
 * hex string which is needed in order to sign and submit the multisig
 * transactions.
 */
declare class MoneroTxSet {
    constructor(state: any);
    state: any;
    toJson(): any;
    getTxs(): any;
    setTxs(txs: any): MoneroTxSet;
    getMultisigTxHex(): any;
    setMultisigTxHex(multisigTxHex: any): MoneroTxSet;
    getUnsignedTxHex(): any;
    setUnsignedTxHex(unsignedTxHex: any): MoneroTxSet;
    getSignedTxHex(): any;
    setSignedTxHex(signedTxHex: any): MoneroTxSet;
    merge(txSet: any): MoneroTxSet;
    toString(indent?: number): string;
}
