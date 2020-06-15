module.export = (client, message) => {
if (message.content === PREFIX + "serveur.info") {
		message.delete(message.author)
		message.channel.send({
            embed: {
                color: 0x0e0e0e,
                title: `**¸,.•¯ Iɳϝσɾɱαƚισɳʂ Serveur ¯•.,¸**`,
                description: "\n``Prefixe du serveur :`` *A+*\n•.,¸¸,.••.,¸¸,.••.,¸¸,.••.,¸¸,.••.,¸¸,.•",
                thumbnail: {
                	url: message.guild.iconURL()
                	},
                fields: [
                    {
                    name: "\n> ``ID du serveur:``",
                    value: `*${message.guild.id}*`
                    },
                    {
                    name: "\n> ``nom du serveur:``",
                    value: `*${message.guild.name}*`
                    }
                ],
                footer: {
                    text: `by Aɱαƚҽɾαʂυ GΛПG`
                }
            }
        })
    }
});