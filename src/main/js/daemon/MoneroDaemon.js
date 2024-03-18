const MoneroError = require("../common/MoneroError");

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
class MoneroDaemon {
    
  /**
   * Register a listener to receive daemon notifications.
   * 
   * @param {MoneroDaemonListener} listener - listener to receive daemon notifications
   */
  async addListener(listener) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Unregister a listener to receive daemon notifications.
   * 
   * @param {MoneroDaemonListener} listener - listener to unregister
   */
  async removeListener(listener) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the listeners registered with the daemon.
   * 
   * @return {MoneroDaemonListener[]} the registered listeners
   */
  getListeners() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Indicates if the client is connected to the daemon via RPC.
   * 
   * @return {boolean} true if the client is connected to the daemon, false otherwise
   */
  async isConnected() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Gets the version of the daemon.
   * 
   * @return {MoneroVersion} the version of the daemon
   */
  async getVersion() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Indicates if the daemon is trusted xor untrusted.
   * 
   * @return {boolean} true if the daemon is trusted, false otherwise
   */
  async isTrusted() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the number of blocks in the longest chain known to the node.
   * 
   * @return {int} the number of blocks
   */
  async getHeight() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a block's hash by its height.
   * 
   * @param {int} height - height of the block hash to get
   * @return {string} the block's hash at the given height
   */
  async getBlockHash(height) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a block template for mining a new block.
   * 
   * @param {string} walletAddress - address of the wallet to receive miner transactions if block is successfully mined
   * @param {int} reserveSize - reserve size (optional)
   * @return {MoneroBlockTemplate} is a block template for mining a new block
   */
  async getBlockTemplate(walletAddress, reserveSize) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the last block's header.
   * 
   * @return {MoneroBlockHeader} last block's header
   */
  async getLastBlockHeader() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a block header by its hash.
   * 
   * @param {string} blockHash - hash of the block to get the header of
   * @return {MoneroBlockHeader} block's header
   */
  async getBlockHeaderByHash(blockHash) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a block header by its height.
   * 
   * @param {int} height - height of the block to get the header of
   * @return {MoneroBlockHeader} block's header
   */
  async getBlockHeaderByHeight(height) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get block headers for the given range.
   * 
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @return {MoneroBlockHeader[]} for the given range
   */
  async getBlockHeadersByRange(startHeight, endHeight) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a block by hash.
   * 
   * @param {string} blockHash - hash of the block to get
   * @return {MoneroBlock} with the given hash
   */
  async getBlockByHash(blockHash) {
    throw new MoneroError("Subclass must implement");
  }
  
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
  async getBlocksByHash(blockHashes, startHeight, prune) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a block by height.
   * 
   * @param {int} height - height of the block to get
   * @return {MoneroBlock} with the given height
   */
  async getBlockByHeight(height) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get blocks at the given heights.
   * 
   * @param {int[]} heights - heights of the blocks to get
   * @return {MoneroBlock[]} are blocks at the given heights
   */
  async getBlocksByHeight(heights) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get blocks in the given height range.
   * 
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @return {MoneroBlock[]} are blocks in the given height range
   */
  async getBlocksByRange(startHeight, endHeight) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get blocks in the given height range as chunked requests so that each request is
   * not too big.
   * 
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @param {int} maxChunkSize - maximum chunk size in any one request (default 3,000,000 bytes)
   * @return {MoneroBlock[]} blocks in the given height range
   */
  async getBlocksByRangeChunked(startHeight, endHeight, maxChunkSize) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get block hashes as a binary request to the daemon.
   * 
   * @param {string[]} blockHashes - specify block hashes to fetch; first 10 blocks hash goes
   *        sequential, next goes in pow(2,n) offset, like 2, 4, 8, 16, 32, 64
   *        and so on, and the last one is always genesis block
   * @param {int} startHeight - starting height of block hashes to return
   * @return {string[]} requested block hashes     
   */
  async getBlockHashes(blockHashes, startHeight) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a transaction by hash.
   * 
   * @param {string} txHash - hash of the transaction to get
   * @param {boolean} prune - specifies if the returned tx should be pruned (defaults to false)
   * @return {MoneroTx} transaction with the given hash or undefined if not found
   */
  async getTx(txHash, prune = false) {
    return (await this.getTxs([txHash], prune))[0];
  }
  
  /**
   * Get transactions by hashes.
   * 
   * @param {string[]} txHashes - hashes of transactions to get
   * @param {boolean} prune - specifies if the returned txs should be pruned (defaults to false)
   * @return {MoneroTx[]} found transactions with the given hashes
   */
  async getTxs(txHashes, prune = false) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get a transaction hex by hash.
   * 
   * @param {string} txHash - hash of the transaction to get hex from
   * @param {boolean} prune - specifies if the returned tx hex should be pruned (defaults to false)
   * @return {string} tx hex with the given hash
   */
  async getTxHex(txHash, prune = false) {
    return (await this.getTxHexes([txHash], prune))[0];
  }
  
