let TEXT_FUNCTIONALITY = (msg) => {
	if (msg.content === 'ping') {
		msg.reply('ping recieved');
	}
}

module.exports = TEXT_FUNCTIONALITY;