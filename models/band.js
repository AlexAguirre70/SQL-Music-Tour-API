//DEPENDENCIES
const { Sequelize, DataTypes ,Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//Model
class Band extends Model{}

//
Band.init ({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    band_name:{
        type: DataTypes.STRING,
        allowNull: false
     },
     band_booked :{
        type: DataTypes.BOOLEAN
     },
     band_event_id: {
        type: DataTypes.INTEGER
     },
     band_stage_id:{
        type:DataTypes.INTEGER
     },
     band_s_schdeule_id:{
        type:DataTypes.INTEGER
     },
     band_g_schedule_id:{
        type:DataTypes.INTEGER
     }
},{
    sequelize,
    modelName: 'Band',
    tableName:'bands'
})

//Export
module.exports - Band