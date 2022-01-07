const prefix = "!";

function addLevel(msg, skill, amount) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/add/level',
        { json: { discordUser: msg.author, level: skill, amount: amount} },
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
        const levels = [
            "health",
            "diplomacy",
            "warfare",
            "stewardship",
            "intelligence",
            "attack_speed",
            "accuracy",
            "speed",
            "crit",
            "armor",
        ];
        if (cmd === 'wb-buy') {
            if (!args[0]) return msg.reply('Please specify a skill.');
            if (!args[2]) args[2] = 1;

            if (!levels.includes(args[1])) return msg.reply('Skill doesnt exist! (' +
                'health\n' +
                'diplomacy\n' +
                'warfare\n' +
                'stewardship\n' +
                'intelligence\n' +
                'attack_speed\n' +
                'accuracy\n' +
                'speed\n' +
                'crit\n' +
                'armor\n' +
                ')');

            if (args[1]) {
                addLevel(msg, args[1], args[2]);
            }
        }
    }
};