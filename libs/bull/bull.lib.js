const Queue = require("bull");
class QueueLib {
  constructor() {
    this.updateQueue = new Queue("update-queue");
  }
  create({ taskFunction }) {
    this.updateQueue.process(async (job) => {
      await taskFunction();
    });
    const SECONDS_DURATION = 10;
    const ONE_SECOND = 1000;
    const delayTime = SECONDS_DURATION * ONE_SECOND;
    const { id } = this.updateQueue.add({}, { delay: delayTime });
  }
}
module.exports = { QueueLib };
// Add a task to the queue to run every hour
