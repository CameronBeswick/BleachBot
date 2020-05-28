const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!clean') {
		
		const fetch = require('node-fetch');
		let url = "https://www.reddit.com/r/eyebleach.json";
		let settings = { method: "Get" };

		fetch(url, settings)
			.then(res => res.json())
			.then((json) => {
				let random = Math.floor((Math.random() * 10));
				let post = json['data']['children'][random]['data']['url'];
				message.channel.send(post);
			});
	}
});

client.login(auth['token']);
	