console.clear();
import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);
    server = app.listen(config.port, () => {
      console.log(`Server is running on port http://localhost:${config.port}/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }7
}

main().catch((err) => console.error('Unexpected error in main():', err));

process.on('unhandledRejection', () => {
  console.log(`unhandledRejection is detected Shutting Down..`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`uncaughtException is Detected, Shutting Down..`);
});