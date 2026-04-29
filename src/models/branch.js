import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Branch extends Model {
    static associate(models) {
      Branch.hasMany(models.User, { foreignKey: 'branch_id' });
    }
  }
  Branch.init({
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
    modelName: 'Branch',
  });
  return Branch;
};
