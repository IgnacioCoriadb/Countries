const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('touristActivity', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    difficulty: {
       type: DataTypes.ENUM("1", "2" , "3" , "4" , "5"),
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    season:{
        type: DataTypes.ENUM('Summer','Autumn', 'Winter','Spring'),
    }

    });
};
