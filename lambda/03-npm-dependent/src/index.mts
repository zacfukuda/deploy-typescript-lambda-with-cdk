import chalk from 'chalk';

export const handler = async (event: {}): Promise<void> => {
  console.log(chalk.blue('Hello world!'));
}
