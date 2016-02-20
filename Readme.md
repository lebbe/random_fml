# Random FML

This module serves you a Promise of a random FML.

Usage:

```javascript
require('random_fml')().then(fml => console.log(fml))
```

Output:

> Today, my girlfriend received a scam email about her great uncle dying and leaving her money. She not only believed it, but she also used my credit card details for it. FML


The promise thus resolves to a string that is the very FML
you are looking for.


## Example irc-bot

Here is how you could use random_fml to set up a simple
irc-bot that responds to "?fml".

```javascript
const fml = require('random_fml')
const irc = require('irc')

new irc.Client('irc.some_irc_server.net', 'botnick', {
	channels: ['#some_channel']
})
.addListener('message', function (from, to, message) {
	if(/^\?fml/.test(message)) {
		fml().then(fml => client.say(to, fml))
		return
	}
})
```