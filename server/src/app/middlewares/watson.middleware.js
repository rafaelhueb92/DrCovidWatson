const watsonValidation = require("../../core/validation/watson.validation");

class watsonMiddleware {
  sessionIdIsValid(req, res, next) {
    try {
      const { headers } = req;
      console.log("headers",headers);
      if (!watsonValidation.checkTicketIsValid(headers.sessionid))
        return res.status(400).json({ error: "sessionId Invalid" });
      next();
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new watsonMiddleware();
