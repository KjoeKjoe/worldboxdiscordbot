const prefix = "!";

function doStuff(msg, name) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/set/nickname',
        { json: { discordUser: msg.author, nickname: name} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                msg.reply(body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg) {
        const args = msg.content.trim().split(/ +/g);
        const cmd = args[0].slice(prefix.length).toLowerCase();

        if (cmd === 'wb-set-nickname') {
            if (msg.length < 3) return msg.reply('please do a bigger nickname');

            if (args[1]) {
                doStuff(msg, args[1]);
            }
        }
    }
};