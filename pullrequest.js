var superagent = require('superagent');
function pullreq(key) {
    superagent.post('https://api.github.com/repos/ArvindBP/Testing/pulls')
        .set('Authorization', `Bearer ${key}` )
        .set('Content-Type', 'application/json')
        .send(`{
  		"title": "TestSL",
  		"body": "Please pull this in!",
  		"head": "Check",
  		"base": "master"
	}`)
        .end(console.log('Added a pull request'));
}
module.exports = pullreq;