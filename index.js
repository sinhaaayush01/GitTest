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
    await createRepohub(a.Datahub,'ad95dcfc4193a72a6a1345a0a0b90f6ca3f2b8ea');
    await add('ad95dcfc4193a72a6a1345a0a0b90f6ca3f2b8ea');
    await pull('ad95dcfc4193a72a6a1345a0a0b90f6ca3f2b8ea');
    await issue('ad95dcfc4193a72a6a1345a0a0b90f6ca3f2b8ea');
    await user('ad95dcfc4193a72a6a1345a0a0b90f6ca3f2b8ea');
};

a.cr();
