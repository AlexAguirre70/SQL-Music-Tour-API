'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init({
    set_time_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement:true},
    set_time_event_id:{ 
      type:DataTypes.INTEGER,
      allowNull:false},
    set_time_stage_id: {
        type:DataTypes.INTEGER,
        allowNull:false},
    set_time_band_id: {
      type:DataTypes.INTEGER,
      allowNull:false},
    set_time_start: {
      type:DataTypes.DATE,
      allowNull:false},
    set_time_end: {
      type:DataTypes.DATE,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'set_time',
    timestamps:false
  });
  return Set_time;
};