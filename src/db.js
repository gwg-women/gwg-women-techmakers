import Dexie from 'dexie';

const db = new Dexie('Mappa');
db.version(1).stores({weather: '++id, temp', city: '++id, city'});


export default db;