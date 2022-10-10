//Dependencies
const bands = require ('express').Router()
const db = require('../models')
const {Band} = db

//Find All Bands
bands.get('/', async (req,res)=>{
    try {
        const foundBands = await Band.findAll()
        res.status (200).json(foundBands)
    } catch (error){
        res.status(500).json(error)
    }
})
// Find a Specific Band
bands.get('/:id', async(req,res)=>{
    try {
        const foundBand = await Band.findOne({
            where: {band_id:req.params.id}
        })
        res.status(200).json(foundBand)

    } catch (error) {
        res.status(500).json(error)
    }
})

//Create a Band
bands.post('/', async(req,res)=>{
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (error){
        res.status(500).json(err)
    }
})
//Update a Band
bands.put('./:id',async(req,res)=>{
    try {
        const updatedBands= await Band.update(req.body, 
            {where: {band_id: req.params.id}})
        res.status(200).json({
            message: `Successfully Updated ${updatedBands} band(s)`
            })    
    } catch (error) {
            res.stau(500).json(err)
    }
})

// Delete a band
bands.delete ('./', async (req,res)=>{
    try {
        const deleteBands = await. Band.destroy({
            where: {band_id:req.params.id}
        })
        res.status(200).json({
            message: `Successfule Deleted the bands ${deleteBands}`
        })
    } catch (error) {
        res.status(500).json(err)
    }
})
//Export
module.exports=bands