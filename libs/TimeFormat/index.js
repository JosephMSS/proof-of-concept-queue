const { DateTime } = require("luxon");
const { TimeFormatLib } = require("./luxon.lib");
const timeFormatLib = new TimeFormatLib({ DateTime });
module.exports = { timeFormatLib };
