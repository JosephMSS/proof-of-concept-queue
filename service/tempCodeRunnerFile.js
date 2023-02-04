const { queueLib } = require("../libs/bull");
const { timeFormatLib } = require("../libs/TimeFormat");
class DocumentsService {
  constructor() {
    // this.queueLib = queueLib;
    this.timeFormatLib = timeFormatLib;
  }
  create() {
    const taskFn = () => {
      const date = timeFormatLib.getCurrentTime();
      const hour = date.hour;
      const minute = date.minute;
      const second = date.second;

      console.log(`tarea ejecutada a las:${hour}:${minute}:${second}`);
    };
    taskFn();
  }
}
const documentsService = new DocumentsService();
documentsService.create();
