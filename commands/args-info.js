module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Não me deste dados suficientes para poder executar o comando, ${message.author}! Estás a brincar comigo? :thinking:`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Dados enviados: ${args}\nTamanho: ${args.length}`);
	},
};