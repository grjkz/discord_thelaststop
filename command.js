/*
Commands
!roll 						-rolls a d20
!roll 3d20+3 			-rolls 3d20 and adds 3 to the result
!roll 3d40+3b2 		-rolls 3d20, adds 3, then takes the best 2
!roll d%					-rolls a percentage die
 */

const roll = new (require('roll'))();
const syntaxWrap = require('./syntaxWrap.js');

let COMMAND_FUNCTIONALITY = (msg) => {
	if (msg.content && msg.content[0] === '!') {
		handleCommand(msg);
	}
}

function handleCommand(msg) {
	const MESSAGE_ARGS = msg.content.split(' ');
	if (MESSAGE_ARGS[0] === '!roll') {
		handleDiceRoll(msg, MESSAGE_ARGS);
	}
	else if (true) {
		msg.reply(`invalid command`);
	}
}

function handleDiceRoll(msg, MESSAGE_ARGS) {
	if (roll.validate(MESSAGE_ARGS[1])) {
		if (MESSAGE_ARGS.length === 1) {
			msg.channel.send(`${msg.author.username} rolled ${roll.roll('d20').result}`);
		}
		else {
			console.log(MESSAGE_ARGS[1]);
			const ROLL_RESULT = roll.roll(MESSAGE_ARGS[1])
			// console.log('result', ROLL_RESULT);
			// console.log('----------');
			msg.channel.send(
				`${msg.author.username}` +
				syntaxWrap('css',
					`Rolled: ${ROLL_RESULT.rolled.join(`, `)}\n` +
					`Result: ${ROLL_RESULT.result}`
				)
			);
		}
	}
	else {
		msg.reply(`${MESSAGE_ARGS[1]} is an invalid input.`);
	}
}


module.exports = COMMAND_FUNCTIONALITY;