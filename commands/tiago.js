module.exports = {
	name: 'tiago',
	aliases: ['dias'],
	cooldown: 10,
	description: 'Mensagem de Teste Tiago',
	execute(message, args) {
		message.channel.send('Apenas um teste');
	},
};