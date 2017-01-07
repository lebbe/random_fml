'use strict'

const rp = require('request-promise-native')
const cheerio = require('cheerio')

let opts = {
	uri: 'http://www.fmylife.com/random',
	transform: body => cheerio.load(body, {normalizeWhitespace: true})
}

let cache = []

module.exports = function FML() {
	return new Promise((resolve, reject) => {
		rp(opts)
			.then($ => {
				if(cache.length === 0) {
					cache = $('article p.block a').map(function() {
						return $(this).text()
					}).get();					
				}

				if(cache.length === 0) reject('Couldt not find any FMLs. Service down?')
				else resolve(cache.pop().trim())
			})
			.catch(err => reject('Error when finding random FML: ' + error))
		})
}
