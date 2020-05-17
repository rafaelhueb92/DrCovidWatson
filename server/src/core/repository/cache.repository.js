class Cache {
  constructor() {
    this.cache = new require("node-cache")({ stdTTL: 100, checkperiod: 120 });
  }

  get(key) {
    try {
      return this.cache.get(key);
    } catch (ex) {
      throw ex;
    }
  }

  set(key, value) {
    try {
      return this.cache.set(key, value, 10000);
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new Cache();
