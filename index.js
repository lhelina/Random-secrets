
import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://secrets-api.appbrewery.com/random`
    );
    const result = response.data.secret;
    const resultt = response.data.username;
    res.render("index.ejs", { secret: result, user: resultt });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
