const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user); //sends data back to react
});

//Authentication - verfication after registering
//Autghorization - level acess

//Json we Token - required string that has
// - requiresd user information
// - secure string with signed with a secret
// - adlbe to be sent with every request

//Why use JWT?
//it is stateless
//it is secure
//cam be decoded by both frontend and backend
