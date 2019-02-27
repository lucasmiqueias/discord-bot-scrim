const axios = require('axios')
const URL = `https://apextrack.azurewebsites.net/api/apex/getUserByName?search=`

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPessoas
}