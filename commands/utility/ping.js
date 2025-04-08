const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
	category: 'utility',
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Secret Pong!', flags: MessageFlags.Ephemeral });
	},
};
