import sequelize from "../config/dbConfig.js";
import { DataTypes } from "sequelize";

const Store = sequelize.define('stores', {
    'store_id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'store_name': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'store_email': {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    'owner_name': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'phone_number': {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [10, 15]
        }
    },
    'password_hash': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'otp': {
        type: DataTypes.STRING
    },
    'otp_expiration_time': {
        type: DataTypes.DATE
    },
    'address': {
        type: DataTypes.STRING
    },
    'latitude': {
        type: DataTypes.DECIMAL(10, 8)
    },
    'longitude': {
        type: DataTypes.DECIMAL(11, 8)
    },
    'category': {
        type: DataTypes.STRING(50)
    },
    'rating': {
        type: DataTypes.DECIMAL(2, 1)
    },
    'opening_hours': {
        type: DataTypes.STRING(100)
    },
    'status': {
        type: DataTypes.ENUM('active', 'inactive')
    },
    'created_at': {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    'updated_at': {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'stores',
    timestamps: false,
});

export default Store;
