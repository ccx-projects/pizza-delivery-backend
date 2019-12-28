exports.up = function(db) {
  return db.createTable("pizzas", {
    id: { type: "int", primaryKey: true },
    name: "string",
    price: "int",
    image: "string",
    created_at: {
      type: "timestamp",
      notNull: true,
      defaultValue: new String("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: "timestamp",
      notNull: true,
      defaultValue: new String("CURRENT_TIMESTAMP"),
    },
  });
};

exports.down = function(db) {
  return db.dropTable("pizzas");
};

exports._meta = {
  version: 1,
};
