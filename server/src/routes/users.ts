import { Router } from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  claimTicket,
  getMyTickets,
  getMyEvents,
  getEventCreationForm,
} from "../controllers/users.controller";

export const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);
userRouter.post("/users", createUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);
userRouter.post("/users/:id/tickets/:ticketId/claim", claimTicket);
userRouter.get("/users/:id/myTickets", getMyTickets);
userRouter.get("/users/:id/events/createEvent", getEventCreationForm);
userRouter.get("/users/:id/myEvents", getMyEvents);
