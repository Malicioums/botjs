module.export = (client, message) => {
if (message.content === PREFIX + "user.info") {
        	const membre = message.mentions.members.first() || message.member;
            message.delete(message.author)
            
            message.channel.send({
            embed: {
                color: 0x0e0e0e,
                title: `**•.,¸¸,.•¯ Iɳϝσɾɱαƚισɳʂ ¯•.,¸¸,.•**`,
                description: "\n🔰 🔰 🔰 🔰 🔰 🔰 🔰 🔰🔰\n•.,¸¸,.••.,¸¸,.••.,¸¸,.••.,¸¸,.••.,¸",
                thumbnail: {
                    url: message.author.displayAvatarURL()
                    },
                fields: [
                    {
                    name: "\n> ``ID utilisateur :``",
                    value: `*${message.author.id}*`
                    },
                    {
                    name: "\n> ``tag de l'utilisateur``",
                    value: `*${message.author.tag}*`
                    },
                    {
                    name: "\n> ``Compte Créé le :``",
                    value: moment.utc(membre.user.createdAt).format("LL")
                    },
					{
					name: "\n> ``Arrivée sur le serveur :``",
					value: moment.utc(membre.joinedAt).format("LL")  
					}          
                ],
                footer: {
                    text: `by Aɱαƚҽɾαʂυ GΛПG`
                }
            }
        })
    }
});