'use strict'

const rp = require('request-promise-native')
const cheerio = require('cheerio')

let opts = {
	uri: 'http://www.fmylife.com/random',
	transform: body => cheerio.load(body, {normalizeWhitespace: true})
}

module.exports = function FML() {
	return new Promise((resolve, reject) => {
		rp(opts)
			.then($ => {
				let fml = $('article p.block a').first().text().trim()
				if(!fml) reject('No FML found. Service might be down.')
				else resolve(fml.trim())
			})
			.catch(err => reject('Error when finding random FML: ' + error))
		})
}
