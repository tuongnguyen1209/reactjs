class AppError extends Error {
  constructor(message, statusCode, errorCode) {
    super(message);

    this.statusCode = statusCode || 500;
    this.errorCode = errorCode;
    this.status = `${statusCode}`.startsWith("4") ? "Failed" : "Error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.contsructor);
  }
}

module.exports = AppError;
