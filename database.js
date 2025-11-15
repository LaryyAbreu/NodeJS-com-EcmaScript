const databasetype = {
    userType: "admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName)  {
//lógica de conexão
console.log("Conectado ao banco" + dataName);
}

async function disconnectDatabase()  {
    console.log("Desconectando do banco de dados");
} 

export {connectToDatabase, disconnectDatabase,databasetype};

// module.exports = {
//     connectToDatabase,
//     disconnectDatabase
// };