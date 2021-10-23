const { response, request } = require('express');


const usuarioGet = (req = request, res = response) => {

    const {q ='', id = 0, token, user =''} = req.query; //son los querys que vienne en el URL

    res.json({
        ok: true,
        msg: 'get World - Controlador',
        querys: q,
        id, 
        token,
        user
    });
  }


const usuarioPost = (req, res= response) => {

    const body = req.body();

    res.json({
        ok: true,
        msg: 'post World - controlador',
        body
    });
}

const usuarioPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put World - controlador',
        id
    });
}

const usuarioDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete World - controlador'
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut, 
    usuarioDelete
}