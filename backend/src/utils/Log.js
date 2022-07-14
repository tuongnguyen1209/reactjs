class Log {
  static default = (...message) => {
    console.log(...message);
  };
  static success = (...message) => {
    console.log("\x1b[34m", ...message, "\x1b[0m");
  };
  static info = (...message) => {
    console.log("\x1b[44m", ...message, "\x1b[0m");
  };
  static error = (...message) => {
    console.log("\x1b[31m", ...message, "\x1b[0m");
  };
}

module.exports = Log;
