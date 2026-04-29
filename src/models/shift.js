import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Shift extends Model {
    static associate(models) {
      Shift.hasMany(models.User, { foreignKey: 'shift_id' });
    }
  }
  Shift.init({
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
    modelName: 'Shift',
  });
  return Shift;
};
