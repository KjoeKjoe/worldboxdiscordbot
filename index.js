require('dotenv').config();
const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const prefix = "!";

const addSlave = require("./addSlave");
const addLevel = require("./addLevel");
const getCurrency = require("./getCurrency");
const getShop = require("./getShop");
const forceRespawn = require("./forceRespawn");
const addTrait = require("./addTrait");
const enableFollow = require("./enableFollow");
const setRace = require("./setRace");
const setNickname = require("./setNickname");
const setWar = require("./setWar");
const addEquipment = require("./addEquipment");
const buyEvent = require("./buyEvent");
const startRevolt = require("./startRevolt");

client.once("ready", () => {
    console.log(`Logged in as!`)
})

// set message listener
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix)) return;
    // execute admin commands
    // -> if function checkAdminCmd returns false, move on to checking 'other' commands
    if ( addSlave.checkCmd(message) ) {return; }
    if ( addLevel.checkCmd(message) ) {return; }
    if ( getCurrency.checkCmd(message) ) {return; }
    if ( forceRespawn.checkCmd(message) ) {return; }
    if ( getShop.checkCmd(message) ) {return; }
    if ( addTrait.checkCmd(message) ) {return; }
    if ( enableFollow.checkCmd(message) ) {return; }
    if ( setRace.checkCmd(message) ) {return; }
    if ( setWar.checkCmd(message) ) {return; }
    if ( addEquipment.checkCmd(message) ) {return; }
    if ( startRevolt.checkCmd(message) ) {return; }
    if ( buyEvent.checkCmd(message) ) { }
});

client.login(process.env.SECRET)