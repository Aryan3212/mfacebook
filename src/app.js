import express from "express";
import apiRoutesV1 from "./routes/v1/index.js";
import morgan from "morgan";

const router = new express.Router();
router.use('/v1', apiRoutesV1);
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router)

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })

export default app;