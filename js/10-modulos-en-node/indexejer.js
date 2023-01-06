import chalk from 'chalk';
import {suma, multiplica} from './modulos/controller.js'

const resultadoMul = multiplica(suma(1,2), suma(4,5))
// console.log(resultadoMul)

console.log(chalk.green(resultadoMul));
