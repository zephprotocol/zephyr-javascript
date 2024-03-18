export = MoneroWallet;
/**
 * Copyright (c) woodser
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Monero wallet interface and default implementations.
 *
 * @interface
 */
declare class MoneroWallet {
  static _normalizeTxQuery(query: any): any;
  static _normalizeTransferQuery(query: any): any;
  static _normalizeOutputQuery(query: any): any;
  static _normalizeCreateTxsConfig(config: any): any;
  static _normalizeSweepOutputConfig(config: any): any;
  static _normalizeSweepUnlockedConfig(config: any): any;
  /**
   * Indicates if the wallet is view-only, meaning it does have the private
   * spend key and can therefore only observe incoming outputs.
   *
   * @return {bool} true if the wallet is view-only, false otherwise
   */
  isViewOnly(): any;
  /**
   * Set the wallet's daemon connection.
   *
   * @param {string|MoneroRpcConnection} uriOrConnection - daemon's URI or connection (defaults to offline)
   * @param {string} username - username to authenticate with the daemon (optional)
   * @param {string} password - password to authenticate with the daemon (optional)
   */
  setDaemonConnection(uriOrConnection: string | any, username: string, password: string): Promise<void>;
  /**
   * Get the wallet's daemon connection.
   *
   * @return {MoneroRpcConnection} the wallet's daemon connection
   */
  getDaemonConnection(): any;
  /**
   * Indicates if the wallet is connected to daemon.
   *
   * @return {boolean} true if the wallet is connected to a daemon, false otherwise
   */
  isConnected(): boolean;
  /**
   * Gets the version of the wallet.
   *
   * @return {MoneroVersion} the version of the wallet
   */
  getVersion(): any;
  /**
   * Get the wallet's path.
   *
   * @return {string} the path the wallet can be opened with
   */
  getPath(): string;
  /**
   * Get the wallet's mnemonic phrase derived from the seed.
   *
   * @return {string} the wallet's mnemonic phrase
   */
  getMnemonic(): string;
  /**
   * Get the language of the wallet's mnemonic phrase.
   *
   * @return {string} the language of the wallet's mnemonic phrase
   */
  getMnemonicLanguage(): string;
  /**
   * Get the wallet's private view key.
   *
   * @return {string} the wallet's private view key
   */
  getPrivateViewKey(): string;
  /**
   * Get the wallet's private spend key.
   *
   * @return {string} the wallet's private spend key
   */
  getPrivateSpendKey(): string;
  /**
   * Get the wallet's public view key.
   *
   * @return {string} the wallet's public view key
   */
  getPublicViewKey(): string;
  /**
   * Get the wallet's public spend key.
   *
   * @return {string} the wallet's public spend key
   */
  getPublicSpendKey(): string;
  /**
   * Get the wallet's primary address.
   *
   * @return {string} the wallet's primary address
   */
  getPrimaryAddress(): string;
  /**
   * Get the address of a specific subaddress.
   *
   * @param {int} accountIdx - the account index of the address's subaddress
   * @param {int} subaddressIdx - the subaddress index within the account
   * @return {string} the receive address of the specified subaddress
   */
  getAddress(accountIdx: any, subaddressIdx: any): string;
  /**
   * Get the account and subaddress index of the given address.
   *
   * @param {string} address - address to get the account and subaddress index from
   * @return {MoneroSubaddress} the account and subaddress indices
   */
  getAddressIndex(address: string): any;
  /**
   * Get an integrated address based on this wallet's primary address and the
   * given payment ID.  Generates a random payment ID if none is given.
   *
   * @param {string} paymentId - payment ID to generate an integrated address from (randomly generated if undefined)
   * @return {MoneroIntegratedAddress} the integrated address
   */
  getIntegratedAddress(paymentId: string): any;
  /**
   * Decode an integrated address to get its standard address and payment id.
   *
   * @param {string} integratedAddress - integrated address to decode
   * @return {MoneroIntegratedAddress} the decoded integrated address including standard address and payment id
   */
  decodeIntegratedAddress(integratedAddress: string): any;
  /**
   * Get the height of the last block processed by the wallet (its index + 1).
   *
   * @return {int} the height of the last block processed by the wallet
   */
  getHeight(): any;
  /**
   * Get the blockchain's height.
   *
   * @return {int} the blockchain's height
   */
  getDaemonHeight(): any;
  /**
   * Get the blockchain's height by date as a conservative estimate for scanning.
   *
   * @param {int} year - year of the height to get
   * @param {int} month - month of the height to get as a number between 1 and 12
   * @param {int} day - day of the height to get as a number between 1 and 31
   * @return the blockchain's approximate height at the given date
   */
  getHeightByDate(year: any, month: any, day: any): Promise<void>;
  /**
   * Synchronize the wallet with the daemon as a one-time synchronous process.
   *
   * @param {MoneroWalletListener|number} listenerOrStartHeight - listener xor start height (defaults to no sync listener, the last synced block)
   * @param {number} startHeight - startHeight if not given in first arg (defaults to last synced block)
   */
  sync(listenerOrStartHeight: any | number, startHeight: number): Promise<void>;
  /**
   * Start an asynchronous thread to continuously synchronize the wallet with the daemon.
   */
  startSyncing(): Promise<void>;
  /**
   * Stop synchronizing the wallet with the daemon.
   */
  stopSyncing(): Promise<void>;
  /**
   * <p>Rescan the blockchain for spent outputs.</p>
   *
   * <p>Note: this can only be called with a trusted daemon.</p>
   *
   * <p>Example use case: peer multisig hex is import when connected to an untrusted daemon,
   * so the wallet will not rescan spent outputs.  Then the wallet connects to a trusted
   * daemon.  This method should be manually invoked to rescan outputs.</p>
   */
  rescanSpent(): Promise<void>;
  /**
   * <p>Rescan the blockchain from scratch, losing any information which cannot be recovered from
   * the blockchain itself.</p>
   *
   * <p>WARNING: This method discards local wallet data like destination addresses, tx secret keys,
   * tx notes, etc.</p>
   */
  rescanBlockchain(): Promise<void>;
  /**
   * Get the balance of the wallet, account, or subaddress.
   *
   * @param {int} accountIdx - index of the account to get the balance of (optional)
   * @param {int} subaddressIdx - index of the subaddress to get the balance of (optional)
   * @param {string} assetType - asset type to get the balance of (optional)
   * @return {ZephyrBalance} the balance of the wallet, account, or subaddress
   */
  getBalance(accountIdx: any, subaddressIdx: any, assetType: string): any;
  /**
   * Get the unlocked balance of the wallet, account, or subaddress.
   *
   * @param {int} accountIdx - index of the account to get the unlocked balance of (optional)
   * @param {int} subaddressIdx - index of the subaddress to get the unlocked balance of (optional)
   * @param {string} assetType - asset type to get the balance of (optional)
   * @return {ZephyrBalance} the unlocked balance of the wallet, account, or subaddress
   */
  getUnlockedBalance(accountIdx: any, subaddressIdx: any, assetType: string): any;
  /**
   * Get accounts with a given tag.
   *
   * @param {boolean} includeSubaddresses - include subaddresses if true
   * @param {string} tag - tag for filtering accounts, all accounts if undefined
   * @return {MoneroAccount[]} all accounts with the given tag
   */
  getAccounts(includeSubaddresses: boolean, tag: string): any[];
  /**
   * Get an account.
   *
   * @param {int} accountIdx - index of the account to get
   * @param {boolean} includeSubaddresses - include subaddresses if true
   * @return {MoneroAccount} the retrieved account
   */
  getAccount(accountIdx: any, includeSubaddresses: boolean): any;
  /**
   * Create a new account with a label for the first subaddress.
   *
   * @param {string} label - label for account's first subaddress (optional)
   * @return {MoneroAccount} the created account
   */
  createAccount(label: string): any;
  /**
   * Get subaddresses in an account.
   *
   * @param {int} accountIdx - account to get subaddresses within
   * @param {int[]} subaddressIndices - indices of subaddresses to get (optional)
   * @return {MoneroSubaddress[]} the retrieved subaddresses
   */
  getSubaddresses(accountIdx: any, subaddressIndices: any[]): any[];
  /**
   * Get a subaddress.
   *
   * @param {int} accountIdx - index of the subaddress's account
   * @param {int} subaddressIdx - index of the subaddress within the account
   * @return {MoneroSubaddress} the retrieved subaddress
   */
  getSubaddress(accountIdx: any, subaddressIdx: any): any;
  /**
   * Create a subaddress within an account.
   *
   * @param {int} accountIdx - index of the account to create the subaddress within
   * @param {string} label - the label for the subaddress (optional)
   * @return {MoneroSubaddress} the created subaddress
   */
  createSubaddress(accountIdx: any, label: string): any;
  /**
   * Get a wallet transaction by hash.
   *
   * @param {string} txHash - hash of a transaction to get
   * @return {MoneroTxWallet} the identified transactions
   */
  getTx(txHash: string): any;
  /**
   * <p>Get wallet transactions.  Wallet transactions contain one or more
   * transfers that are either incoming or outgoing to the wallet.<p>
   *
   * <p>Results can be filtered by passing a query object.  Transactions must
   * meet every criteria defined in the query in order to be returned.  All
   * criteria are optional and no filtering is applied when not defined.</p>
   *
   * @param {(MoneroTxQuery|string[]|object)} query - configures the query (optional)
   * @param {boolean} query.isConfirmed - get txs that are confirmed or not (optional)
   * @param {boolean} query.inTxPool - get txs that are in the tx pool or not (optional)
   * @param {boolean} query.isRelayed - get txs that are relayed or not (optional)
   * @param {boolean} query.isFailed - get txs that are failed or not (optional)
   * @param {boolean} query.isMinerTx - get miner txs or not (optional)
   * @param {string} query.hash - get a tx with the hash (optional)
   * @param {string[]} query.hashes - get txs with the hashes (optional)
   * @param {string} query.paymentId - get transactions with the payment id (optional)
   * @param {string[]} query.paymentIds - get transactions with the payment ids (optional)
   * @param {boolean} query.hasPaymentId - get transactions with a payment id or not (optional)
   * @param {int} query.minHeight - get txs with height >= the given height (optional)
   * @param {int} query.maxHeight - get txs with height <= the given height (optional)
   * @param {boolean} query.isOutgoing - get txs with an outgoing transfer or not (optional)
   * @param {boolean} query.isIncoming - get txs with an incoming transfer or not (optional)
   * @param {MoneroTransferQuery} query.transferQuery - get txs that have a transfer that meets this query (optional)
   * @param {boolean} query.includeOutputs - specifies that tx outputs should be returned with tx results (optional)
   * @param {string[]} missingTxHashes - populated with hashes of unfound or unmet transactions that were queried by hash (throws error if undefined and queried transaction hashes are unfound or unmet)
   * @return {MoneroTxWallet[]} wallet transactions per the configuration
   */
  getTxs(query: MoneroTxQuery | string[] | object, missingTxHashes: string[]): any[];
  /**
   * <p>Get incoming and outgoing transfers to and from this wallet.  An outgoing
   * transfer represents a total amount sent from one or more subaddresses
   * within an account to individual destination addresses, each with their
   * own amount.  An incoming transfer represents a total amount received into
   * a subaddress within an account.  Transfers belong to transactions which
   * are stored on the blockchain.</p>
   *
   * <p>Results can be filtered by passing a query object.  Transfers must
   * meet every criteria defined in the query in order to be returned.  All
   * criteria are optional and no filtering is applied when not defined.</p>
   *
   * @param {(MoneroTransferQuery|object)} query - configures the query (optional)
   * @param {boolean} query.isOutgoing - get transfers that are outgoing or not (optional)
   * @param {boolean} query.isIncoming - get transfers that are incoming or not (optional)
   * @param {string} query.address - wallet's address that a transfer either originated from (if outgoing) or is destined for (if incoming) (optional)
   * @param {int} query.accountIndex - get transfers that either originated from (if outgoing) or are destined for (if incoming) a specific account index (optional)
   * @param {int} query.subaddressIndex - get transfers that either originated from (if outgoing) or are destined for (if incoming) a specific subaddress index (optional)
   * @param {int[]} query.subaddressIndices - get transfers that either originated from (if outgoing) or are destined for (if incoming) specific subaddress indices (optional)
   * @param {BigInteger} query.amount - amount being transferred (optional)
   * @param {MoneroDestination[]} query.destinations - individual destinations of an outgoing transfer, which is local wallet data and NOT recoverable from the blockchain (optional)
   * @param {boolean} query.hasDestinations - get transfers that have destinations or not (optional)
   * @param {MoneroTxQuery} query.txQuery - get transfers whose transaction meets this query (optional)
   * @return {MoneroTransfer[]} are wallet transfers per the configuration
   */
  getTransfers(query: MoneroTransferQuery | object): any[];
  /**
   * Get all of the wallet's incoming transfers.
   *
   * @param query - passed to getTransfers() with isIncoming=true
   * @return {MoneroIncomingTransfer[]} the wallet's incoming transfers
   */
  getIncomingTransfers(query: any): any[];
  /**
   * Get all of the wallet's outgoing transfers.
   *
   * @param query - passed to getTransfers() with isOutgoing=true
   * @return {MoneroOutgoingTransfer[]} the wallet's outgoing transfers
   */
  getOutgoingTransfers(query: any): any[];
  /**
   * <p>Get outputs created from previous transactions that belong to the wallet
   * (i.e. that the wallet can spend one time).  Outputs are part of
   * transactions which are stored in blocks on the blockchain.</p>
   *
   * <p>Results can be filtered by passing a query object.  Outputs must
   * meet every criteria defined in the query in order to be returned.  All
   * filtering is optional and no filtering is applied when not defined.</p>
   *
   * @param {(MoneroOutputQuery|object)} query - configures the query (optional)
   * @param {int} query.accountIndex - get outputs associated with a specific account index (optional)
   * @param {int} query.subaddressIndex - get outputs associated with a specific subaddress index (optional)
   * @param {int[]} query.subaddressIndices - get outputs associated with specific subaddress indices (optional)
   * @param {BigInteger} query.amount - get outputs with a specific amount (optional)
   * @param {BigInteger} query.minAmount - get outputs greater than or equal to a minimum amount (optional)
   * @param {BigInteger} query.maxAmount - get outputs less than or equal to a maximum amount (optional)
   * @param {boolean} query.isSpent - get outputs that are spent or not (optional)
   * @param {string|MoneroKeyImage} query.keyImage - get output with a key image or which matches fields defined in a MoneroKeyImage (optional)
   * @param {MoneroTxQuery} query.txQuery - get outputs whose transaction meets this filter (optional)
   * @return {MoneroOutputWallet[]} are queried outputs
   */
  getOutputs(query: MoneroOutputQuery | object): any[];
  /**
   * Export all outputs in hex format.
   *
   * @return {string} all outputs in hex format, undefined if no outputs
   */
  getOutputsHex(): string;
  /**
   * Import outputs in hex format.
   *
   * @param {string} outputsHex - outputs in hex format
   * @return {int} the number of outputs imported
   */
  importOutputsHex(outputsHex: string): any;
  /**
   * Get all signed key images.
   *
   * @return {MoneroKeyImage[]} the wallet's signed key images
   */
  getKeyImages(): any[];
  /**
   * Import signed key images and verify their spent status.
   *
   * @param {MoneroKeyImage[]} keyImages -  images to import and verify (requires hex and signature)
   * @return {MoneroKeyImageImportResult} results of the import
   */
  importKeyImages(keyImages: any[]): any;
  /**
   * Get new key images from the last imported outputs.
   *
   * @return {MoneroKeyImage[]} the key images from the last imported outputs
   */
  getNewKeyImagesFromLastImport(): any[];
  /**
   * Create a transaction to transfer funds from this wallet.
   *
   * @param {MoneroTxConfig|object} config - configures the transaction to create (required)
   * @param {string} config.address - single destination address (required unless `destinations` provided)
   * @param {BigInteger|string} config.amount - single destination amount (required unless `destinations` provided)
   * @param {int} config.accountIndex - source account index to transfer funds from (required)
   * @param {int} config.subaddressIndex - source subaddress index to transfer funds from (optional)
   * @param {int[]} config.subaddressIndices - source subaddress indices to transfer funds from (optional)
   * @param {boolean} config.relay - relay the transaction to peers to commit to the blockchain (default false)
   * @param {MoneroTxPriority} config.priority - transaction priority (default MoneroTxPriority.NORMAL)
   * @param {MoneroDestination[]} config.destinations - addresses and amounts in a multi-destination tx (required unless `address` and `amount` provided)
   * @param {string} config.paymentId - transaction payment ID (optional)
   * @param {int} config.unlockHeight - minimum height for the transaction to unlock (default 0)
   * @return {MoneroTxWallet} the created transaction
   */
  createTx(config: MoneroTxConfig | object): any;
  /**
   * Create one or more transactions to transfer funds from this wallet.
   *
   * @param {MoneroTxConfig|object} config - configures the transactions to create (required)
   * @param {string} config.address - single destination address (required unless `destinations` provided)
   * @param {BigInteger|string} config.amount - single destination amount (required unless `destinations` provided)
   * @param {int} config.accountIndex - source account index to transfer funds from (required)
   * @param {int} config.subaddressIndex - source subaddress index to transfer funds from (optional)
   * @param {int[]} config.subaddressIndices - source subaddress indices to transfer funds from (optional)
   * @param {boolean} config.relay - relay the transactions to peers to commit to the blockchain (default false)
   * @param {MoneroTxPriority} config.priority - transaction priority (default MoneroTxPriority.NORMAL)
   * @param {MoneroDestination[]} config.destinations - addresses and amounts in a multi-destination tx (required unless `address` and `amount` provided)
   * @param {string} config.paymentId - transaction payment ID (optional)
   * @param {int} config.unlockHeight - minimum height for the transactions to unlock (default 0)
   * @param {boolean} config.canSplit - allow funds to be transferred using multiple transactions (default true)
   * @return {MoneroTxWallet[]} the created transactions
   */
  createTxs(config: MoneroTxConfig | object): any[];
  /**
   * Sweep an output by key image.
   *
   * @param {MoneroTxConfig} config - configures the transaction to create (required)
   * @param {string} config.address - single destination address (required)
   * @param {string} config.keyImage - key image to sweep (required)
   * @param {boolean} config.relay - relay the transaction to peers to commit to the blockchain (default false)
   * @param {int} config.unlockHeight - minimum height for the transaction to unlock (default 0)
   * @param {MoneroTxPriority} config.priority - transaction priority (default MoneroTxPriority.NORMAL)
   * @return {MoneroTxWallet} the created transaction
   */
  sweepOutput(config: MoneroTxConfig): any;
  /**
   * Sweep all unlocked funds according to the given configuration.
   *
   * @param {MoneroTxConfig|object} config - configures the transactions to create (required)
   * @param {string} config.address - single destination address (required)
   * @param {int} config.accountIndex - source account index to sweep from from (required)
   * @param {int} config.subaddressIndex - source subaddress index to sweep from (optional)
   * @param {int[]} config.subaddressIndices - source subaddress indices to sweep from (optional)
   * @param {boolean} config.relay - relay the transactions to peers to commit to the blockchain (default false)
   * @param {MoneroTxPriority} config.priority - transaction priority (default MoneroTxPriority.NORMAL)
   * @param {int} config.unlockHeight - minimum height for the transactions to unlock (default 0)
   * @return {MoneroTxWallet[]} the created transactions
   */
  sweepUnlocked(config: MoneroTxConfig | object): any[];
  /**
   * <p>Sweep all unmixable dust outputs back to the wallet to make them easier to spend and mix.</p>
   *
   * <p>NOTE: Dust only exists pre RCT, so this method will throw "no dust to sweep" on new wallets.</p>
   *
   * @param {boolean} relay - specifies if the resulting transaction should be relayed (default false)
   * @return {MoneroTxWallet[]} the created transactions
   */
  sweepDust(relay: boolean): any[];
  /**
   * Relay a previously created transaction.
   *
   * @param {(MoneroTxWallet|string)} txOrMetadata - transaction or its metadata to relay
   * @return {string} the hash of the relayed tx
   */
  relayTx(txOrMetadata: any | string): string;
  /**
   * Relay previously created transactions.
   *
   * @param {(MoneroTxWallet[]|string[])} txsOrMetadatas - transactions or their metadata to relay
   * @return {string[]} the hashes of the relayed txs
   */
  relayTxs(txsOrMetadatas: any[] | string[]): string[];
  /**
   * Parse a tx set containing unsigned or multisig tx hex to a new tx set containing structured transactions.
   *
   * @param {MoneroTxSet} txSet - a tx set containing unsigned or multisig tx hex
   * @return {MoneroTxSet} the parsed tx set containing structured transactions
   */
  parseTxSet(txSet: any): any;
  /**
   * Sign unsigned transactions from a view-only wallet.
   *
   * @param {string} unsignedTxHex - unsigned transaction hex from when the transactions were created
   * @return {string} the signed transaction hex
   */
  signTxs(unsignedTxHex: string): string;
  /**
   * Submit signed transactions from a view-only wallet.
   *
   * @param {string} signedTxHex - signed transaction hex from signTxs()
   * @return {string[]} the resulting transaction hashes
   */
  submitTxs(signedTxHex: string): string[];
  /**
   * Sign a message.
   *
   * @param {string} msg - message to sign
   * @return {string} the signature
   */
  signMessage(message: any): string;
  /**
   * Verify a signature on a message.
   *
   * @param {string} msg - signed message
   * @param {string} address - signing address
   * @param {string} signature - signature
   * @return {boolean} true if the signature is good, false otherwise
   */
  verifyMessage(message: any, address: string, signature: string): boolean;
  /**
   * Get a transaction's secret key from its hash.
   *
   * @param {string} txHash - transaction's hash
   * @return {string} - transaction's secret key
   */
  getTxKey(txHash: string): string;
  /**
   * Check a transaction in the blockchain with its secret key.
   *
   * @param {string} txHash - transaction to check
   * @param {string} txKey - transaction's secret key
   * @param {string} address - destination public address of the transaction
   * @return {MoneroCheckTx} the result of the check
   */
  checkTxKey(txHash: string, txKey: string, address: string): any;
  /**
   * Get a transaction signature to prove it.
   *
   * @param {string} txHash - transaction to prove
   * @param {string} address - destination public address of the transaction
   * @param {string} message - message to include with the signature to further authenticate the proof (optional)
   * @return {string} the transaction signature
   */
  getTxProof(txHash: string, address: string, message: string): string;
  /**
   * Prove a transaction by checking its signature.
   *
   * @param {string} txHash - transaction to prove
   * @param {string} address - destination public address of the transaction
   * @param {string} message - message included with the signature to further authenticate the proof (optional)
   * @param {string} signature - transaction signature to confirm
   * @return {MoneroCheckTx} the result of the check
   */
  checkTxProof(txHash: string, address: string, message: string, signature: string): any;
  /**
   * Generate a signature to prove a spend. Unlike proving a transaction, it does not require the destination public address.
   *
   * @param {string} txHash - transaction to prove
   * @param {string} message - message to include with the signature to further authenticate the proof (optional)
   * @return {string} the transaction signature
   */
  getSpendProof(txHash: string, message: string): string;
  /**
   * Prove a spend using a signature. Unlike proving a transaction, it does not require the destination public address.
   *
   * @param {string} txHash - transaction to prove
   * @param {string} message - message included with the signature to further authenticate the proof (optional)
   * @param {string} signature - transaction signature to confirm
   * @return {boolean} true if the signature is good, false otherwise
   */
  checkSpendProof(txHash: string, message: string, signature: string): boolean;
  /**
   * Generate a signature to prove the entire balance of the wallet.
   *
   * @param message - message included with the signature to further authenticate the proof (optional)
   * @return the reserve proof signature
   */
  getReserveProofWallet(message: any): Promise<void>;
  /**
   * Generate a signature to prove an available amount in an account.
   *
   * @param {int} accountIdx - account to prove ownership of the amount
   * @param {BigInteger} amount - minimum amount to prove as available in the account
   * @param {string} message - message to include with the signature to further authenticate the proof (optional)
   * @return {string} the reserve proof signature
   */
  getReserveProofAccount(accountIdx: any, amount: BigInteger, message: string): string;
  /**
   * Proves a wallet has a disposable reserve using a signature.
   *
   * @param {string} address - public wallet address
   * @param {string} message - message included with the signature to further authenticate the proof (optional)
   * @param {string} signature - reserve proof signature to check
   * @return {MoneroCheckReserve} the result of checking the signature proof
   */
  checkReserveProof(address: string, message: string, signature: string): any;
  /**
   * Get a transaction note.
   *
   * @param {string} txHash - transaction to get the note of
   * @return {string} the tx note
   */
  getTxNote(txHash: string): string;
  /**
   * Get notes for multiple transactions.
   *
   * @param {string[]} txHashes - hashes of the transactions to get notes for
   * @return {string[]} notes for the transactions
   */
  getTxNotes(txHashes: string[]): string[];
  /**
   * Set a note for a specific transaction.
   *
   * @param {string} txHash - hash of the transaction to set a note for
   * @param {string} note - the transaction note
   */
  setTxNote(txHash: string, note: string): Promise<void>;
  /**
   * Set notes for multiple transactions.
   *
   * @param {string[]} txHashes - transactions to set notes for
   * @param {string[]} notes - notes to set for the transactions
   */
  setTxNotes(txHashes: string[], notes: string[]): Promise<void>;
  /**
   * Get address book entries.
   *
   * @param {int[]} entryIndices - indices of the entries to get
   * @return {MoneroAddressBookEntry[]} the address book entries
   */
  getAddressBookEntries(entryIndices: any[]): any[];
  /**
   * Add an address book entry.
   *
   * @param {string} address - entry address
   * @param {string} description - entry description (optional)
   * @return {int} the index of the added entry
   */
  addAddressBookEntry(address: string, description: string): any;
  /**
   * Edit an address book entry.
   *
   * @param {number} index - index of the address book entry to edit
   * @param {boolean} setAddress - specifies if the address should be updated
   * @param {string} address - updated address
   * @param {boolean} setDescription - specifies if the description should be updated
   * @param {string} description - updated description
   */
  editAddressBookEntry(
    index: number,
    setAddress: boolean,
    address: string,
    setDescription: boolean,
    description: string,
  ): Promise<void>;
  /**
   * Delete an address book entry.
   *
   * @param {int} entryIdx - index of the entry to delete
   */
  deleteAddressBookEntry(entryIdx: any): Promise<void>;
  /**
   * Tag accounts.
   *
   * @param {string} tag - tag to apply to the specified accounts
   * @param {int[]} accountIndices - indices of the accounts to tag
   */
  tagAccounts(tag: string, accountIndices: any[]): Promise<void>;
  /**
   * Untag accounts.
   *
   * @param {int[]} accountIndices - indices of the accounts to untag
   */
  untagAccounts(accountIndices: any[]): Promise<void>;
  /**
   * Return all account tags.
   *
   * @return {MoneroAccountTag[]} the wallet's account tags
   */
  getAccountTags(): any[];
  /**
   * Sets a human-readable description for a tag.
   *
   * @param {string} tag - tag to set a description for
   * @param {string} label - label to set for the tag
   */
  setAccountTagLabel(tag: string, label: string): Promise<void>;
  /**
   * Creates a payment URI from a send configuration.
   *
   * @param {MoneroTxConfig} config - specifies configuration for a potential tx
   * @return {string} the payment uri
   */
  createPaymentUri(config: MoneroTxConfig): string;
  /**
   * Parses a payment URI to a tx config.
   *
   * @param {string} uri - payment uri to parse
   * @return {MoneroTxConfig} the send configuration parsed from the uri
   */
  parsePaymentUri(uri: string): MoneroTxConfig;
  /**
   * Get an attribute.
   *
   * @param {string} key - attribute to get the value of
   * @return {string} the attribute's value
   */
  getAttribute(key: string): string;
  /**
   * Set an arbitrary attribute.
   *
   * @param {string} key - attribute key
   * @param {string} val - attribute value
   */
  setAttribute(key: string, val: string): Promise<void>;
  /**
   * Start mining.
   *
   * @param {int} numThreads - number of threads created for mining (optional)
   * @param {boolean} backgroundMining - specifies if mining should occur in the background (optional)
   * @param {boolean} ignoreBattery - specifies if the battery should be ignored for mining (optional)
   */
  startMining(numThreads: any, backgroundMining: boolean, ignoreBattery: boolean): Promise<void>;
  /**
   * Stop mining.
   */
  stopMining(): Promise<void>;
  /**
   * Indicates if importing multisig data is needed for returning a correct balance.
   *
   * @return {boolean} true if importing multisig data is needed for returning a correct balance, false otherwise
   */
  isMultisigImportNeeded(): boolean;
  /**
   * Indicates if this wallet is a multisig wallet.
   *
   * @return {boolean} true if this is a multisig wallet, false otherwise
   */
  isMultisig(): boolean;
  /**
   * Get multisig info about this wallet.
   *
   * @return {MoneroMultisigInfo} multisig info about this wallet
   */
  getMultisigInfo(): any;
  /**
   * Get multisig info as hex to share with participants to begin creating a
   * multisig wallet.
   *
   * @return {string} this wallet's multisig hex to share with participants
   */
  prepareMultisig(): string;
  /**
   * Make this wallet multisig by importing multisig hex from participants.
   *
   * @param {String[]} multisigHexes - multisig hex from each participant
   * @param {int} threshold - number of signatures needed to sign transfers
   * @param {string} password - wallet password
   * @return {MoneroMultisigInitResult} the result which has the multisig's address xor this wallet's multisig hex to share with participants iff not N/N
   */
  makeMultisig(multisigHexes: string[], threshold: any, password: string): any;
  /**
   * Exchange multisig hex with participants in a M/N multisig wallet.
   *
   * This process must be repeated with participants exactly N-M times.
   *
   * @param {string[]} multisigHexes are multisig hex from each participant
   * @param {string} password - wallet's password // TODO monero core: redundant? wallet is created with password
   * @return {MoneroMultisigInitResult} the result which has the multisig's address xor this wallet's multisig hex to share with participants iff not done
   */
  exchangeMultisigKeys(multisigHexes: string[], password: string): any;
  /**
   * Export this wallet's multisig info as hex for other participants.
   *
   * @return {string} this wallet's multisig info as hex for other participants
   */
  getMultisigHex(): string;
  /**
   * Import multisig info as hex from other participants.
   *
   * @param {string[]} multisigHexes - multisig hex from each participant
   * @return {int} the number of outputs signed with the given multisig hex
   */
  importMultisigHex(multisigHexes: string[]): any;
  /**
   * Sign multisig transactions from a multisig wallet.
   *
   * @param {string} multisigTxHex - unsigned multisig transactions as hex
   * @return {MoneroMultisigSignResult} the result of signing the multisig transactions
   */
  signMultisigTxHex(multisigTxHex: string): any;
  /**
   * Submit signed multisig transactions from a multisig wallet.
   *
   * @param {string} signedMultisigTxHex - signed multisig hex returned from signMultisigTxHex()
   * @return {string[]} the resulting transaction hashes
   */
  submitMultisigTxHex(signedMultisigTxHex: string): string[];
  /**
   * Save the wallet at its current path.
   */
  save(): void;
  /**
   * Optionally save then close the wallet.
   *
   * @param {boolean} save - specifies if the wallet should be saved before being closed (default false)
   */
  close(save: boolean): Promise<void>;
  /**
   * Indicates if this wallet is closed or not.
   *
   * @return {boolean} true if the wallet is closed, false otherwise
   */
  isClosed(): boolean;
}
declare namespace MoneroWallet {
  const DEFAULT_LANGUAGE: string;
}
import MoneroTxQuery = require("./model/MoneroTxQuery");
import MoneroTransferQuery = require("./model/MoneroTransferQuery");
import MoneroOutputQuery = require("./model/MoneroOutputQuery");
import MoneroTxConfig = require("./model/MoneroTxConfig");
