import { DataTypes } from 'sequelize'
import { sequelize } from "../../connectPgClient";

const UserModel = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sessionId: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

export default UserModel;
