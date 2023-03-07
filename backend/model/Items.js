import mongoose, { Schema } from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Бүтээгдэхүүний нэр"],
  },
  price: {
    type: String,
  },

  type: {
    type: String,
    enum: ["man", "woman", "kids"],
    required: [true],
  },

  color: {
    type: Array,
  },
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
const Item = mongoose.model("item", ItemSchema);
export default Item;
