class TimeFormatLib {
  constructor({ DateTime, timeZone = "America/Costa_Rica" }) {
    this.dateTime = DateTime || require("luxon");
   
    this.timeZone = timeZone;
    this.dateWithTimezone = this.createDateTime();
  }
  createDateTime() {
    return this.dateTime.local().setZone(this.timeZone);
  }
  getCurrentTime() {
    return this.dateWithTimezone; // same
  }
}
module.exports = { TimeFormatLib };

