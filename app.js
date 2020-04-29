const argv = require('./config/yargs.js').argv;
const todo = require('./to-do/to-do');
const colors = require('colors/safe');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear'.green);
        let tarea = todo.crear(argv.descripcion);
        console.log(colors.bgCyan(tarea));
        break;
    case 'listar':
        let tareas = todo.getListar();
        console.log(tareas);
        console.log('==============='.yellow);
        console.log('Listado de tareas'.blue);
        console.log('==============='.yellow);

        // console.log(tareas.length);
        // for (let index = 0; index < tareas.length; index++) {
        //     const element = tareas[index];
        //     console.log(element.descripcion);
        //     console.log(element.completado);
        // }

        for (let tarea of tareas) {
            console.log(colors.blue(`Tarea: ${tarea.descripcion}`));
            console.log(colors.blue(`Estado: ${tarea.completado}`));
            console.log('==============='.yellow);
        };
        break;
    case 'actualizar':
        console.log('Actualizar'.blue);
        let actualizado = todo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borrar'.red);
        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido'.red);
        break;
};