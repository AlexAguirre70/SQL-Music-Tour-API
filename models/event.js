'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Meet_greet, Set_time,Stage,Stage_events}) {
      // define association here
        Event.hasMany(Meet_greet, {
            foreign_key: "meet_greet_event_id",
            as: "event_meet_greets"
        })
        Event.hasMany(Set_time, {
          foreign_key: "set_time_event_id",
          as: "event_set_times"
      })
        Event.belongsToMany(Stage,
          {
            foreign_key: "stage_events_events_id",
            as: "Stages",
            through: Stage_events
          })
    } }

Event.init({
    event_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true},
    event_name: {
      type: DataTypes.TEXT(255),
      allowNull: false},
    event_date: {
      type:DataTypes.DATE,
    allowNull: false},
    event_start_time: {
      type:DataTypes.DATE,
      allowNull:false},
    event_end_time:{
      type:DataTypes.DATE,
      allowNull:false
  }
},
  {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps:false
  });
  return Event;
};