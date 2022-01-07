function getCurrency(msg) {
    var request = require('request');

    request.get(
        process.env.URL + 'api/slaves/currency/get',
        { json: { discordUser: msg.author} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                msg.reply("Your currency amount is: **" + body + "**");
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg) {
        let command = msg.content, found = false;

        switch(command) {
            case '!wb-currency':
                found = true;
                getCurrency(msg);
                break;
        }

        return found;
    }
};