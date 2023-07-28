const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Add this line to import axios


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "428642ac-132c-4a2c-b7bd-9da5f512ec85" } }
    );
    return res.status(response.status).json(response.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
