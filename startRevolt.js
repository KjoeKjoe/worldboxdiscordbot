function store(msg) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/revolt/store',
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
            case '!wb-revolt':
                found = true;
                store(msg);
                break;
        }

        return found;
    }
};