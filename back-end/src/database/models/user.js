// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user: {
            type: DataTypes.STRING(50),
            allowNull: false
          },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
              isEmail: true,
            },
          },
          password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

    },{timestamps: false,});

    return User;
};

module.exports = UserModel;