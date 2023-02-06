const { queueLib } = require("../libs/bull");
const { timeFormatLib } = require("../libs/TimeFormat");
const { socket } = require("../libs/socketio/socketio.lib");
class DocumentsService {
  constructor() {
    this.queueLib = queueLib;
    this.timeFormatLib = timeFormatLib;
  }
  create({ id }) {
    const date = this.timeFormatLib.getCurrentTime();
    const hour = date.hour;
    const minute = date.minute;
    const second = date.second;

    const taskFn = () => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const message = `tarea ${id} ejecutada a las ${hour}:${minute}:${second}`;
      console.log(
        "🚀 ~ file: documents.service.js:21 ~ DocumentsService ~ taskFn ~ message",
        message
      );
      socket.io.emit(`message_${id}`, message);
    };
    this.queueLib.create({ taskFunction: taskFn });
    const message = `Creada a las ${hour}:${minute}:${second}`;
    console.log(message);
    return message;
  }
}
module.exports = { DocumentsService };
