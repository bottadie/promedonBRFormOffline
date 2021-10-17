import  firebase  from "/node_modules/firebase/app"

import { getDatabase } from "/node_modules/firebase/database";




window.addEventListener('load', () => {
const database = getDatabase();
console.log(database)

})