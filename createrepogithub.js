var superagent = require('superagent');
function createHubRepository(Datahub) {
    // console.log(Datahub)
superagent.post('https://api.github.com/user/repos')
    .set('Content-Type','application/json')
    .set('Authorization','Bearer 2c245f672d858d116c0e3f62015a187c4c47b8ed')
    .send(`{
        "name": "Test Repository",
        "description": "This is your first repository",
        "homepage": "https://github.com",
        "private": false,
        "has_issues": true,
        "has_projects": true,
        "has_wiki": true
   }`)
    .end(console.log('Post request made'));
}
module.exports = createHubRepository;