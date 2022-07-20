import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
          throw new Error("Not real a user");
        }
      } catch (e) {
        res.status(401);
        res.json({ message: "Invalid token" });
        return;
      }
      return handler(res, req, user);
    }
    res.status(401);
    res.json({ message: "Invalid token" });
  };
};
