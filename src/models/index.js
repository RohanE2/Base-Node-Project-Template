import Sequelize, { DataTypes } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = process.env.NODE_ENV || 'development';

import configData from '../config/config.json' with { type: "json" };
const config = configData[env];

import BranchModel from './branch.js';
import DepartmentModel from './department.js';
import ShiftModel from './shift.js';
import UserModel from './user.js';
import DepartmentPermissionModel from './departmentpermission.js';

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {
  Branch: BranchModel(sequelize, DataTypes),
  Department: DepartmentModel(sequelize, DataTypes),
  Shift: ShiftModel(sequelize, DataTypes),
  User: UserModel(sequelize, DataTypes),
  DepartmentPermission: DepartmentPermissionModel(sequelize, DataTypes)
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
