const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vida: {
      type: DataTypes.INTEGER,
      unique: false
    },
    ataque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    isDB: {
      type: DataTypes.BOOLEAN
    }
  }, {
    timestamps: false,
  });
};
