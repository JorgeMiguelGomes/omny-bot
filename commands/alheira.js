module.exports = {
	name: 'alheira',
	aliases: ['alheir', 'lheira', 'alhwira'],
	cooldown: 10,
	description: 'Vai uma alheira?',
	execute(message, args) {
		message.channel.send('Uma receita de alheira de Mirandela');
	},
};