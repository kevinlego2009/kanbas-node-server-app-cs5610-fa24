import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("PreviewModel", schema);
export default model;
