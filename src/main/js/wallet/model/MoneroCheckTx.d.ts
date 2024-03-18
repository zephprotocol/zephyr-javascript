export = MoneroCheckTx;
/**
 * Results from checking a transaction key.
 *
 * @extends {MoneroCheck}
 */
declare class MoneroCheckTx extends MoneroCheck {
    toJson(): any;
    inTxPool(): any;
    setInTxPool(inTxPool: any): MoneroCheckTx;
    getNumConfirmations(): any;
    setNumConfirmations(numConfirmations: any): MoneroCheckTx;
    getReceivedAmount(): any;
    setReceivedAmount(receivedAmount: any): MoneroCheckTx;
}
import MoneroCheck = require("./MoneroCheck");
