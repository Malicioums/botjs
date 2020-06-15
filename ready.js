module.export = (client) => {
client.on('ready', () => {
	console.log("----- Fiche Technique ----- \n\n-", client.user.username)
	console.log("\n-", client.user.id, "\n")
	client.user.setStatus('online');
	client.user.setActivity('être développé');
});