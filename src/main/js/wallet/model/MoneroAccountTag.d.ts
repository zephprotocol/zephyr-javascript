export = MoneroAccountTag;
/**
 * Represents an account tag.
 */
declare class MoneroAccountTag {
    constructor(tag: any, label: any, accountIndices: any);
    tag: any;
    label: any;
    accountIndices: any;
    getTag(): any;
    setTag(tag: any): MoneroAccountTag;
    getLabel(): any;
    setLabel(label: any): MoneroAccountTag;
    getAccountIndices(): any;
    setAccountIndices(accountIndices: any): MoneroAccountTag;
    accoutIndices: any;
}
