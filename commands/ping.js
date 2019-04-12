module.exports = {
	name: 'ping',
	aliases: ['pang', 'peng', 'pibg'],
	cooldown: 10,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong. Pong. Pong.');
	},
};