export class AppError extends Error {
  statusCode: any;
  status: string;
  isOperational: boolean;
  constructor(message: string, statusCode: any) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}