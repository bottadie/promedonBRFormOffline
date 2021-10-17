
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js'

import { collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';
import { db } from '/firebase.js';



window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
    const dba = getDatabase();
    console.log(db)
    foo()
  
    async function foo() {
        db.collection('Notas')
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data())
console.log(doc)        })
    }




  });

