export = MoneroWalletFull;
/**
 * Implements a MoneroWallet using WebAssembly bindings to monero-project's wallet2.
 *
 * @extends {MoneroWalletKeys}
 * @implements {MoneroWallet}
 * @hideconstructor
 */
declare class MoneroWalletFull extends MoneroWalletKeys implements MoneroWallet {
  /**
   * Check if a wallet exists at a given path.
   *
   * @param {string} path - path of the wallet on the file system
   * @param {fs} - Node.js compatible file system to use (optional, defaults to disk if nodejs)
   * @return {boolean} true if a wallet exists at the given path, false otherwise
   */
  static walletExists(path: string, fs: any): boolean;
  /**
   * <p>Open an existing wallet using WebAssembly bindings to wallet2.h.</p>
   *
   * <p>Examples:<p>
   *
   * <code>
   * let wallet1 = await MoneroWalletWasm.openWallet(<br>
   * &nbsp;&nbsp; "./wallets/wallet1",<br>
   * &nbsp;&nbsp; "supersecretpassword",<br>
   * &nbsp;&nbsp; MoneroNetworkType.STAGENET,<br>
   * &nbsp;&nbsp; "http://localhost:38081" // daemon uri<br>
   * );<br><br>
   *
   * let wallet2 = await MoneroWalletWasm.openWallet({<br>
   * &nbsp;&nbsp; path: "./wallets/wallet2",<br>
   * &nbsp;&nbsp; password: "supersecretpassword",<br>
   * &nbsp;&nbsp; networkType: MoneroNetworkType.STAGENET,<br>
   * &nbsp;&nbsp; serverUri: "http://localhost:38081", // daemon configuration<br>
   * &nbsp;&nbsp; serverUsername: "superuser",<br>
   * &nbsp;&nbsp; serverPassword: "abctesting123"<br>
   * });
   * </code>
   *
   * @param {MoneroWalletConfig|object|string} configOrPath - MoneroWalletConfig or equivalent config object or a path to a wallet to open
   * @param {string} configOrPath.path - path of the wallet to open (optional if 'keysData' provided)
   * @param {string} configOrPath.password - password of the wallet to open
   * @param {string|number} configOrPath.networkType - network type of the wallet to open (one of "mainnet", "testnet", "stagenet" or MoneroNetworkType.MAINNET|TESTNET|STAGENET)
   * @param {Uint8Array} configOrPath.keysData - wallet keys data to open (optional if path provided)
   * @param {Uint8Array} configOrPath.cacheData - wallet cache data to open (optional)
   * @param {string} configOrPath.serverUri - uri of the wallet's daemon (optional)
   * @param {string} configOrPath.serverUsername - username to authenticate with the daemon (optional)
   * @param {string} configOrPath.serverPassword - password to authenticate with the daemon (optional)
   * @param {boolean} configOrPath.rejectUnauthorized - reject self-signed server certificates if true (defaults to true)
   * @param {MoneroRpcConnection|object} configOrPath.server - MoneroRpcConnection or equivalent JS object configuring the daemon connection (optional)
   * @param {boolean} configOrPath.proxyToWorker - proxies wallet operations to a web worker in order to not block the browser's main thread (default true if browser, false otherwise)
   * @param {fs} configOrPath.fs - Node.js compatible file system to use (defaults to disk or in-memory FS if browser)
   * @param {string} password - password of the wallet to open
   * @param {string|number} networkType - network type of the wallet to open
   * @param {string|MoneroRpcConnection} daemonUriOrConnection - daemon URI or MoneroRpcConnection
   * @param {boolean} proxyToWorker - proxies wallet operations to a web worker in order to not block the browser's main thread (default true if browser, false otherwise)
   * @param {fs} fs - Node.js compatible file system to use (defaults to disk or in-memory FS if browser)
   * @return {MoneroWalletFull} the opened wallet
   */
  static openWallet(
    configOrPath: MoneroWalletConfig | object | string,
    password: string,
    networkType: string | number,
    daemonUriOrConnection: string | MoneroRpcConnection,
    proxyToWorker: boolean,
    fs: any,
  ): MoneroWalletFull;
  /**
   * <p>Create a wallet using WebAssembly bindings to wallet2.h.<p>
   *
   * <p>Example:</p>
   *
   * <code>
   * let wallet = await MoneroWalletWasm.createWallet({<br>
   * &nbsp;&nbsp; path: "./test_wallets/wallet1", // leave blank for in-memory wallet<br>
   * &nbsp;&nbsp; password: "supersecretpassword",<br>
   * &nbsp;&nbsp; networkType: MoneroNetworkType.STAGENET,<br>
   * &nbsp;&nbsp; mnemonic: "coexist igloo pamphlet lagoon...",<br>
   * &nbsp;&nbsp; restoreHeight: 1543218,<br>
   * &nbsp;&nbsp; server: new MoneroRpcConnection("http://localhost:38081", "daemon_user", "daemon_password_123"),<br>
   * });
   * </code>
   *
   * @param {object|MoneroWalletConfig} config - MoneroWalletConfig or equivalent config object
   * @param {string} config.path - path of the wallet to create (optional, in-memory wallet if not given)
   * @param {string} config.password - password of the wallet to create
   * @param {string|number} config.networkType - network type of the wallet to create (one of "mainnet", "testnet", "stagenet" or MoneroNetworkType.MAINNET|TESTNET|STAGENET)
   * @param {string} config.mnemonic - mnemonic of the wallet to create (optional, random wallet created if neither mnemonic nor keys given)
   * @param {string} config.seedOffset - the offset used to derive a new seed from the given mnemonic to recover a secret wallet from the mnemonic phrase
   * @param {string} config.primaryAddress - primary address of the wallet to create (only provide if restoring from keys)
   * @param {string} config.privateViewKey - private view key of the wallet to create (optional)
   * @param {string} config.privateSpendKey - private spend key of the wallet to create (optional)
   * @param {number} config.restoreHeight - block height to start scanning from (defaults to 0 unless generating random wallet)
   * @param {string} config.language - language of the wallet's mnemonic phrase (defaults to "English" or auto-detected)
   * @param {string} config.serverUri - uri of the wallet's daemon (optional)
   * @param {string} config.serverUsername - username to authenticate with the daemon (optional)
   * @param {string} config.serverPassword - password to authenticate with the daemon (optional)
   * @param {boolean} config.rejectUnauthorized - reject self-signed server certificates if true (defaults to true)
   * @param {MoneroRpcConnection|object} config.server - MoneroRpcConnection or equivalent JS object providing daemon configuration (optional)
   * @param {boolean} config.proxyToWorker - proxies wallet operations to a web worker in order to not block the browser's main thread (default true if browser, false otherwise)
   * @param {fs} config.fs - Node.js compatible file system to use (defaults to disk or in-memory FS if browser)
   * @return {MoneroWalletFull} the created wallet
   */
  static createWallet(config: object | MoneroWalletConfig): MoneroWalletFull;
  static _createWalletRandom(
    path: any,
    password: any,
    networkType: any,
    daemonUriOrConnection: any,
    language: any,
    proxyToWorker: any,
    fs: any,
  ): Promise<any>;
  static _createWalletFromMnemonic(
    path: any,
    password: any,
    networkType: any,
    mnemonic: any,
    daemonUriOrConnection: any,
    restoreHeight: any,
    seedOffset: any,
    proxyToWorker: any,
    fs: any,
  ): Promise<any>;
  static _createWalletFromKeys(
    path: any,
    password: any,
    networkType: any,
    address: any,
    viewKey: any,
    spendKey: any,
    daemonUriOrConnection: any,
    restoreHeight: any,
    language: any,
    proxyToWorker: any,
    fs: any,
  ): Promise<any>;
  static _getFs(): any;
  static _openWalletData(
    path: any,
    password: any,
    networkType: any,
    keysData: any,
    cacheData: any,
    daemonUriOrConnection: any,
    proxyToWorker: any,
    fs: any,
  ): Promise<any>;
  static _sanitizeBlock(block: any): any;
  static _sanitizeTxWallet(tx: any): any;
  static _sanitizeAccount(account: any): any;
  static _sanitizeSubaddress(subaddress: any): any;
  static _deserializeBlocks(blocksJsonStr: any): {
    blocks: any[];
    missingTxHashes: any[];
  };
  static _deserializeTxs(query: any, blocksJsonStr: any, missingTxHashes: any): any[];
  static _deserializeTransfers(query: any, blocksJsonStr: any): any[];
  static _deserializeOutputs(query: any, blocksJsonStr: any): any[];
  /**
   * Internal constructor which is given the memory address of a C++ wallet
   * instance.
   *
   * This method should not be called externally but should be called through
   * static wallet creation utilities in this class.
   *
   * @param {int} cppAddress - address of the wallet instance in C++
   * @param {string} path - path of the wallet instance
   * @param {string} password - password of the wallet instance
   * @param {FileSystem} fs - node.js-compatible file system to read/write wallet files
   * @param {boolean} rejectUnauthorized - specifies if unauthorized requests (e.g. self-signed certificates) should be rejected
   * @param {string} rejectUnauthorizedFnId - unique identifier for http_client_wasm to query rejectUnauthorized
   */
  constructor(
    cppAddress: int,
    path: string,
    password: string,
    fs: FileSystem,
    rejectUnauthorized: boolean,
    rejectUnauthorizedFnId: string,
  );
  _path: string;
  _password: string;
  _listeners: any[];
  _fs: any;
  _isClosed: boolean;
  _wasmListener: WalletWasmListener;
  _wasmListenerHandle: number;
  _rejectUnauthorized: boolean;
  _rejectUnauthorizedConfigId: string;
  /**
   * Get the maximum height of the peers the wallet's daemon is connected to.
   *
   * @return {number} the maximum height of the peers the wallet's daemon is connected to
   */
  getDaemonMaxPeerHeight(): number;
  /**
   * Indicates if the wallet's daemon is synced with the network.
   *
   * @return {boolean} true if the daemon is synced with the network, false otherwise
   */
  isDaemonSynced(): boolean;
  /**
   * Indicates if the wallet is synced with the daemon.
   *
   * @return {boolean} true if the wallet is synced with the daemon, false otherwise
   */
  isSynced(): boolean;
  /**
   * Get the wallet's network type (mainnet, testnet, or stagenet).
   *
   * @return {MoneroNetworkType} the wallet's network type
   */
  getNetworkType(): MoneroNetworkType;
  /**
   * Get the height of the first block that the wallet scans.
   *
   * @return {number} the height of the first block that the wallet scans
   */
  getRestoreHeight(): number;
  /**
   * Set the height of the first block that the wallet scans.
   *
   * @param {number} syncHeight - height of the first block that the wallet scans
   */
  setRestoreHeight(syncHeight: number): Promise<any>;
  /**
   * Register a listener to receive wallet notifications.
   *
   * @param {MoneroWalletListener} listener - listener to receive wallet notifications
   */
  addListener(listener: MoneroWalletListener): Promise<void>;
  /**
   * Unregister a listener to receive wallet notifications.
   *
   * @param {MoneroWalletListener} listener - listener to unregister
   */
  removeListener(listener: MoneroWalletListener): Promise<void>;
  /**
   * Get the listeners registered with the wallet.
   *
   * @return {MoneroWalletListener[]} the registered listeners
   */
  getListeners(): MoneroWalletListener[];
  /**
   * Move the wallet from its current path to the given path.
   *
   * @param {string} path is the new wallet's path
   * @param {string} password is the new wallet's password
   */
  moveTo(path: string, password: string): Promise<void>;
  setDaemonConnection(uriOrConnection: string | any, username: string, password: string): Promise<any>;
  getDaemonConnection(): Promise<any>;
  isConnectedToDaemon(): Promise<any>;
  getVersion(): Promise<void>;
  getPath(): Promise<string>;
  getIntegratedAddress(paymentId: any): Promise<any>;
  decodeIntegratedAddress(integratedAddress: any): Promise<any>;
  getHeight(): Promise<any>;
  getDaemonHeight(): Promise<any>;
  getHeightByDate(year: any, month: any, day: any): Promise<any>;
  sync(listenerOrStartHeight: any, startHeight: any): Promise<any>;
  _syncingEnabled: boolean;
  rescanSpent(): Promise<any>;
  rescanBlockchain(): Promise<any>;
  getReserveInfo(): Promise<any>;
  getBlockCap(): Promise<any>;
  getMaxDestinationAmount(sourceAssetType: any, destinationAssetType: any): Promise<any>;
  getCollateralRequirements(sourceAssetType: any, destinationAssetType: any, amount: any): Promise<any>;
  getBalance(accountIdx: any, subaddressIdx: any, assetType: any): Promise<any>;
  getUnlockedBalance(accountIdx: any, subaddressIdx: any, assetType: any): Promise<any>;
  getAccounts(includeSubaddresses: any, tag: any): Promise<any>;
  getAccount(accountIdx: any, includeSubaddresses: any): Promise<any>;
  createAccount(label: any): Promise<any>;
  getSubaddresses(accountIdx: any, subaddressIndices: any): Promise<any>;
  createSubaddress(accountIdx: any, label: any): Promise<any>;
  getTxs(query: any, missingTxHashes: any): Promise<any>;
  getTransfers(query: any): Promise<any>;
  getOutputs(query: any): Promise<any>;
  getOutputsHex(): Promise<any>;
  importOutputsHex(outputsHex: any): Promise<any>;
  getKeyImages(): Promise<any>;
  importKeyImages(keyImages: any): Promise<any>;
  getNewKeyImagesFromLastImport(): Promise<void>;
  createTxs(config: any): Promise<any>;
  sweepOutput(config: any): Promise<any>;
  sweepUnlocked(config: any): Promise<any>;
  sweepDust(relay: any): Promise<any>;
  relayTxs(txsOrMetadatas: any): Promise<any>;
  parseTxSet(txSet: any): Promise<any>;
  signTxs(unsignedTxHex: any): Promise<any>;
  submitTxs(signedTxHex: any): Promise<any>;
  signMessage(message: any): Promise<any>;
  verifyMessage(message: any, address: any, signature: any): Promise<any>;
  getTxKey(txHash: any): Promise<any>;
  checkTxKey(txHash: any, txKey: any, address: any): Promise<any>;
  getTxProof(txHash: any, address: any, message: any): Promise<any>;
  checkTxProof(txHash: any, address: any, message: any, signature: any): Promise<any>;
  getSpendProof(txHash: any, message: any): Promise<any>;
  checkSpendProof(txHash: any, message: any, signature: any): Promise<any>;
  getReserveProofWallet(message: any): Promise<any>;
  getReserveProofAccount(accountIdx: any, amount: any, message: any): Promise<any>;
  checkReserveProof(address: any, message: any, signature: any): Promise<any>;
  getTxNotes(txHashes: any): Promise<any>;
  setTxNotes(txHashes: any, notes: any): Promise<any>;
  getAddressBookEntries(entryIndices: any): Promise<any>;
  addAddressBookEntry(address: any, description: any): Promise<any>;
  editAddressBookEntry(index: any, setAddress: any, address: any, setDescription: any, description: any): Promise<any>;
  deleteAddressBookEntry(entryIdx: any): Promise<any>;
  tagAccounts(tag: any, accountIndices: any): Promise<any>;
  untagAccounts(accountIndices: any): Promise<any>;
  getAccountTags(): Promise<any>;
  setAccountTagLabel(tag: any, label: any): Promise<any>;
  createPaymentUri(config: any): Promise<any>;
  parsePaymentUri(uri: any): Promise<any>;
  getAttribute(key: any): Promise<any>;
  setAttribute(key: any, val: any): Promise<any>;
  startMining(numThreads: any, backgroundMining: any, ignoreBattery: any): Promise<void>;
  isMultisigImportNeeded(): Promise<any>;
  isMultisig(): Promise<any>;
  getMultisigInfo(): Promise<any>;
  prepareMultisig(): Promise<any>;
  makeMultisig(multisigHexes: any, threshold: any, password: any): Promise<any>;
  exchangeMultisigKeys(multisigHexes: any, password: any): Promise<any>;
  getMultisigHex(): Promise<any>;
  importMultisigHex(multisigHexes: any): Promise<any>;
  signMultisigTxHex(multisigTxHex: any): Promise<any>;
  submitMultisigTxHex(signedMultisigTxHex: any): Promise<any>;
  /**
   * Get the wallet's keys and cache data.
   *
   * @return {DataView[]} is the keys and cache data respectively
   */
  getData(): DataView[];
  save(): Promise<void>;
  close(save: any): Promise<void>;
  getTx(...args: any[]): Promise<any>;
  getIncomingTransfers(...args: any[]): Promise<any[]>;
  getOutgoingTransfers(...args: any[]): Promise<any[]>;
  createTx(...args: any[]): Promise<any>;
  relayTx(...args: any[]): Promise<string>;
  getTxNote(...args: any[]): Promise<string>;
  setTxNote(...args: any[]): Promise<void>;
  /**
   * Loop while syncing enabled.
   */
  _runSyncLoop(): Promise<void>;
  _syncLoopRunning: boolean;
  /**
   * Enables or disables listening in the c++ wallet.
   */
  _setIsListening(isEnabled: any): Promise<any>;
  /**
   * Set the path of the wallet on the browser main thread if run as a web worker.
   *
   * @param {string} browserMainPath - path of the wallet on the browser main thread
   */
  _setBrowserMainPath(browserMainPath: string): void;
  _browserMainPath: string;
}
import MoneroWallet = require("./MoneroWallet");
import MoneroWalletKeys = require("./MoneroWalletKeys");
/**
 * Receives notifications directly from wasm c++.
 *
 * @private
 */
declare class WalletWasmListener {
  constructor(wallet: any);
  _wallet: any;
  onSyncProgress(height: any, startHeight: any, endHeight: any, percentDone: any, message: any): void;
  onNewBlock(height: any): void;
  onBalancesChanged(newBalanceStr: any, newUnlockedBalanceStr: any, assetType: any): void;
  onOutputReceived(
    height: any,
    txHash: any,
    amountStr: any,
    assetType: any,
    accountIdx: any,
    subaddressIdx: any,
    version: any,
    unlockHeight: any,
    isLocked: any,
  ): void;
  onOutputSpent(
    height: any,
    txHash: any,
    amountStr: any,
    assetType: any,
    accountIdx: any,
    subaddressIdx: any,
    version: any,
  ): void;
}
import MoneroNetworkType = require("../daemon/model/MoneroNetworkType");
import MoneroWalletListener = require("./model/MoneroWalletListener");
import MoneroWalletConfig = require("./model/MoneroWalletConfig");
import MoneroRpcConnection = require("../common/MoneroRpcConnection");
