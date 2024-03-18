export = MoneroIntegratedAddress;
/**
 * Monero integrated address model.
 */
declare class MoneroIntegratedAddress {
    constructor(state: any);
    state: any;
    toJson(): any;
    getStandardAddress(): any;
    setStandardAddress(standardAddress: any): MoneroIntegratedAddress;
    getPaymentId(): any;
    setPaymentId(paymentId: any): MoneroIntegratedAddress;
    getIntegratedAddress(): any;
    setIntegratedAddress(integratedAddress: any): MoneroIntegratedAddress;
    toString(): any;
}
