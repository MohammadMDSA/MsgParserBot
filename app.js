const restify = require('restify');
const builder = require('botbuilder');
const { Message, Prompts, UniversalBot, ChatConnector } = builder;
const Mongo = require('./MongoInterface');

let db = new Mongo();

const server = restify.createServer();
server.listen(4000, () => {
	console.log(`${server.name} listening to ${server.url}`);
});

let connector = new ChatConnector({
	appId: '22c1ba29-61c8-4be1-ab68-1fdd1ab627cf',
	appPassword: 'iFD1HuaBL6xbgj0GqCnzwDd'
});

server.post('/api/messages', connector.listen());

let bot = new UniversalBot(connector, [
	(session) => {
		session.send('You said:');
		session.send(session.message.text);
		
	}
]);