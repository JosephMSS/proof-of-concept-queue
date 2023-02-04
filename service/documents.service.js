const { queueLib } = require("../libs/bull");
const { timeFormatLib } = require("../libs/TimeFormat");
class DocumentsService {
  constructor() {
    this.queueLib = queueLib;
    this.timeFormatLib = timeFormatLib;
  }
  create() {
    const date = this.timeFormatLib.getCurrentTime();
    const hour = date.hour;
    const minute = date.minute;
    const second = date.second;
    const taskFn = () => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      console.log(`tarea ejecutada a las ${hour}:${minute}:${second}`);
    };
    this.queueLib.create({ taskFunction: taskFn });
    const message = `Creada a las ${hour}:${minute}:${second}`;
    console.log(message);
    return message;
  }
}
module.exports = { DocumentsService };
