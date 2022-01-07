const prefix = "!";

function addTrait(msg, race) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/set/race',
        { json: { discordUser: msg.author, race: race} },
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
        const races = [
            "human",
            "elf",
            "orc",
            "dwarf",
        ];
        if (cmd === 'wb-set-race') {
            if (!args[0]) return msg.reply('Please specify a race.');

            if (!races.includes(args[1])) return msg.reply('Race doesnt exist! (' +
                "human \n" +
                "elf \n" +
                "orc \n" +
                "dwarf \n" +
                ')');

            if (args[1]) {
                addTrait(msg, args[1]);
            }
        }
    }
};