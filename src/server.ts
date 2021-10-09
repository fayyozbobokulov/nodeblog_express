import { App } from './app';
import { createConnection } from 'typeorm';
import { User } from './auth/user.entity';

process.on('uncaughtException', (err: Error) => {
  console.log('Uncought exception! Shutting down ...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Connecting to DB 

(async () => {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qwert12345',
    database: 'blog',
    entities: [User],
  }).then(() => {
    console.log('DB Connection is established');
  }).catch((err) => {
    console.error(`Unable to connect to db ${err.message}`);
  });
})()

const server = new App().app;
server.listen(server.get('port'), () => {
  console.log(`Server is running on ${server.get('port')}`);
})
  
process.on('unhandledRejection', (err: Error) => {
  console.log(err.name, err.message);
  console.log('Unhandled rejection! Shut down ...');
  process.exit(1);
});
