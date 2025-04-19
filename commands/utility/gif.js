// dai rong he 
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'utility',
	cooldown: 5,
    data: new SlashCommandBuilder()
	    .setName('gif')
	    .setDescription('Sends a random gif!')
	    .addStringOption(option =>
		    option.setName('category')
			    .setDescription('The gif category')
			    .setRequired(true)
			    .addChoices(
				    { name: 'Funny', value: 'gif_funny' },
				    { name: 'Meme', value: 'gif_meme' },
				    { name: 'Movie', value: 'gif_movie' },
			    )
        )
};