import app from "../index.js";
import { dbConnect } from "../utils/db.js";

export default async function handler(req, res) {
  await dbConnect();
  return app(req, res);
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};


