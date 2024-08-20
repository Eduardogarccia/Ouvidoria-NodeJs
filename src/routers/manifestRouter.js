'use strict'
const express = require('express')
const manifestRouter = express.Router();
const manifestController = require('../controllers/manifestController')

//Rotas comuns
manifestRouter.route('/manifest')
//Lista todas as manifestações
.get((req, res) => manifestController.getManifest(req, res))
//Cria uma manifestação, passando: title, type, description
.post((req, res) => manifestController.createManifest(req, res))
//Atualiza uma manifestação 
.put((req, res) => manifestController.updateManifest(req, res))

manifestRouter.route('/product/name')
//Busca uma manifestação específica, passando o title pelo body
.get((req, res) => manifestController.getManifestByTitle(req, res))

manifestRouter.route('/delete/product/name')
//Deleta uma manifestação específica, passando o title pelo body
.delete((req, res) => manifestController.deleteManifestByTitle(req, res))


module.exports = manifestRouter;
