const TOKEN = require('./auth.js');

const Discord = require('discord.js');
const client = new Discord.Client();
const TEXT_FUNCTIONALITY = require('./text.js');
const COMMAND_FUNCTIONALITY = require('./command.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}...`);
})

client.on('message', msg => {
	console.log('msg', msg);
	if (msg.content && msg.content[0] === '!') {
		COMMAND_FUNCTIONALITY(msg);
	}
	else {
		TEXT_FUNCTIONALITY(msg);
	}
});


client.login(TOKEN.token);