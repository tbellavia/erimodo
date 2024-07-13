const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('messages-delete')
		.setDescription('Suppression de messages')
		.addIntegerOption(option =>
			option
				.setName('messages-number')
				.setDescription('nombre de messages à supprimer')
				.setRequired(true)
				.setMinValue(2)
				.setMaxValue(100),
		)
		.addUserOption((option) =>
			option
				.setName('target')
				.setDescription('Messages à supprimer d\'un membre spécifique'),
		),

	async execute(interaction) {
		// Retrieve number of messages and target
		const number = interaction.options.getInteger('messages-number');
		const memberTarget = interaction.options.getUser('target');
		try {
			if (interaction.member.permissions.has(PermissionFlagsBits.manageMessages)) {
				const messagesToDelete = [];
				const channelMessages = await interaction.channel.messages.fetch({ limit: number });
				if (memberTarget) {
					channelMessages.forEach((msg) => {
						if (msg.author.id === memberTarget.id) {
							messagesToDelete.push(msg);
						}
					});
				}
				else {
					channelMessages.forEach((msg) => {
						messagesToDelete.push(msg);
					});
				}

				// The true argument allows messages older than 2 weeks to be deleted, false does not.
				await interaction.channel.bulkDelete(messagesToDelete, true);
				await interaction.reply({ content: `Suppression de ${number} messages effectuées !`, ephemeral: true });
			}
 			else {
				await interaction.reply({ content: 'Vous n\'avez pas la permission d\'utiliser cette commande...', ephemeral: true });
			}
		}
		 catch (error) {
			console.log(error);
		}
	},
};