  /**
   * Get transaction hexes by hashes.
   * 
   * @param {string[]} txHashes - hashes of transactions to get hexes from
   * @param {boolean} prune - specifies if the returned tx hexes should be pruned (defaults to false)
   * @return {string[]} tx hexes
   */
  async getTxHexes(txHashes, prune = false) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Gets the total emissions and fees from the genesis block to the current height.
   * 
   * @param {int} height - height to start computing the miner sum
   * @param {int} numBlocks - number of blocks to include in the sum
   * @return {MoneroMinerTxSum} encapsulates the total emissions and fees since the genesis block
   */
  async getMinerTxSum(height, numBlocks) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get mining fee estimates per kB.
   * 
   * @param {number} graceBlocks TODO
   * @return {MoneroFeeEstimate} mining fee estimates per kB
   */
  async getFeeEstimate(graceBlocks) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Submits a transaction to the daemon's pool.
   * 
   * @param {string} txHex - raw transaction hex to submit
   * @param {boolean} doNotRelay specifies if the tx should be relayed (optional)
   * @return {MoneroSubmitTxResult} contains submission results
   */
  async submitTxHex(txHex, doNotRelay) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Relays a transaction by hash.
   * 
   * @param {string} txHash - hash of the transaction to relay
   */
  async relayTxByHash(txHash) {
    const assert = require("assert");
    assert.equal(typeof txHash, "string", "Must provide a transaction hash");
    await this.relayTxsByHash([txHash]);
  }
  
  /**
   * Relays transactions by hash.
   * 
   * @param {string[]} txHashes - hashes of the transactinos to relay
   */
  async relayTxsByHash(txHashes) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get valid transactions seen by the node but not yet mined into a block, as well
   * as spent key image information for the tx pool.
   * 
   * @return {MoneroTx[]} are transactions in the transaction pool
   */
  async getTxPool() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get hashes of transactions in the transaction pool.
   * 
   * @return {string[]} are hashes of transactions in the transaction pool
   */
  async getTxPoolHashes() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get all transaction pool backlog.
   * 
   * @return {MoneroTxBacklogEntry[]} backlog entries 
   */
  async getTxPoolBacklog() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get transaction pool statistics.
   * 
   * @return {MoneroTxPoolStats} contains statistics about the transaction pool
   */
  async getTxPoolStats() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Flush transactions from the tx pool.
   * 
   * @param {(string|string[])} hashes - specific transactions to flush (defaults to all)
   */
  async flushTxPool(hashes) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the spent status of the given key image.
   * 
   * @param {string} keyImage - key image hex to get the status of
   * @return {MoneroKeyImageSpentStatus} status of the key image
   */
  async getKeyImageSpentStatus(keyImage) {
    return (await this.getKeyImageSpentStatuses([keyImage]))[0];
  }
  
