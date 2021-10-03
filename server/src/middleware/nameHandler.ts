import { NextFunction, Request, Response } from 'express';

const nameHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({
    message: err.message,
  });
};

export default nameHandler;
