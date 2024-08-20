
const ManifestModel = require('../models/manifestModel')
module.exports= {
    getManifest: (req, res) => {
        ManifestModel.find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({message: "Não foi possível recuperar as manifestações"})
        })
    },
    deleteManifestByTitle: async (req, res) => {
        try {
            await ManifestModel.deleteOne({title:req.body.title})
            res.status(200).send({message: "manifestação removida com sucesso!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível remover a manifestação"})
        }
    },
    getManifestByTitle: async (req, res) => {
        try {
            const result = await ManifestModel.findOne({title:req.body.title}).select(["-__v", "-_id"])
            res.status(200).send(result)
        } catch (err) {
            res.status(500).json({message: "Não foi possível recuperar a manifestação no momento"})
        }
    },
    updateManifest: async (req, res) => { 
               try {
            const result = await ManifestModel.updateOne({title: req.body.title}, req.body)
            res.status(200).send({message: "manifestação atualizado com sucesso!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível atualizar a manifestação"})
        }
    },
    createManifest: async (req, res) => {
        try {
            const result = await ManifestModel.create(req.body)
            res.status(201).json({message: `A manifestação ${result._doc.title} foi criada com sucesso!`})
        } catch (err) {
            res.status(500).json({message: `Não foi possível criar a manifestação ${req.body.title}`})

        }
    }
}