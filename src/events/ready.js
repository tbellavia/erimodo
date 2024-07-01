const { Events } = require('discord.js');

// Checking Bot operation in the terminal
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Prêt! Inscrit en tant que : ${client.user.tag}`);
	},
};
