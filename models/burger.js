//Define Burger model
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING, //set burger_name column as string (max 255 characters)
    devoured: { //set devoured as boolean with default value of false
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    description: DataTypes.TEXT //set description as text (for unlimited character length)
  });

  return Burger; //return Burger model value
};