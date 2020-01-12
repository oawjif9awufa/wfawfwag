const Discord = require('discord.js'); // makes it so it uses the discord.js dependency
const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client(); // makes it so you can refer to the bot as "bot" instead of Client

const token = 'NjY1NjgxNTg0OTk2NzQ1MjE2.XhpQOQ.lovcC49gZciwKST4LMcXOgaVH8Q'; // token

const PREFIX = 's!'; // prefix

bot.on('ready', () => {
    console.log('Bot Online');
    bot.user.setActivity('Reading cracking club', {
        type: 'PLAYING'
    });
}) // makes it say playing hideout

bot.on('message', msg => { // makes commands work

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'announce':
            if (!msg.member.roles.find(r => r.name === "Founder")) return msg.channel.send('You do not have permission to make an announcement.')
            // if a member does not have the role called "Management" it won't let them use the command
            if (!args[1]) return msg.reply('You did not specify anything to announce')
            var announcementembed = new Discord.RichEmbed() // creates an embed called announcementembed
                .setTitle('__**Announcement**__') // sets the title of the embed to announcement
                .setColor(0xDF013A) // setts the colour
                .setDescription(args.join(" ").substr(8,args.join(" ").length)) // sets the description to all of the text after the "announce" word
                .setTimestamp()
                .setFooter('your fav book club')
                msg.channel.bulkDelete(1)
                msg.channel.send(announcementembed); // it will send the announcement
            break;
        case 'clear':
                if(!msg.member.roles.find(r => r.name === "Founder")) return msg.channel.send('You do not have permission to clear the chat.')
                 // if a member does not have the role called "Management" it won't let them use the command
            if (!args[1]) return msg.reply('Please specify how many messages to delete.') // if a person doesn't use a number after doing h!clear it will say this
            msg.channel.bulkDelete(args[1]); // it will delete the args stated (25,50,100)
            break;



    }
})

bot.login(token); // logs in with the token