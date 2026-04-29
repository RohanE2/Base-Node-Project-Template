import express from 'express';
import { ServerConfig, Logger } from './config/index.js';
import apiRoutes from './routes/index.js';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,() =>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server",{});
});