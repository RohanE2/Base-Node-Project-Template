import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.User, { foreignKey: 'department_id' });
      Department.hasMany(models.DepartmentPermission, { foreignKey: 'department_id' });
    }
  }
  Department.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};
