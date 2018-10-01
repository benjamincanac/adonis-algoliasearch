'use strict'

const algoliasearch = require('algoliasearch')

class AlgoliaSearch {
  constructor (Config) {
    this.Config = Config

    this._config = Config.get('algolia')
    this._client = algoliasearch(this._config.id, this._config.apiKey)
    this._indices = {}
  }

  /**
   * @param {*} name Name of the index
   * @returns New or cached instance of index
   */
  index (name) {
    if (this._indices[name]) return this._indices[name]

    const index = this._client.initIndex(`${this._config.index}-${name}`)

    this._indices[name] = index

    return this._indices[name]
  }
}

module.exports = AlgoliaSearch
