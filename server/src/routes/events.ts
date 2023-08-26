import { Router } from "express";

import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
  getTicketCreationForm,
} from "../controllers/events.controller";

export const eventRouter = Router();

eventRouter.get("/events", getEvents);
eventRouter.get("/events/:id", getEvent);
eventRouter.post("/events", createEvent);
eventRouter.put("/events/:id", updateEvent);
eventRouter.delete("/events/:id", deleteEvent);
eventRouter.get("/events/:id/createTickets", getTicketCreationForm);
