export = MoneroTxWallet;
/**
 * Models a Monero transaction with wallet extensions.
 *
 * @class
 * @extends {MoneroTx}
 */
declare class MoneroTxWallet extends MoneroTx {
  static _mergeIncomingTransfer(transfers: any, transfer: any): void;
  getTxSet(): any;
  setTxSet(txSet: any): MoneroTxWallet;
  isIncoming(): any;
  setIsIncoming(isIncoming: any): MoneroTxWallet;
  isOutgoing(): any;
  setIsOutgoing(isOutgoing: any): MoneroTxWallet;
  getIncomingAmount(): BigInteger;
  getOutgoingAmount(): any;
  getTransfers(transferQuery: any): any[];
  filterTransfers(transferQuery: any): any[];
  getIncomingTransfers(): any;
  setIncomingTransfers(incomingTransfers: any): MoneroTxWallet;
  getOutgoingTransfer(): any;
  setOutgoingTransfer(outgoingTransfer: any): MoneroTxWallet;
  filterOutputs(outputQuery: any): any[];
  getNote(): any;
  setNote(note: any): MoneroTxWallet;
  isLocked(): any;
  setIsLocked(isLocked: any): MoneroTxWallet;
  getInputSum(): any;
  setInputSum(inputSum: any): MoneroTxWallet;
  getOutputSum(): any;
  setOutputSum(outputSum: any): MoneroTxWallet;
  getChangeAddress(): any;
  setChangeAddress(changeAddress: any): MoneroTxWallet;
  getChangeAmount(): any;
  setChangeAmount(changeAmount: any): MoneroTxWallet;
  getNumDummyOutputs(): any;
  setNumDummyOutputs(numDummyOutputs: any): MoneroTxWallet;
  getExtraHex(): any;
  setExtraHex(extraHex: any): MoneroTxWallet;
  toString(indent?: number, oneLine?: boolean): string;
  toCsvObj(fields?: string[]): any;
  toCsv(fields?: string[]): string[];
}
import MoneroTx = require("../../daemon/model/MoneroTx");
import BigInteger = require("../../common/biginteger");
