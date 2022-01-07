const request = require("request");
const prefix = "!";

function setWar(msg, player) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/kingdom/war',
        { json: { discordUser: msg.author, player: player, type: 'war'} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                msg.reply(body);
            }
        }
    );
}

function setPeace(msg, player) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/kingdom/peace',
        { json: { discordUser: msg.author, player: player, type: 'peace'} },
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

        if (cmd === 'wb-set-war') {
            if (!args[0]) return msg.reply('please @ a user');

            if (args[1]) {
                setWar(msg, args[1]);
            }
        }

        if (cmd === 'wb-set-peace') {
            if (!args[0]) return msg.reply('please @ a user');

            if (args[1]) {
                setPeace(msg, args[1]);
            }
        }
    }
};