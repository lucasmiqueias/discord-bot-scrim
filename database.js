const { readFile } = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(readFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = ''
  }
  async listar(user) {
  }
}

module.exports = new Database()