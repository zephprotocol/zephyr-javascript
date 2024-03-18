export = MoneroIncomingTransfer;
/**
 * Models an incoming transfer of funds to the wallet.
 *
 * @extends {MoneroTransfer}
 */
declare class MoneroIncomingTransfer extends MoneroTransfer {
    getSubaddressIndex(): any;
    setSubaddressIndex(subaddressIndex: any): MoneroIncomingTransfer;
    getAddress(): any;
    setAddress(address: any): MoneroIncomingTransfer;
    /**
     * Return how many confirmations till it's not economically worth re-writing the chain.
     * That is, the number of confirmations before the transaction is highly unlikely to be
     * double spent or overwritten and may be considered settled, e.g. for a merchant to trust
     * as finalized.
     *
     * @return {number} is the number of confirmations before it's not worth rewriting the chain
     */
    getNumSuggestedConfirmations(): number;
    setNumSuggestedConfirmations(numSuggestedConfirmations: any): MoneroIncomingTransfer;
}
import MoneroTransfer = require("./MoneroTransfer");
