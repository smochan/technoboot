const Data = require("../models/data");

async function create(req, res) {
  try {
    //   console.log(await Data.findOne({ imageUrl: req.body.imageUrl }));
    if (await Data.findOne({ imageUrl: req.body.imageUrl }))
      return res.status(400).send("Data already exist");
    const data = req.body;
    await Data.create(data);
    res.status(200).send("data added to database.");
  } catch (err) {
    res.status(500).send("Error!");
  }
}

async function read(req, res) {
  try {
    const data = await Data.findOne({
      _id: req.body.id,
    });
    if (data) return res.status(200).json(data);

    return res.status(404).send("data not found.");
  } catch (err) {
    res.status(500).send("Error!");
  }
}

async function update(req, res) {
  try {
    const data = await Data.findOne({
      _id: req.body.id,
    });
    if (data) {
      if (req.body.imageUrl) data.imageUrl = req.body.imageUrl;
      if (res.body.title) data.title = req.body.title;

      if (res.body.content) data.content = req.body.content;

      if (res.body.heading) data.heading = req.body.heading;

      await data.save();
      return res.status(200).send("data updated");
    } else {
      res.status(400).send("Data not found.");
    }
  } catch (err) {
    res.status(500).send("Error!");
  }
}

async function del(req, res) {
  try {
    const data = await Data.deleteOne({
      _id: req.body.id,
    });
  } catch (err) {
    res.status(500).send("Error!");
  }
}

module.exports = {
  create,
  read,
  update,
  del,
};
