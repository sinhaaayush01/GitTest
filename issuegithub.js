var superagent = require('superagent');
function issues() {
    superagent.post('https://api.github.com/repos/ArvindBP/Testing/issues')
        .set('Authorization', 'Bearer 2c245f672d858d116c0e3f62015a187c4c47b8ed')
        .set('Content-Type', 'application/json')
            .send(`{
            "title": "Found another buggy bug which is the buggiest of all the bugs!! ",
            "body": "I'm having an issue."
        }`)
            .end(console.log('Added an issue'));
    }
module.exports = issues;