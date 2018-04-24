var superagent = require('superagent');
function addcollab() {
    superagent.put('https://api.github.com/repos/ArvindBP/Testing/collaborators/abhi1nema2')
        .set('Content-Length', 0)
        .set('Authorization', 'Bearer 2c245f672d858d116c0e3f62015a187c4c47b8ed')
        .end(console.log('Put request completed'));
}
module.exports = addcollab;