  /**
   * Get the spent status of each given key image.
   * 
   * @param {string[]} keyImages are hex key images to get the statuses of
   * @return {MoneroKeyImageSpentStatus[]} status for each key image
   */
  async getKeyImageSpentStatuses(keyImages) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get outputs identified by a list of output amounts and indices as a binary
   * request.
   * 
   * @param {MoneroOutput[]} outputs - identify each output by amount and index
   * @return {MoneroOutput[]} identified outputs
   */
  async getOutputs(outputs) {
    throw new MoneroError("Subclass must implement");
  }
  
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
  async getOutputHistogram(amounts, minCount, maxCount, isUnlocked, recentCutoff) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Creates an output distribution.
   * 
   * @param {BigInteger[]} amounts - amounts of outputs to make the distribution with
   * @param {boolean} cumulative - specifies if the results should be cumulative (defaults to TODO)
   * @param {int} startHeight - start height lower bound inclusive (optional)
   * @param {int} endHeight - end height upper bound inclusive (optional)
   * @return {MoneroOutputDistributionEntry[]} are entries meeting the parameters
   */
  async getOutputDistribution(amounts, cumulative, startHeight, endHeight) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get general information about the state of the node and the network.
   * 
   * @return {MoneroDaemonInfo} is general information about the node and network
   */
  async getInfo() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get synchronization information.
   * 
   * @return {MoneroDaemonSyncInfo} contains sync information
   */
  async getSyncInfo() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Look up information regarding hard fork voting and readiness.
   * 
   * @return {MoneroHardForkInfo} contains hard fork information
   */
  async getHardForkInfo() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get alternative chains seen by the node.
   * 
   * @return {MoneroAltChain[]} alternative chains
   */
  async getAltChains() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get known block hashes which are not on the main chain.
   * 
   * @return {string[]} known block hashes which are not on the main chain
   */
  async getAltBlockHashes() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the download bandwidth limit.
   * 
   * @return {int} download bandwidth limit
   */
  async getDownloadLimit() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Set the download bandwidth limit.
   * 
   * @param {int} limit - download limit to set (-1 to reset to default)
   * @return {int} new download limit after setting
   */
  async setDownloadLimit(limit) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Reset the download bandwidth limit.
   * 
   * @return {int} download bandwidth limit after resetting
   */
  async resetDownloadLimit() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the upload bandwidth limit.
   * 
   * @return {int} upload bandwidth limit
   */
  async getUploadLimit() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Set the upload bandwidth limit.
   * 
   * @param limit - upload limit to set (-1 to reset to default)
   * @return {int} new upload limit after setting
   */
  async setUploadLimit(limit) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Reset the upload bandwidth limit.
   * 
   * @return {int} upload bandwidth limit after resetting
   */
  async resetUploadLimit() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get peers with active incoming or outgoing connections to the node.
   * 
   * @return {MoneroPeer[]} the daemon's peers
   */
  async getPeers() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get known peers including their last known online status.
   * 
   * @return {MoneroPeer[]} the daemon's known peers
   */
  async getKnownPeers() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Limit number of outgoing peers.
   * 
   * @param {int} limit - maximum number of outgoing peers
   */
  async setOutgoingPeerLimit(limit) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Limit number of incoming peers.
   * 
   * @param {int} limit - maximum number of incoming peers
   */
  async setIncomingPeerLimit(limit) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get peer bans.
   * 
   * @return {MoneroBan[]} entries about banned peers
   */
  async getPeerBans() {
    throw new MoneroError("Subclass must implement");
  }

  /**
   * Ban a peer node.
   * 
   * @param {MoneroBan} ban - contains information about a node to ban
   */
  async setPeerBan(ban) {
    return await this.setPeerBans([ban]);
  }
  
  /**
   * Ban peers nodes.
   * 
   * @param {MoneroBan[]} bans - specify which peers to ban
   */
  async setPeerBans(bans) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Start mining.
   * 
   * @param {string} address - address given miner rewards if the daemon mines a block
   * @param {integer} numThreads - number of mining threads to run
   * @param {boolean} isBackground - specifies if the miner should run in the background or not
   * @param {boolean} ignoreBattery - specifies if the battery state (e.g. on laptop) should be ignored or not
   */
  async startMining(address, numThreads, isBackground, ignoreBattery) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Stop mining.
   */
  async stopMining() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the daemon's mining status.
   * 
   * @return {MoneroMiningStatus} daemon's mining status
   */
  async getMiningStatus() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Submit a mined block to the network.
   * 
   * @param {string} blockBlob - mined block to submit
   */
  async submitBlock(blockBlob) {
    await this.submitBlocks([blockBlob]);
  }

  /**
   * Prune the blockchain.
   * 
   * @param {boolean} check specifies to check the pruning (default false)
   * @return {MoneroPruneResult} the prune result
   */
  async pruneBlockchain(check) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Submit mined blocks to the network.
   * 
   * @param {string[]} blockBlobs - mined blocks to submit
   */
  async submitBlocks(blockBlobs) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Check for update.
   * 
   * @return {MoneroDaemonUpdateCheckResult} the result
   */
  async checkForUpdate() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Download an update.
   * 
   * @param {string} path - path to download the update (optional)
   * @return {MoneroDaemonUpdateDownloadResult} the result
   */
  async downloadUpdate(path) {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Safely disconnect and shut down the daemon.
   */
  async stop() {
    throw new MoneroError("Subclass must implement");
  }
  
  /**
   * Get the header of the next block added to the chain.
   * 
   * @return {MoneroBlockHeader} header of the next block added to the chain
   */
  async waitForNextBlockHeader() {
    throw new MoneroError("Subclass must implement");
  }
  
  // ----------------------------- STATIC UTILITIES ---------------------------
  
  /**
   * Parses a network string to an enumerated type.
   * 
   * @param {string} network - network string to parse
   * @return {MoneroNetworkType} enumerated network type
   */
  static parseNetworkType(network) {
    const MoneroNetworkType = require("./model/MoneroNetworkType");
    if (network === "mainnet") return MoneroNetworkType.MAINNET;
    if (network === "testnet") return MoneroNetworkType.TESTNET;
    if (network === "stagenet") return MoneroNetworkType.STAGENET;
    throw new MoneroError("Invalid network type to parse: " + network);
  }
}

module.exports = MoneroDaemon;