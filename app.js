const restify = require('restify');
const builder = require('botbuilder');
const { Message, Prompts, UniversalBot, ChatConnector } = builder;

const server = restify.createServer();
server.listen(4000, () => {
	console.log(`${server.name} listening to ${server.url}`);
});

let connector = new ChatConnector({
	appId: '',
	appPassword: ''
});

server.post('/api/messages', connector.listen());

let bot = new UniversalBot(connector, [
	// Bot code goes here...
]);