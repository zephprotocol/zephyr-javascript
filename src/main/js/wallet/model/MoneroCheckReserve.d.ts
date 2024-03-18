export = MoneroCheckReserve;
/**
 * Results from checking a reserve proof.
 *
 * @extends {MoneroCheck}
 */
declare class MoneroCheckReserve extends MoneroCheck {
    toJson(): any;
    getTotalAmount(): any;
    setTotalAmount(totalAmount: any): MoneroCheckReserve;
    getUnconfirmedSpentAmount(): any;
    setUnconfirmedSpentAmount(unconfirmedSpentAmount: any): MoneroCheckReserve;
}
import MoneroCheck = require("./MoneroCheck");
