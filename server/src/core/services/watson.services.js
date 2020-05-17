const watsonRepo = require("../repository/watson.repository");

class watsonService {
  async getTicket() {
    try {
      const newTicket = await watsonRepo.createSession();
      return newTicket;
    } catch (ex) {
      throw ex;
    }
  }

  async talkToWatson(sessionId, message) {
    try {
      const response = await watsonRepo.send(sessionId, message);
      return response;
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new watsonService();
