import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Branch, { foreignKey: 'branch_id' });
      User.belongsTo(models.Department, { foreignKey: 'department_id' });
      User.belongsTo(models.Shift, { foreignKey: 'shift_id' });
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { notEmpty: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    contact: DataTypes.STRING,
    shift_id: DataTypes.UUID,
    image: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    employee_id: DataTypes.STRING,
    joining_date: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    qualification: DataTypes.STRING,
    specialization: DataTypes.STRING,
    department_id: DataTypes.UUID,
    branch_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
