'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class AlgoliaSearchProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Adonis/Addons/AlgoliaSearch', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const AlgoliaSearch = require('../src/AlgoliaSearch')

      return new AlgoliaSearch(Config)
    })

    this.app.alias('Adonis/Addons/AlgoliaSearch', 'AlgoliaSearch')
  }
}

module.exports = AlgoliaSearchProvider
