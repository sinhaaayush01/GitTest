var superagent = require('superagent');
function pullreq() {
    superagent.post('https://api.github.com/repos/ArvindBP/Testing/pulls')
        .set('Authorization', 'Bearer 2c245f672d858d116c0e3f62015a187c4c47b8ed')
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