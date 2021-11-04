const houses = require("./db.json");

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },

  deleteHouse: (req, res) => {
    let index = houses.findIndex(house => house.id === +req.params.id);
    houses.splice(index, 1);
    res.status(200).send(houses);
    console.log(req.params);
  },
  createHouse: (req, res) => {
    const { address, price, imageUrl } = req.body;
    let newHouse = {
      address,
      price,
      imageUrl
    };

    houses.push(newHouse);

    res.status(200).send(houses);
  },

  updateHouse: (req, res) => {
    // console.log(req.body);
    console.log(req.params);

    let index = houses.findIndex(house => house.id === +req.params.id);
    console.log(index);
    if (req.body.type === "plus") {
      houses[index].price += 10000;
    } else if (req.body.type === "minus") {
      houses[index].price -= 10000;
    }
    res.status(200).send(houses);
  }
};
