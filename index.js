// JG BOT version 0.2

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return message.channel.send(`Ainda não conheço esse comando ${msg.author}`); 
    if (command.args && !args.lenght) {
        return message.channel.send (`Não me deste os dados suficientes para trabalhar ${message.author} :thinking:`);
    }
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Aguenta aí os cavalos e espera ${timeLeft.toFixed(1)} segundos antes de usares o comando \`${command.name}\` outra vez`);
        }
    }
    timestamps.set(message.author.id, now); 
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Aconteceu um erro ao processar o comando :thinking: Já despedi o estagiário!');
    }

    
	
});

client.login(token);