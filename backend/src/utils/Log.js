class Log {
  static default = (...message) => {
    console.log(...message);
  };
  static success = (...message) => {
    console.log("\x1b[34m", ...message);
  };
  static info = (...message) => {
    console.log("\x1b[44m", ...message);
  };
  static error = (...message) => {
    console.log("\x1b[31m", ...message);
  };
}

module.exports = Log;
