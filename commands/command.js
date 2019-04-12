const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'Devolve uma lista de todos os comandos ou dá informação sobre um comando específico',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Aqui está uma lista dos meus comandos');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nPodes também escrever \`${prefix}help [nome do comando]\` para saber o que faz um comando específico`);

        return message.author.send(data, { split: true })
	    .then(() => {
		    if (message.channel.type === 'dm') return;
		    message.reply('enviei-te uma DM com os meus comandos');
	    })
	.catch(error => {
		console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
		message.reply('Parece que não te consigo enviar uma DM. Podes verificar isso?');
	});
    }
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
    
    if (!command) {
        return message.reply('Esse não é um comando válido');
    }
    
    data.push(`**Name:** ${command.name}`);
    
    if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    if (command.description) data.push(`**Descrição:** ${command.description}`);
    if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);
    
    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
    
    message.channel.send(data, { split: true });
    }
};

