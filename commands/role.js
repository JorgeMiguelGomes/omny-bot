module.exports = {
	name: 'bar',
	description: 'BAR!',
	execute(message, args) {
		message.channel.send('BAR ABERTO!!!!');
	},
};