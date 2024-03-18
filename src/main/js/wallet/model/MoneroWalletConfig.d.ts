export = MoneroWalletConfig;
/**
 * Configuration to create a Monero wallet.
 */
declare class MoneroWalletConfig {
    /**
     * Construct a configuration to open or create a wallet.
     *
     * @param {object|MoneroWalletConfig} config - MoneroWalletConfig or equivalent config object
     * @param {string} config.path - path of the wallet to open or create
     * @param {string} config.password - password of the wallet to open
     * @param {string|number} config.networkType - network type of the wallet to open (one of "mainnet", "testnet", "stagenet" or MoneroNetworkType.MAINNET|TESTNET|STAGENET)
     * @param {string} config.serverUri - uri of the wallet's server (optional)
     * @param {string} config.serverUsername - username of the wallet's server (optional)
     * @param {string} config.serverPassword - password of the wallet's server (optional)
     * @param {boolean} config.rejectUnauthorized - reject self-signed server certificates if true (defaults to true)
     * @param {MoneroRpcConnection|object} config.server - MoneroRpcConnection or equivalent JS object configuring the server connection (optional)
     * @param {Uint8Array} config.keysData - wallet keys data to open (optional)
     * @param {Uint8Array} config.cacheData - wallet cache data to open (optional)
     * @param {boolean} config.proxyToWorker - proxies wallet operations to a web worker in order to not block the browser's main thread (default: false)
     * @param {fs} config.fs - Node.js compatible file system to use (defaults to disk or in-memory FS if browser)
     * @param {boolean} config.saveCurrent - specifies if the current RPC wallet should be saved before being closed
     */
    constructor(config: object | MoneroWalletConfig);
    config: any;
    toJson(): any;
    getPath(): any;
    setPath(path: any): MoneroWalletConfig;
    getPassword(): any;
    setPassword(password: any): MoneroWalletConfig;
    getNetworkType(): any;
    setNetworkType(networkTypeOrStr: any): MoneroWalletConfig;
    getServer(): MoneroRpcConnection;
    setServer(server: any): MoneroWalletConfig;
    getServerUri(): any;
    setServerUri(serverUri: any): MoneroWalletConfig;
    getServerUsername(): any;
    setServerUsername(serverUsername: any): MoneroWalletConfig;
    getServerPassword(): any;
    setServerPassword(serverPassword: any): MoneroWalletConfig;
    getRejectUnauthorized(): any;
    setRejectUnauthorized(rejectUnauthorized: any): MoneroWalletConfig;
    getMnemonic(): any;
    setMnemonic(mnemonic: any): MoneroWalletConfig;
    getSeedOffset(): any;
    setSeedOffset(seedOffset: any): MoneroWalletConfig;
    getPrimaryAddress(): any;
    setPrimaryAddress(primaryAddress: any): MoneroWalletConfig;
    getPrivateViewKey(): any;
    setPrivateViewKey(privateViewKey: any): MoneroWalletConfig;
    getPrivateSpendKey(): any;
    setPrivateSpendKey(privateSpendKey: any): MoneroWalletConfig;
    getRestoreHeight(): any;
    setRestoreHeight(restoreHeight: any): MoneroWalletConfig;
    getLanguage(): any;
    setLanguage(language: any): MoneroWalletConfig;
    getSaveCurrent(): any;
    setSaveCurrent(saveCurrent: any): MoneroWalletConfig;
    getProxyToWorker(): any;
    setProxyToWorker(proxyToWorker: any): MoneroWalletConfig;
    getFs(): any;
    setFs(fs: any): MoneroWalletConfig;
    getKeysData(): any;
    setKeysData(keysData: any): MoneroWalletConfig;
    getCacheData(): any;
    setCacheData(cacheData: any): MoneroWalletConfig;
}
declare namespace MoneroWalletConfig {
    const SUPPORTED_FIELDS: string[];
}
import MoneroRpcConnection = require("../../common/MoneroRpcConnection");
