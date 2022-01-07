const prefix = "!";

function addEquipment(msg, material, type) {
    var request = require('request');

    request.post(
        process.env.URL + 'api/slaves/add/equipment',
        { json: { discordUser: msg.author, material: material, equipment: type} },
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
        const materials = [
            "leather",
            "copper",
            "bronze",
            "silver",
            "iron",
            "steel",
            "mythril",
            "adamantine",
        ];
        if (cmd === 'wb-buy-boots') {
            if (!args[0]) return msg.reply('Please specify a material.');

            if (!materials.includes(args[1])) return msg.reply('Material doesnt exist! (\n' +
                "leather \n" +
                "copper \n" +
                "bronze \n" +
                "silver \n" +
                "iron \n" +
                "steel \n" +
                "mythril \n" +
                "adamantine \n" +
                ')');

            if (args[1]) {
                addEquipment(msg, args[1], "boots");
            }
        }
        if (cmd === 'wb-buy-ring') {
            if (!args[0]) return msg.reply('Please specify a material.');

            if (!materials.includes(args[1])) return msg.reply('Material doesnt exist! (\n' +
               // "leather \n" +
                "copper \n" +
                "bronze \n" +
                "silver \n" +
                "iron \n" +
                "steel \n" +
                "mythril \n" +
                "adamantine \n" +
                ')');

            if (args[1]) {
                addEquipment(msg, args[1], "ring");
            }
        }
        if (cmd === 'wb-buy-amulet') {
            if (!args[0]) return msg.reply('Please specify a material.');

            if (!materials.includes(args[1])) return msg.reply('Material doesnt exist! (\n' +
               // "leather \n" +
                "copper \n" +
                "bronze \n" +
                "silver \n" +
                "iron \n" +
                "steel \n" +
                "mythril \n" +
                "adamantine \n" +
                ')');

            if (args[1]) {
                addEquipment(msg, args[1], "amulet");
            }
        }
        if (cmd === 'wb-buy-helmet') {
            if (!args[0]) return msg.reply('Please specify a material.');

            if (!materials.includes(args[1])) return msg.reply('Material doesnt exist! (\n' +
                "leather \n" +
                "copper \n" +
                "bronze \n" +
                "silver \n" +
                "iron \n" +
                "steel \n" +
                "mythril \n" +
                "adamantine \n" +
                ')');

            if (args[1]) {
                addEquipment(msg, args[1], "helmet");
            }
        }
        if (cmd === 'wb-buy-armor') {
            if (!args[0]) return msg.reply('Please specify a material.');

            if (!materials.includes(args[1])) return msg.reply('Material doesnt exist! (\n' +
                "leather \n" +
                "copper \n" +
                "bronze \n" +
                "silver \n" +
                "iron \n" +
                "steel \n" +
                "mythril \n" +
                "adamantine \n" +
                ')');

            if (args[1]) {
                addEquipment(msg, args[1], "bodyarmor");
            }
        }
    }
};