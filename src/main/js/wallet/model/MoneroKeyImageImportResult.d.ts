export = MoneroKeyImageImportResult;
/**
 * Models results from importing key images.
 */
declare class MoneroKeyImageImportResult {
    constructor(state: any);
    state: any;
    toJson(): any;
    getHeight(): any;
    setHeight(height: any): MoneroKeyImageImportResult;
    getSpentAmount(): any;
    setSpentAmount(spentAmount: any): MoneroKeyImageImportResult;
    getUnspentAmount(): any;
    setUnspentAmount(unspentAmount: any): MoneroKeyImageImportResult;
}
