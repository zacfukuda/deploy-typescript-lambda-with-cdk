import { helloWorld } from '@acme/layer';
import chalk from 'chalk';

export const handler = async () => {
  helloWorld();
  console.log(chalk.blue('hello, world'));  
}
