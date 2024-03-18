export = MoneroAddressBookEntry;
/**
 * Monero address book entry model
 */
declare class MoneroAddressBookEntry {
    constructor(state: any);
    state: any;
    toJson(): any;
    getIndex(): any;
    setIndex(index: any): MoneroAddressBookEntry;
    getAddress(): any;
    setAddress(address: any): MoneroAddressBookEntry;
    getDescription(): any;
    setDescription(description: any): MoneroAddressBookEntry;
    getPaymentId(): any;
    setPaymentId(paymentId: any): MoneroAddressBookEntry;
}
