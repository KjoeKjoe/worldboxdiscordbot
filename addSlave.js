const request = require("request");

function addSlave(msg) {
    msg.reply("Going to add you in the world!")
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/store',
        { json: { discordUser: msg.author } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg) {
        let command = msg.content, found = false;

        switch(command) {
            case '!wb-add':
                found = true;
                addSlave(msg);
                break;
        }

        return found;
    }
};