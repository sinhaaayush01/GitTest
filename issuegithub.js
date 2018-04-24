var superagent = require('superagent');
function issues(key) {
    superagent.post('https://api.github.com/repos/ArvindBP/Testing/issues')
        .set('Authorization', `Bearer ${key}` )
        .set('Content-Type', 'application/json')
            .send(`{
            "title": "Found another buggy bug which is the buggiest of all the bugs!! ",
            "body": "I'm having an issue."
        }`)
            .end(console.log('Added an issue'));
    }
module.exports = issues;