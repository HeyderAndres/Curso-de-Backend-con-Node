import passport from "passport";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { environments } from "../config/config.js"

const router = Router();

router.post('/login', passport.authenticate('local', { session: false }),
async (req, res, next) => {
  try {
    const user = req.user;
    const payload = {
      sub: user.id,
      role: user.role,
    }

    const token = jwt.sign(payload, environments.auth.jwtSecret);

    res.json({user, token });
  }catch (error) {
    next(error);
  }
})

export default router;
