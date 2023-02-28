import {Request, Response, NextFunction} from 'express';

export function errorHandler (err, req: Request, res: Response, next: NextFunction) {
  console.log(err);

  res.status(500).send({
    ok: false,
    message: "there was an unkown server error."
  });
}

export function notFoundHandler (req: Request, res: Response) {
  res.status(404).send({
    ok: false,
    message: "Route not found"
  });
}