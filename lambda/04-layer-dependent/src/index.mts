import { Dependency } from '@acme/layer-dependency';
import chalk from 'chalk';

export const handler = async (event: {}): Promise<void> => {
  const dependency = new Dependency();
  console.log(chalk.blue('Hello world!'));
  
  // do something
}
