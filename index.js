/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  @readonly
  hello() {
    return 'Hello, world!';
  }
}

const example = new Example();
console.log(example.hello());
AppRegistry.registerComponent(appName, () => App);
