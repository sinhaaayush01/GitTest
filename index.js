var createRepo = require('./createrepo');
var createRepohub = require('./createrepogithub');
var add = require('./addcollaboraterhub');
var pull = require('./pullrequest');
var issue = require('./issuegithub');
var user = require('./usersemail');
function Git(name, user_id, visi) {
    this.name = name;
    this.user_id = user_id;
    this.visi = visi;
    this.data={
        "name": this.name,
        "user_id": this.user_id,
        "visibility": this.visi
    }
    
    this.Datahub = `{
        "name": ${this.name},
        "description": "This is your first repository",
        "private": "false",
        "has_issues": true,
        "has_projects": true,
        "has_wiki": true
    }`
}
var a = new Git('Test Repository', '2141012', 'private');
Git.prototype.cr = async function () {
    console.log(a.data);
    await createRepo(a.data);
    await createRepohub(a.Datahub);
    await add();
    await pull();
    await issue();
    await user();
};

a.cr();
