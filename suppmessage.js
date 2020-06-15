module.export = (client, message) => {
if (message.content === PREFIX + "supp.message") {
		message.delete(message.author)
		message.channel.send({
		embed: {
			color: 0x0e0e0e,
			title: `**⚠️ Alerte**`,
			description : `*Commande en développement*`,
			footer: {
				text: `bye Aɱαƚҽɾαʂυ GΛПG`
				}
			}
		})
	}
});