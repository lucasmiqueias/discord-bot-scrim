function getPlayer() {
	return new Promise(function dataPromise(data) {
		return data({
			nome: message.author.username
		})
	})
}