import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class DepartmentPermission extends Model {
    static associate(models) {
      DepartmentPermission.belongsTo(models.Department, { foreignKey: 'department_id' });
    }
  }
  DepartmentPermission.init({
    department_id: DataTypes.UUID,
    module_name: DataTypes.STRING(50),
    sub_module_name: DataTypes.STRING(100),
    is_permitted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'DepartmentPermission',
  });
  return DepartmentPermission;
};
