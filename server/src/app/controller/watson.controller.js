const watsonService = require("../../core/services/watson.services");

class watsonController {
  async getTicket({ headers, connection }, res) {
    try {
      const ticket = await watsonService.getTicket();
      console.log("Ticket for", {
        ticket,
        ip: headers["x-fowarded-for"] || connection.remoteAddress,
      });
      return res.json({ ticket });
    } catch (ex) {
      console.error("Error on get Ticket", ex);
      res.sendStatus(501);
    }
  }

  async talkToDoctor({ body, headers, connection }, res) {
    try {
      const { message } = body;
      const { sessionid } = headers;
      const responseFromDoctor = await watsonService.talkToWatson(
        sessionid,
        message
      );
      const response = { responseFromDoctor, date: new Date() };
      console.log("Response", {
        ...response,
        ip: headers["x-fowarded-for"] || connection.remoteAddress,
      });
      return res.json(response);
    } catch (ex) {
      console.error("Error on talking to the Doctor", ex);
      res.sendStatus(501);
    }
  }
}

module.exports = new watsonController();
