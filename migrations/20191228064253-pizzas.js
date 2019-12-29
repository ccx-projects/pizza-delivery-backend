exports.up = function(db) {
  return db.createTable("pizzas", {
    id: { type: "int", primaryKey: true, autoIncrement: true, notNull: true },
    name: { type: "string", defaultValue: "", notNull: true, length: 50 },
    price: { type: "int", defaultValue: 0, notNull: true },
    image: { type: "string", defaultValue: "", notNull: true, length: 100 },
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
