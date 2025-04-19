// dai rong he 
const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    category: 'utility',
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setMaxLength(2_000)
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo into')
                .addChannelTypes(ChannelType.GuildText)
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName('ephemeral')
                .setDescription('Whether or not the echo should be ephemeral')
                .setRequired(true)
        )
};