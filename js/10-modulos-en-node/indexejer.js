import chalk from 'chalk';
import {suma, multiplica} from './modulos/controller.js'

const resultadoMul = multiplica(suma(1,2), suma(4,5))
// console.log(resultadoMul)

console.log(chalk.green(resultadoMul));


//PARA ESTE EJERCICIO:
// primero creamos la carpeta ejercicio, dentro de la carpeta hicimos el "npm init -y"
// luego al package.json le agregamos el "type": "module",
// luego cuando ya teniamos el import y export de las funciones listos corremos el codigo con "node nombrecodigo.js" en este caso indexejer.js
