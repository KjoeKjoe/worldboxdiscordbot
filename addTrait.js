const prefix = "!";

function addTrait(msg, skill) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/add/trait',
        { json: { discordUser: msg.author, trait: skill} },
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
            "agile",
            "ambitious",
            "attractive",
            "blessed",
            "boat",
            "content",
            "deceitful",
            "eagle_eyed",
            "energized",
            "fast",
            "genius",
            "giant",
            "honest",
            "immune",
            "kingslayer",
            "lucky",
            "mageslayer",
            "dragonslayer",
            "miner",
            "pacifist",
            "pyromaniac",
            "regeneration",
            "savage",
            "skin_burns",
            "strong",
            "tough",
            "veteran",
            "weightless",
            "wise",
            "plague",
            "charged",
            "immortal",
        ];
        if (cmd === 'wb-buy-trait') {
            if (!args[0]) return msg.reply('Please specify a trait.');

            if (!levels.includes(args[1])) return msg.reply('Trait doesnt exist! (' +
                '"agile",\n' +
                '"ambitious",\n' +
                '"attractive",\n' +
                '"lessed",\n' +
                '"boat",\n' +
                '"content",\n' +
                '"deceitful",\n' +
                '"eagle_eyed",\n' +
                '"energized",\n' +
                '"fast",\n' +
                '"genius",\n' +
                '"giant",\n' +
                '"honest",\n' +
                '"immune",\n' +
                '"kingslayer",\n' +
                '"lucky",\n' +
                '"mageslayer",\n' +
                '"dragonslayer",\n' +
                '"miner",\n' +
                '"pacifist",\n' +
                '"pyromaniac",\n' +
                '"regeneration",\n' +
                '"savage",\n' +
                '"skin_burns",\n' +
                '"strong",\n' +
                '"tough",\n' +
                '"veteran",\n' +
                '"weightless",\n' +
                '"wise",\n' +
                '"plague",\n' +
                '"charged",\n' +
                '"immortal",' +
                ')');

            if (args[1]) {
                addTrait(msg, args[1]);
            }
        }
    }
};