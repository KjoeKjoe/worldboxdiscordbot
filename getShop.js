function getShop(msg) {
    var request = require('request');

    request.get(
        process.env.URL + 'api/slaves/shop/get',
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
            case '!wb-shop':
                found = true;
                getShop(msg);
                break;
        }

        return found;
    }
};