import { Request, Response } from "express";

export function root(request: Request, response: Response) {
  response.send("ok");
}
