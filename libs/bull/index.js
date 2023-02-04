const { QueueLib } = require("./bull.lib");
const queueLib = new QueueLib();
module.exports = { queueLib };
