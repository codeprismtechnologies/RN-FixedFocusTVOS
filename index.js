/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import {name as appName} from './app.json';
 import App from './src/views/app/app';
 
 if (__DEV__) {
   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
 }
 
 AppRegistry.registerComponent(appName, () => App);
 