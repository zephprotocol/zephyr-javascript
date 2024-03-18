export = MoneroOutgoingTransfer;
/**
 * Models an outgoing transfer of funds from the wallet.
 *
 * @extends {MoneroTransfer}
 */
declare class MoneroOutgoingTransfer extends MoneroTransfer {
    getSubaddressIndices(): any;
    setSubaddressIndices(subaddressIndices: any): MoneroOutgoingTransfer;
    getAddresses(): any;
    setAddresses(addresses: any): MoneroOutgoingTransfer;
    getDestinations(): any;
    setDestinations(destinations: any): MoneroOutgoingTransfer;
}
import MoneroTransfer = require("./MoneroTransfer");
