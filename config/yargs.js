const description = { demand: true, alias: 'd', desc: 'Descripción de la tarea' };
const completo = { alias: 'c', default: true, desc: 'marca/ desmarca tarea como completado' };

const argv = require('yargs')
    .command('listar', 'Listar tareas')
    .command('crear', 'Genera tarea', { descripcion: description })
    .command('actualizar', 'Actualiza tarea', { descripcion: description, completado: completo })
    .command('borrar', 'Borrar tarea', { descripcion: description })
    .help()
    .argv;

module.exports = {
    argv: argv
};