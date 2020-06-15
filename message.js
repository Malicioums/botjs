module.export = (client, message) => {
client.on('message', message => {
	if (message.content == PREFIX) {
		message.delete(message.author)
		}
});