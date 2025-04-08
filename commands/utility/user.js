const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		const locales = {
			de: `Dieser Befehl wurde von ${interaction.user.username} ausgeführt, der/die am ${interaction.member.joinedAt} beigetreten ist.`,
			'zh-CN': `这个命令是由 ${interaction.user.username} 执行的，他/她于 ${interaction.member.joinedAt} 加入。`
		};

		await interaction.reply(locales[interaction.locale] ?? `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};
