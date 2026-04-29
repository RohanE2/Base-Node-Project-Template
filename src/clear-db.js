import { Sequelize } from 'sequelize';
import configData from './config/config.json' with { type: "json" };
const config = configData['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

async function clearDB() {
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await sequelize.query('DROP TABLE IF EXISTS SequelizeMeta');
  await sequelize.query('DROP TABLE IF EXISTS DepartmentPermissions');
  await sequelize.query('DROP TABLE IF EXISTS Users');
  await sequelize.query('DROP TABLE IF EXISTS Branches');
  await sequelize.query('DROP TABLE IF EXISTS Departments');
  await sequelize.query('DROP TABLE IF EXISTS Shifts');
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  console.log('Database cleared');
}

clearDB().then(() => process.exit(0)).catch(console.error);
