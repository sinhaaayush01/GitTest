var superagent = require('superagent');
function addcollab(key) {
    superagent.put('https://api.github.com/repos/ArvindBP/Testing/collaborators/abhi1nema2')
        .set('Content-Length', 0)
        .set('Authorization', `Bearer ${key}`)
        .end(console.log('Put request completed'));
}
module.exports = addcollab;