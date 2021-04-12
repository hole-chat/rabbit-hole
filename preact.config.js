import { lstatSync, readdirSync, existsSync } from 'fs';
import path from "path"
export default (config, env, helpers) => {
  config.resolve.alias.src = env.src;

  
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
    readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);

getDirectories('src/').map((dir) => {
    config.resolve.alias[dir.replace('src/', '')] = path.resolve(__dirname, dir);
});
};
