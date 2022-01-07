function follow(msg) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/enable/follow',
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
            case '!wb-watch':
                found = true;
                follow(msg);
                break;
        }

        return found;
    }
};