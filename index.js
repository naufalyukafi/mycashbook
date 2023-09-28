/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import SQLite from 'react-native-sqlite-storage';

// Inisialisasi SQLite
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const databaseName = 'mycashbook.db';
export const database = SQLite.openDatabase({ name: databaseName, location: 'default' });


AppRegistry.registerComponent(appName, () => App);
