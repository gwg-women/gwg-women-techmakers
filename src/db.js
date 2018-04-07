import Dexie from 'dexie';

const db = new Dexie('Mappa');
db.version(2).stores({ weather: '++id, temp' });

export default db;