//requireds
// const fs = require('fs');
//const fs = require('express)<- no nativo, un paquete expansivo
//const fs = require('./fs')<-- los que creamos, deben estar en la ruta seleccionada


const argv = require('./config/yargs').argv;
const colors = require('colors');


// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },

//         limite: {
//             alias: 'l',
//             default: 10
//         }

//     })

// .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },

//         limite: {
//             alias: 'l',
//             default: 10
//         }

//     })
//     .help()
//     .argv;



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {


    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');



}



// console.log(argv);

// let base = '7';

// console.log(process.argv);
let argv2 = process.argv;

// console.log(argv.base);
// console.log('limite ', argv.limite);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);