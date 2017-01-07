'use strict'

const rp = require('request-promise-native')
const cheerio = require('cheerio')

let opts = {
	uri: 'http://www.fmylife.com/random',
	transform: body => cheerio.load(body)
}

module.exports = function FML() {
	return new Promise((resolve, reject) => {
		rp(opts)
			.then($ => {
				let fml = $('.post.article[id] p').first().text().trim()
				if(!fml) reject('No FML found. Service might be down.')
				else resolve(fml.trim())
			})
			.catch(err => reject('Error when finding random FML: ' + error))
		})
}
