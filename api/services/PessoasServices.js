const database = require('../models')
const Services = require('./Services.js')

class PessoasServices extends Services {
  constructor(){
    super('Pessoas')
    this.matriculas = new Services('Matriculas')
  }

  async pegaRegistrosAtivos(where = {}){
    return database[this.nomeDoModelo].findAll({where: { ...where }})
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo]
      .scope('todos')
      .findAll({where: { ...where }})
  }

  async cancelaPessoaEMatricula(estudanteId) {
    return database.sequelize.transaction(async transacao => {
      await super.atualizaRegistro({ ativo: 0 }, estudanteId, { transaction: transacao })
      await this.matriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao })
    })
  }
}

module.exports = PessoasServices