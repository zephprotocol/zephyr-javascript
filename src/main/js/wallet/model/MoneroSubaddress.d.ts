export = MoneroSubaddress;
/**
 * Monero subaddress model.
 */
declare class MoneroSubaddress {
    constructor(stateOrAddress: any);
    state: any;
    toJson(): any;
    getAccountIndex(): any;
    setAccountIndex(accountIndex: any): MoneroSubaddress;
    getIndex(): any;
    setIndex(index: any): MoneroSubaddress;
    getAddress(): any;
    setAddress(address: any): MoneroSubaddress;
    getLabel(): any;
    setLabel(label: any): MoneroSubaddress;
    getBalance(): any;
    setBalance(balance: any): MoneroSubaddress;
    getUnlockedBalance(): any;
    setUnlockedBalance(unlockedBalance: any): MoneroSubaddress;
    getNumUnspentOutputs(): any;
    setNumUnspentOutputs(numUnspentOutputs: any): MoneroSubaddress;
    isUsed(): any;
    setIsUsed(isUsed: any): MoneroSubaddress;
    getNumBlocksToUnlock(): any;
    setNumBlocksToUnlock(numBlocksToUnlock: any): MoneroSubaddress;
    toString(indent: any): string;
}
