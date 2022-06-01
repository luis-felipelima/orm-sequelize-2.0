module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Niveis', [
      {
        dresc_nivel: 'básico',
        createdAt: new Date(),
        updatedAt: new Date()			
      },
      {
        dresc_nivel: 'intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dresc_nivel: 'avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Niveis', null, {})
  }
}
