import { USER, AUTH_TOKEN } from "../constants.js"

const validateAuth = ({ email, password }) =>
  email === USER.email && password === USER.password

export const login = (request, response) => {
  const { email, password } = request.body

  if (!validateAuth({ email, password }))
    return response.status(401).json({ message: `Incorrect credentials` });

  return response.json({ name: USER.name, token: AUTH_TOKEN });
}

const validateToken = token => [AUTH_TOKEN, `Bearer ${AUTH_TOKEN}`].includes(token);

export const authMiddleware = (req, res, next) =>
  validateToken(req.headers.authorization)
    ? next()
    : res.status(403).json({ message: `Invalid auth` });
