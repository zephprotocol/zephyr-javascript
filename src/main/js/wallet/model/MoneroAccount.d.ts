export = MoneroAccount;
/**
 * Monero account model.
 */
declare class MoneroAccount {
    constructor(stateOrIndex: any, primaryAddress: any, balance: any, unlockedBalance: any, subaddresses: any);
    state: any;
    toJson(): any;
    getIndex(): any;
    setIndex(index: any): MoneroAccount;
    getPrimaryAddress(): any;
    setPrimaryAddress(primaryAddress: any): MoneroAccount;
    getBalance(): any;
    setBalance(balance: any): MoneroAccount;
    getUnlockedBalance(): any;
    setUnlockedBalance(unlockedBalance: any): MoneroAccount;
    getTag(): any;
    setTag(tag: any): MoneroAccount;
    getSubaddresses(): any;
    setSubaddresses(subaddresses: any): MoneroAccount;
    toString(indent?: number): string;
}
