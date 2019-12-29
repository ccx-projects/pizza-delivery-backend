exports.up = function(db) {
  return db.insert("pizza", [
    { name: "Margherita", price: 1500, image: "" },
    { name: "Margherita", price: 1200, image: "" },
    { name: "Margherita", price: 1800, image: "" },
    { name: "Margherita", price: 1200, image: "" },
    { name: "Margherita", price: 1500, image: "" },
    { name: "Margherita", price: 1500, image: "" },
    { name: "Margherita", price: 1500, image: "" },
    { name: "Margherita", price: 1500, image: "" },
    { name: "Margherita", price: 1500, image: "" },
    { name: "Margherita", price: 1500, image: "" },
  ]);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1,
};
