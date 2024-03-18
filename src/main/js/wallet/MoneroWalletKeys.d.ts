export = MoneroWalletKeys;
/**
 * Implements a MoneroWallet which only manages keys using WebAssembly.
 *
 * @implements {MoneroWallet}
 * @hideconstructor
 */
declare class MoneroWalletKeys extends MoneroWallet implements MoneroWallet {
    /**
     * <p>Create a wallet using WebAssembly bindings to monero-core.</p>
     *
     * <p>Example:</p>
     *
     * <code>
     * let wallet = await MoneroWalletKeys.createWallet({<br>
     * &nbsp;&nbsp; password: "abc123",<br>
     * &nbsp;&nbsp; networkType: MoneroNetworkType.STAGENET,<br>
     * &nbsp;&nbsp; mnemonic: "coexist igloo pamphlet lagoon..."<br>
     * });
     * </code>
     *
     * @param {MoneroWalletConfig|object} config - MoneroWalletConfig or equivalent config object
     * @param {string|number} config.networkType - network type of the wallet to create (one of "mainnet", "testnet", "stagenet" or MoneroNetworkType.MAINNET|TESTNET|STAGENET)
     * @param {string} config.mnemonic - mnemonic of the wallet to create (optional, random wallet created if neither mnemonic nor keys given)
     * @param {string} config.seedOffset - the offset used to derive a new seed from the given mnemonic to recover a secret wallet from the mnemonic phrase
     * @param {string} config.primaryAddress - primary address of the wallet to create (only provide if restoring from keys)
     * @param {string} config.privateViewKey - private view key of the wallet to create (optional)
     * @param {string} config.privateSpendKey - private spend key of the wallet to create (optional)
     * @param {string} config.language - language of the wallet's mnemonic phrase (defaults to "English" or auto-detected)
     * @return {MoneroWalletKeys} the created wallet
     */
    static createWallet(config: MoneroWalletConfig | object): MoneroWalletKeys;
    static _createWalletRandom(networkType: any, language: any): Promise<any>;
    static _createWalletFromMnemonic(networkType: any, mnemonic: any, seedOffset: any): Promise<any>;
    static _createWalletFromKeys(networkType: any, address: any, privateViewKey: any, privateSpendKey: any, language: any): Promise<any>;
    static getMnemonicLanguages(): Promise<any>;
    /**
     * Internal constructor which is given the memory address of a C++ wallet
     * instance.
     *
     * This method should not be called externally but should be called through
     * static wallet creation utilities in this class.
     *
     * @param {int} cppAddress - address of the wallet instance in C++
     */
    constructor(cppAddress: any);
    _cppAddress: any;
    _module: any;
    _assertNotClosed(): void;
}
import MoneroWallet = require("./MoneroWallet");
import MoneroWalletConfig = require("./model/MoneroWalletConfig");
