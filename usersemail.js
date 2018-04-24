var superagent = require('superagent');
function user() {
    superagent.get('https://api.github.com/users/ArvindBP')
        .set('Authorization', 'Bearer 2c245f672d858d116c0e3f62015a187c4c47b8ed')
        .then(function (res) {
            console.log(res.body.email);
            console.log(res.body.location);
        });
}
module.exports = user;
