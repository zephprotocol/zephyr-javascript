/**
 * Default wallet listener which takes no action on notifications.
 */
class MoneroWalletListener {
  /**
   * Invoked as the wallet is synchronized.
   *
   * @param {number} height - height of the synced block
   * @param {number} startHeight - starting height of the sync request
   * @param {number} endHeight - ending height of the sync request
   * @param {number} percentDone - sync progress as a percentage
   * @param {string} message - human-readable description of the current progress
   */
  async onSyncProgress(height, startHeight, endHeight, percentDone, message) {}

  /**
   * Invoked when a new block is added to the chain.
   *
   * @param {int} height - the height of the new block (i.e. the number of blocks before it).
   */
  async onNewBlock(height) {}

  /**
   * Invoked when the wallet's balances change.
   *
   * @param {BigInteger} newBalance - new wallet balance
   * @param {BigInteger} newUnlockedBalance - new unlocked wallet balance
   * @param {string} asset_type - the asset type of the balance

   */
  async onBalancesChanged(newBalance, newUnlockedBalance, asset_type) {}

  /**
   * Invoked 3 times per received output: once when unconfirmed, once when confirmed, and
   * once when unlocked.
   *
   * The notified output includes basic fields only, so the output or its transaction should be fetched to get all available fields.
   *
   * @param {MoneroOutputWallet} output - the received output
   */
  async onOutputReceived(output) {}

  /**
   * Invoked twice per spent output: once when confirmed and once when unlocked.
   *
   * The notified output includes basic fields only, so the output or its transaction should be fetched to get all available fields.
   *
   * @param {MoneroOutputWallet} output - the spent output
   */
  async onOutputSpent(output) {}
}

module.exports = MoneroWalletListener;
