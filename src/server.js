import express from 'express'; // Da para utilizar com o sucrase
import { getUsers, addUser } from './repositories/UserRepository';

const app = express();

app.get('/', (req, res) => {
  const users = getUsers();
  return res.json({ users })
});

app.listen(3333);