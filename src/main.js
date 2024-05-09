require('dotenv').config();
const { DISCORD_TOKEN } = process.env;
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
	],
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Prêt ! Enregistré entant que ${readyClient.user.tag}`);
});

client.login(DISCORD_TOKEN);

