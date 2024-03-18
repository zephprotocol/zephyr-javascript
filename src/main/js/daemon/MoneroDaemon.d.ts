export = MoneroDaemon;
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
 * Monero daemon interface and default implementations.
 *
 * @interface
 */
declare class MoneroDaemon {
  /**
   * Parses a network string to an enumerated type.
   *
   * @param {string} network - network string to parse
   * @return {MoneroNetworkType} enumerated network type
   */
  static parseNetworkType(network: string): import("./model/MoneroNetworkType");
  /**
   * Indicates if the client is connected to the daemon via RPC.
   *
   * @return {boolean} true if the client is connected to the daemon, false otherwise
   */
  isConnected(): boolean;
  /**
   * Gets the version of the daemon.
   *
   * @return {MoneroVersion} the version of the daemon
   */
  getVersion(): any;
  /**
   * Indicates if the daemon is trusted xor untrusted.
   *
   * @return {boolean} true if the daemon is trusted, false otherwise
   */
  isTrusted(): boolean;
  /**
   * Get the number of blocks in the longest chain known to the node.
   *
   * @return {int} the number of blocks
   */
  getHeight(): any;
  /**
   * Get a block's hash by its height.
   *
   * @param {int} height - height of the block hash to get
   * @return {string} the block's hash at the given height
   */
  getBlockHash(height: any): string;
  /**
   * Get a block template for mining a new block.
   *
   * @param {string} walletAddress - address of the wallet to receive miner transactions if block is successfully mined
   * @param {int} reserveSize - reserve size (optional)
   * @return {MoneroBlockTemplate} is a block template for mining a new block
   */
  getBlockTemplate(walletAddress: string, reserveSize: any): any;
  /**
   * Get the last block's header.
   *
   * @return {MoneroBlockHeader} last block's header
   */
  getLastBlockHeader(): any;
  /**
   * Get a block header by its hash.
   *
   * @param {string} blockHash - hash of the block to get the header of
   * @return {MoneroBlockHeader} block's header
   */
  getBlockHeaderByHash(blockHash: string): any;
  /**
   * Get a block header by its height.
   *
   * @param {int} height - height of the block to get the header of
   * @return {MoneroBlockHeader} block's header
   */
  getBlockHeaderByHeight(height: any): any;
  /**
   * Get block headers for the given range.
   *
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @return {MoneroBlockHeader[]} for the given range
   */
  getBlockHeadersByRange(startHeight: any, endHeight: any): any[];
  /**
   * Get a block by hash.
   *
   * @param {string} blockHash - hash of the block to get
   * @return {MoneroBlock} with the given hash
   */
  getBlockByHash(blockHash: string): any;
  /**
   * Get blocks by hash.
   *
   * @param {string[]} blockHashes - array of hashes; first 10 blocks hashes goes sequential,
   *        next goes in pow(2,n) offset, like 2, 4, 8, 16, 32, 64 and so on,
   *        and the last one is always genesis block
   * @param {int} startHeight - start height to get blocks by hash
   * @param {boolean} prune - specifies if returned blocks should be pruned (defaults to false)  // TODO: test default
   * @return {MoneroBlock[]} retrieved blocks
   */
  getBlocksByHash(blockHashes: string[], startHeight: any, prune: boolean): any[];
  /**
   * Get a block by height.
   *
   * @param {int} height - height of the block to get
   * @return {MoneroBlock} with the given height
   */
  getBlockByHeight(height: any): any;
  /**
   * Get blocks at the given heights.
   *
   * @param {int[]} heights - heights of the blocks to get
   * @return {MoneroBlock[]} are blocks at the given heights
   */
  getBlocksByHeight(heights: any[]): any[];
  /**
   * Get blocks in the given height range.
   *
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @return {MoneroBlock[]} are blocks in the given height range
   */
  getBlocksByRange(startHeight: any, endHeight: any): any[];
  /**
   * Get blocks in the given height range as chunked requests so that each request is
   * not too big.
   *
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @param {int} maxChunkSize - maximum chunk size in any one request (default 3,000,000 bytes)
   * @return {MoneroBlock[]} blocks in the given height range
   */
  getBlocksByRangeChunked(startHeight: any, endHeight: any, maxChunkSize: any): any[];
  /**
   * Get block hashes as a binary request to the daemon.
   *
   * @param {string[]} blockHashes - specify block hashes to fetch; first 10 blocks hash goes
   *        sequential, next goes in pow(2,n) offset, like 2, 4, 8, 16, 32, 64
   *        and so on, and the last one is always genesis block
   * @param {int} startHeight - starting height of block hashes to return
   * @return {string[]} requested block hashes
   */
  getBlockHashes(blockHashes: string[], startHeight: any): string[];
  /**
   * Get a transaction by hash.
   *
   * @param {string} txHash - hash of the transaction to get
   * @param {boolean} prune - specifies if the returned tx should be pruned (defaults to false)
   * @return {MoneroTx} transaction with the given hash
   */
  getTx(txHash: string, prune?: boolean): any;
  /**
   * Get transactions by hashes.
   *
   * @param {string[]} txHashes - hashes of transactions to get
   * @param {boolean} prune - specifies if the returned txs should be pruned (defaults to false)
   * @return {MoneroTx[]} transactions with the given hashes
   */
  getTxs(txHashes: string[], prune?: boolean): any[];
  /**
   * Get a transaction hex by hash.
   *
   * @param {string} txHash - hash of the transaction to get hex from
   * @param {boolean} prune - specifies if the returned tx hex should be pruned (defaults to false)
   * @return {string} tx hex with the given hash
   */
  getTxHex(txHash: string, prune?: boolean): string;
  /**
   * Get transaction hexes by hashes.
   *
   * @param {string[]} txHashes - hashes of transactions to get hexes from
   * @param {boolean} prune - specifies if the returned tx hexes should be pruned (defaults to false)
   * @return {string[]} tx hexes
   */
  getTxHexes(txHashes: string[], prune?: boolean): string[];
  /**
   * Gets the total emissions and fees from the genesis block to the current height.
   *
   * @param {int} height - height to start computing the miner sum
   * @param {int} numBlocks - number of blocks to include in the sum
   * @return {MoneroMinerTxSum} encapsulates the total emissions and fees since the genesis block
   */
  getMinerTxSum(height: any, numBlocks: any): any;
  /**
   * Get the fee estimate per kB.
   *
   * @param {int} graceBlocks TODO
   * @return {BigInteger} fee estimate per kB.
   */
  getFeeEstimate(graceBlocks: any): BigInteger;
  /**
   * Submits a transaction to the daemon's pool.
   *
   * @param {string} txHex - raw transaction hex to submit
   * @param {boolean} doNotRelay specifies if the tx should be relayed (optional)
   * @return {MoneroSubmitTxResult} contains submission results
   */
  submitTxHex(txHex: string, doNotRelay: boolean): any;
  /**
   * Relays a transaction by hash.
   *
   * @param {string} txHash - hash of the transaction to relay
   */
  relayTxByHash(txHash: string): Promise<void>;
  /**
   * Relays transactions by hash.
   *
   * @param {string[]} txHashes - hashes of the transactinos to relay
   */
  relayTxsByHash(txHashes: string[]): Promise<void>;
  /**
   * Get valid transactions seen by the node but not yet mined into a block, as well
   * as spent key image information for the tx pool.
   *
   * @return {MoneroTx[]} are transactions in the transaction pool
   */
  getTxPool(): any[];
  /**
   * Get hashes of transactions in the transaction pool.
   *
   * @return {string[]} are hashes of transactions in the transaction pool
   */
  getTxPoolHashes(): string[];
  /**
   * Get all transaction pool backlog.
   *
   * @return {MoneroTxBacklogEntry[]} backlog entries
   */
  getTxPoolBacklog(): any[];
  /**
   * Get transaction pool statistics.
   *
   * @return {MoneroTxPoolStats} contains statistics about the transaction pool
   */
  getTxPoolStats(): any;
  /**
   * Flush transactions from the tx pool.
   *
   * @param {(string|string[])} hashes - specific transactions to flush (defaults to all)
   */
  flushTxPool(hashes: string | string[]): Promise<void>;
  /**
   * Get the spent status of the given key image.
   *
   * @param {string} keyImage - key image hex to get the status of
   * @return {MoneroKeyImageSpentStatus} status of the key image
   */
  getKeyImageSpentStatus(keyImage: string): any;
  /**
   * Get the spent status of each given key image.
   *
   * @param {string[]} keyImages are hex key images to get the statuses of
   * @return {MoneroKeyImageSpentStatus[]} status for each key image
   */
  getKeyImageSpentStatuses(keyImages: string[]): any[];
  /**
   * Get outputs identified by a list of output amounts and indices as a binary
   * request.
   *
   * @param {MoneroOutput[]} outputs - identify each output by amount and index
   * @return {MoneroOutput[]} identified outputs
   */
  getOutputs(outputs: any[]): any[];
  /**
   * Get a histogram of output amounts. For all amounts (possibly filtered by
   * parameters), gives the number of outputs on the chain for that amount.
   * RingCT outputs counts as 0 amount.
   *
   * @param {BigInteger[]} amounts - amounts of outputs to make the histogram with
   * @param {int} minCount - TODO
   * @param {int} maxCount - TODO
   * @param {boolean} isUnlocked - makes a histogram with outputs with the specified lock state
   * @param {int} recentCutoff - TODO
   * @return {MoneroOutputHistogramEntry[]} are entries meeting the parameters
   */
  getOutputHistogram(
    amounts: BigInteger[],
    minCount: any,
    maxCount: any,
    isUnlocked: boolean,
    recentCutoff: any,
  ): any[];
  /**
   * Creates an output distribution.
   *
   * @param {BigInteger[]} amounts - amounts of outputs to make the distribution with
   * @param {boolean} cumulative - specifies if the results should be cumulative (defaults to TODO)
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @return {MoneroOutputDistributionEntry[]} are entries meeting the parameters
   */
  getOutputDistribution(amounts: BigInteger[], cumulative: boolean, startHeight: any, endHeight: any): any[];
  /**
   * Get general information about the state of the node and the network.
   *
   * @return {MoneroDaemonInfo} is general information about the node and network
   */
  getInfo(): any;
  /**
   * Get synchronization information.
   *
   * @return {MoneroDaemonSyncInfo} contains sync information
   */
  getSyncInfo(): any;
  /**
   * Look up information regarding hard fork voting and readiness.
   *
   * @return {MoneroHardForkInfo} contains hard fork information
   */
  getHardForkInfo(): any;
  /**
   * Get alternative chains seen by the node.
   *
   * @return {MoneroAltChain[]} alternative chains
   */
  getAltChains(): any[];
  /**
   * Get known block hashes which are not on the main chain.
   *
   * @return {string[]} known block hashes which are not on the main chain
   */
  getAltBlockHashes(): string[];
  /**
   * Get the download bandwidth limit.
   *
   * @return {int} download bandwidth limit
   */
  getDownloadLimit(): any;
  /**
   * Set the download bandwidth limit.
   *
   * @param {int} limit - download limit to set (-1 to reset to default)
   * @return {int} new download limit after setting
   */
  setDownloadLimit(limit: any): any;
  /**
   * Reset the download bandwidth limit.
   *
   * @return {int} download bandwidth limit after resetting
   */
  resetDownloadLimit(): any;
  /**
   * Get the upload bandwidth limit.
   *
   * @return {int} upload bandwidth limit
   */
  getUploadLimit(): any;
  /**
   * Set the upload bandwidth limit.
   *
   * @param limit - upload limit to set (-1 to reset to default)
   * @return {int} new upload limit after setting
   */
  setUploadLimit(limit: any): any;
  /**
   * Reset the upload bandwidth limit.
   *
   * @return {int} upload bandwidth limit after resetting
   */
  resetUploadLimit(): any;
  /**
   * Get known peers including their last known online status.
   *
   * @return {MoneroDaemonPeer[]} known peers
   */
  getKnownPeers(): any[];
  /**
   * Get incoming and outgoing connections to the node.
   *
   * @return {MoneroDaemonPeer[]} daemon's peer connections
   */
  getConnections(): any[];
  /**
   * Limit number of outgoing peers.
   *
   * @param {int} limit - maximum number of outgoing peers
   */
  setOutgoingPeerLimit(limit: any): Promise<void>;
  /**
   * Limit number of incoming peers.
   *
   * @param {int} limit - maximum number of incoming peers
   */
  setIncomingPeerLimit(limit: any): Promise<void>;
  /**
   * Get peer bans.
   *
   * @return {MoneroBan[]} entries about banned peers
   */
  getPeerBans(): any[];
  /**
   * Ban a peer node.
   *
   * @param {MoneroBan} ban - contains information about a node to ban
   */
  setPeerBan(ban: any): Promise<void>;
  /**
   * Ban peers nodes.
   *
   * @param {MoneroBan[]} bans - specify which peers to ban
   */
  setPeerBans(bans: any[]): Promise<void>;
  /**
   * Start mining.
   *
   * @param {string} address - address given miner rewards if the daemon mines a block
   * @param {integer} numThreads - number of mining threads to run
   * @param {boolean} isBackground - specifies if the miner should run in the background or not
   * @param {boolean} ignoreBattery - specifies if the battery state (e.g. on laptop) should be ignored or not
   */
  startMining(address: string, numThreads: any, isBackground: boolean, ignoreBattery: boolean): Promise<void>;
  /**
   * Stop mining.
   */
  stopMining(): Promise<void>;
  /**
   * Get the daemon's mining status.
   *
   * @return {MoneroMiningStatus} daemon's mining status
   */
  getMiningStatus(): any;
  /**
   * Submit a mined block to the network.
   *
   * @param {string} blockBlob - mined block to submit
   */
  submitBlock(blockBlob: string): Promise<void>;
  /**
   * Submit mined blocks to the network.
   *
   * @param {string[]} blockBlobs - mined blocks to submit
   */
  submitBlocks(blockBlobs: string[]): Promise<void>;
  /**
   * Check for update.
   *
   * @return {MoneroDaemonUpdateCheckResult} the result
   */
  checkForUpdate(): any;
  /**
   * Download an update.
   *
   * @param {string} path - path to download the update (optional)
   * @return {MoneroDaemonUpdateDownloadResult} the result
   */
  downloadUpdate(path: string): any;
  /**
   * Safely disconnect and shut down the daemon.
   */
  stop(): Promise<void>;
  /**
   * Get the header of the next block added to the chain.
   *
   * @return {MoneroBlockHeader} header of the next block added to the chain
   */
  getNextBlockHeader(): any;
  /**
   * Register a listener to be notified when blocks are added to the chain.
   *
   * @param {function} listener - invoked with MoneroBlockHeaders as blocks are added to the chain
   */
  addBlockListener(listener: Function): Promise<void>;
  /**
   * Unregister a listener to be notified when blocks are added to the chain.
   *
   * @param {function} listener - previously registered listener to be unregistered
   */
  removeBlockListener(listener: Function): Promise<void>;
}
