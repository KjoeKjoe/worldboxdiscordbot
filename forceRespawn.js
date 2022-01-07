const request = require("request");

function respawnSlave(msg) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/respawn',
        { json: { discordUser: msg.author } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                msg.reply(body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg) {
        let command = msg.content, found = false;

        switch(command) {
            case '!wb-respawn':
                found = true;
                respawnSlave(msg);
                break;
        }

        return found;
    }
};