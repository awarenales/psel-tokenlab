const mongoose = require("mongoose");

const Event = mongoose.model("Event");

module.exports = {
  async index(req, res) {
    const events = await Event.find();

    return res.json(events);
  },

  async show(req, res) {
    const event = await Event.findById(req.params.id);

    return res.json(event);
  },

  async store(req, res) {
    const event = await Event.create(req.body);

    return res.json(event);
  },

  async update(req, res) {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(event);
  },

  async destroy(req, res) {
    await Event.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
