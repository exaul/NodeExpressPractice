// Usando File sistem
const fs = require("fs");
const username = "Exaul";
const userlast = "ES guapo";
const userfull =username + '  '+ userlast  
//"datos de prueba:" + username
// Template string
// : Alt + 96

fs.writeFile("new-test-data.txt", `Nombre de usuario: ${userfull}`, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Archivo creado satisfactoriamente");
});



//primera version con solo un nombre 

// fs.writeFile("test-data.txt", `Nombre de Usuario: ${username}`, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Archivo creado sactifactoriamente");
// });
