import Item from "../model/items.js";
export const getAllItems = async (req, res) => {
  try {
    const data = await Item.find({});
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
export const createItem = async (req, res) => {
  try {
    const data = await Item.create(req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const uptadeItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {}
};
