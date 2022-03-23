const Plant = require('../models/plant')

const createPlant = async (req, res) => {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant,
        })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = {
    createPlant
}