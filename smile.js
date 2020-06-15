module.export = (client, message) => {
if (message.content == PREFIX + "smile") {
		message.delete(message.author)
		message.channel.send({
		embed: {
			color: 0x0e0e0e,
			title: `Petit Sourire`,
			description: `😁`,
			thumbnail: {
				url: message.author.displayAvatarURL()
				},
			footer: {
				text: `by Aɱαƚҽɾαʂυ GΛПG`
				}
			}
		})
	}
});
	