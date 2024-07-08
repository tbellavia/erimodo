const { Events } = require('discord.js');

require('dotenv').config();
const { ROLE_MEMBRE_RECENT } = process.env;

// Add a role when a new member joins
module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {
		const welcomeRole = await member.guild.roles.fetch(ROLE_MEMBRE_RECENT);
		await member.roles.add(welcomeRole);
	},
};
