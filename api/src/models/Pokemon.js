const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id : {
      type: DataTypes.STRING,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    vida: {
      type: DataTypes.STRING,
      unique: false,
    },
    ataque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    defensa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    velocidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isDB: {
      type: DataTypes.BOOLEAN,
    },
  },
    { timestamps: false })
};
