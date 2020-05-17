require("dotenv/config");
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

class watsonRepository {
  constructor() {
    this.assistant = new AssistantV2({
      version: "2020-05-17",
      authenticator: new IamAuthenticator({
        apikey: process.env.APIKEY_WATSON,
      }),
      url: process.env.URL_WATSON,
      headers: {
        "X-Watson-Learning-Opt-Out": "true",
      },
      disableSslVerification: true,
    });
  }

  async createSession() {
    try {
      const { result } = await this.assistant.createSession({
        assistantId: process.env.ASSISTANT_ID,
      });
      return result.session_id;
    } catch (ex) {
      throw ex;
    }
  }

  async send(sessionId, message) {
    try {
      const { result } = await this.assistant.message({
        assistantId: process.env.ASSISTANT_ID,
        sessionId,
        input: {
          message_type: "text",
          text: message,
        },
      });
      const response = result.output.generic.map((x) => x.text);
      return response;
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new watsonRepository();
