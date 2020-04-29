// viene incluida en node
const fs = require('fs');
const colors = require('colors');

let listadoTotal = [];

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoTotal);
        fs.writeFile('./db/data.json', data, (err) => {
            if (err)
                reject(err);
            else
                resolve('', 'Actualizado');
        });
    });
};

const cargarDB = () => {
    try {
        listadoTotal = require('../db/data.json');
    } catch (error) {
        listadoTotal = [];
    }
};

const crear = async(descripcion) => {
    cargarDB();
    console.log('listado: ', listadoTotal);
    let list = {
        descripcion: descripcion,
        completado: false
    };
    listadoTotal.push(list);
    await guardarDB();
    return list;
};

const getListar = () => {
    cargarDB();
    return listadoTotal;
};

const actualizar = (desc, completado = true) => {
    cargarDB();

    let indice = listadoTotal.findIndex(resp => resp.descripcion === desc);
    if (indice >= 0) {
        listadoTotal[indice].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (desc) => {
    cargarDB();
    // se puede recorrer arreglo o usar la funcion de fecha mas abajo
    // listTemp = [];
    // for (const tarea of listadoTotal) {
    //     if (tarea.descripcion !== desc) {
    //         listTemp.push(tarea);
    //     }
    // }
    // o con la funcion de fecha filter
    let listTemp = listadoTotal.filter(resp => {
        return resp.descripcion !== desc;
    });

    if (listadoTotal.length === listTemp.length) {
        return false;
    } else {
        listadoTotal = listTemp;
        guardarDB();
        return true;
    }
};


module.exports = {
    crear: crear,
    getListar: getListar,
    actualizar: actualizar,
    borrar: borrar
};