import { RequestHandler } from "express";
import { ToDo } from "../models/todo";

const TODOS: ToDo[] = [];

export const createToDo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newToDo: ToDo = new ToDo(Math.random().toString(), text);
  TODOS.push(newToDo);
  res.status(201).json({ message: "Created the todo.", createdToDo: newToDo });
};

export const getToDos: RequestHandler = (req, res, next) => {
  res.status(200).json({ data: TODOS });
};
