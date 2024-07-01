const { Events } = require('discord.js');

// Add a role when a new member joins
module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {
		const welcomeRole = await member.guild.roles.fetch('1184218380509659226');
		await member.roles.add(welcomeRole);
	},
};
