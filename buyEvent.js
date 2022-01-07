const prefix = "!";

function addLevel(msg, event, amount) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/event/cmd/store',
        { json: { discordUser: msg.author, event: event, amount: amount} },
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
        const events = [
            "meteor",
            "lightning",
            "earthquake",
            "rain",
            "tornado",
            "mad-thoughts",
            "evil-mage",
            "greg",
            "necromancer"
        ];
        if (cmd === 'wb-spawn') {
            if (!args[0]) return msg.reply('Please specify an event.');

            if (!events.includes(args[1])) return msg.reply('Event doesnt exists, check shop or website.');
            if (!args[2]) args[2] = 1;

            if (args[1]) {
                addLevel(msg, args[1], args[2]);
            }
        }
    }
};