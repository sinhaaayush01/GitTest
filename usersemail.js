var superagent = require('superagent');
function user(key) {
    superagent.get('https://api.github.com/users/ArvindBP')
        .set('Authorization', `Bearer ${key}`)
        .then(function (res) {
            console.log(res.body.email);
            console.log(res.body.location);
        });
}
module.exports = user;
