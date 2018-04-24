var superagent = require('superagent');
let url = `https://gitlab.com/api/v4/projects?private_token=XoDig2CytWU2xKcgbdC8`;

function createRepository(Data) {
    superagent
        .post(url)
        .send(Data)
        .end((res, err) => {
            if (err) {
                //console.log(err)
            }
            else {
                //console.log("Repository Created");
                //console.log(res.body);
            }
        });
}
module.exports = createRepository;