import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from "config";

const mongoConfig = config.get('mongodb');
dotenv.config();

const options = {
    autoIndex: true,
    maxPoolSize: 100,
    serverSelectionTimeoutMS: 15000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4
};

const uri = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}?authSource=${mongoConfig.authSource}`;

mongoose.connect(uri, options);

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

export default mongoose;
