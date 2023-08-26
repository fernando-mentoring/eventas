import { NextFunction, Request, Response } from "express";
import { prisma } from "..";

async function getUsers(req: Request, res: Response, next: NextFunction) {
  const users = await prisma.user.findMany({
    include: { events: {}, tickets: {} },
  });
  res.json(users);
}

async function getUser(req: Request, res: Response, next: NextFunction) {
  if (!req.params.id) {
    res.status(400).json({ error: "Missing User id" });
    return;
  }
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: String(id) },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function createUser(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name || !req.body.email) {
    res.status(400).json({ error: "Missing name or email" });
    return;
  }
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req: Request, res: Response, next: NextFunction) {
  if (!req.params.id) {
    res.status(400).json({ error: "Missing User id" });
    return;
  }
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: String(id) },
      data: {
        name,
        email,
      },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req: Request, res: Response, next: NextFunction) {
  if (!req.params.id) {
    res.status(400).json({ error: "Missing User id" });
    return;
  }
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: { id: String(id) },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function claimTicket(req: Request, res: Response, next: NextFunction) {
  if (!req.params.id || !req.params.ticketId) {
    res.status(400).json({ error: "Missing User id or Ticket id" });
    return;
  }
  const { id, ticketId } = req.params;
  try {
    const ticket = await prisma.ticket.update({
      where: { id: String(ticketId) },
      data: {
        ticketOwnerId: id,
      },
    });
    res.json(ticket);
  } catch (error) {
    next(error);
  }
}

async function getMyTickets(req: Request, res: Response, next: NextFunction) {
  if (!req.params.id) {
    res.status(400).json({ error: "Missing User id" });
    return;
  }
  const { id } = req.params;

  const myTickets = await prisma.ticket.findMany({
    where: { ticketOwnerId: String(id) },
  });
  res.json(myTickets);
}

async function getEventCreationForm(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.params.id) {
    res.status(400).json({ error: "Missing User id" });
    return;
  }
  const { id } = req.params;

  res.json("form eventos");
}

async function getMyEvents(req: Request, res: Response, next: NextFunction) {
  if (!req.params.id) {
    res.status(400).json({ error: "Missing User id" });
    return;
  }
  const { id } = req.params;

  const myEvents = await prisma.event.findMany({
    where: { eventOwnerId: String(id) },
  });
  res.json(myEvents);
}

export {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  claimTicket,
  getMyTickets,
  getMyEvents,
  getEventCreationForm,
};
