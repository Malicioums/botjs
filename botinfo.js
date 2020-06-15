module.export = (client, message) => {
if (message.content === PREFIX + "info.bot") {
		message.delete(message.author)
		message.channel.send("```×										Aɱαƚҽɾαʂυ										×```")
		message.channel.send("> ``[ 🔥 ]``		**__Nom du bot :__**  " + client.user.username + "\n> \n> ``[ 🔥 ]`` **__ID :__** " + client.user.id +"\n> \n> ``[ 🔥 ]`` **__Tag du bot :__** " + client.user.tag + "\n> \n> ``[ 🔥 ]`` **__Créateur du bot :__** *Sam&co*\n> .")
		message.channel.send("```×									×××××××××××××									×```")
		}
});