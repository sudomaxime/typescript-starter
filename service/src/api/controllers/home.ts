import type {Request, Response} from 'express';

export function handleIndex (req: Request, res: Response) {
  res.send({ok: true})
}

/**
 * Une exemple sur comment ajouter une propriété sur le body d'une request
 * c'est une bonne pratique de le documenter car cela peut aider les devs
 * à voir à quoi s'attendre d'une request POST par exemple.
 */

interface ExampleRequestInterface extends Request {
  body: {
    name: string
  }
}

export function handlePost (req: ExampleRequestInterface, res: Response) {
  const username = req.body.name;
  res.send(`The entered name was ${username}`);
}