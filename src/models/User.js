const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        googleId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profilePicture: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        emailVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        avatar: {
            type: DataTypes.JSONB,
            allowNull: true,
            defaultValue: {},
        },
        resetPasswordToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        resetPasswordExpire: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        subStatus: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Free",
        },
    },
    {
        tableName: "users",
        timestamps: true,
        underscored: true,
    }
);

module.exports = User;
