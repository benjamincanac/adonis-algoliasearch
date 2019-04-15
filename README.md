# Adonis AlgoliaSearch

> This package is a wrapper on top of [algoliasearch-client-javascript](https://github.com/algolia/algoliasearch-client-javascript).

[![npm version](https://img.shields.io/npm/v/adonis-algoliasearch.svg)](https://www.npmjs.com/package/adonis-algoliasearch)
[![license](https://img.shields.io/github/license/adonis-algoliasearch/algoliasearch.svg)](https://github.com/cmty/adonis-algoliasearch/blob/master/LICENSE.md)

## Getting Started

Install the package using the `adonis` CLI.

```bash
> adonis install adonis-algoliasearch
```

Follow instructions that are displayed ([or read them here](https://github.com/cmty/adonis-algoliasearch/blob/master/instructions.md)).

## Configure

Register the provider in `start/app.js`:

```javascript
const providers = [
  ...
  'adonis-algoliasearch/providers/AlgoliaSearchProvider'
]
```

Add a configuration file in `config/algolia.js`. For example:

```javascript
'use strict'

const Env = use('Env')

module.exports = {
  id: Env.get('ALGOLIA_APP_ID'),
  index: Env.get('ALGOLIA_APP_INDEX'),
  apiKey: Env.get('ALGOLIA_API_KEY')
}
```

## Usage

```javascript
const AlgoliaSearch = use('AlgoliaSearch')

const index = AlgoliaSearch.index('projects')
```

The index returned is the `client.initIndex` of `algoliasearch`, you have then access to all methods.

## Thanks

Special thanks to the creator(s) of [AdonisJS](http://adonisjs.com/) for creating such a great framework.

## License

[MIT](https://github.com/cmty/adonis-algoliasearch/blob/master/LICENSE.md)
