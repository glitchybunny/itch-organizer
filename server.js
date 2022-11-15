import express from 'express';

const app = express();
const PORT = process.env.PORT || 34567;

const client_id = process.env.ITCH_CLIENT_ID;
const client_secret = process.env.ITCH_CLIENT_SECRET;

app.get('/', (req, res) => {
	res.send("<a href='/login'>Login with Itch.io</a>");
})

app.get('/login', (req, res) => {
	const url = `https://itch.io/user/oauth?client_id=${client_id}&scope=profile%3Ame&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A34567%2Flogin%2Fcallback`;
	res.redirect(url);
})

app.get('/login/callback', (req, res) => {
	res.send("Logged in!");
})

app.listen(PORT, () => {
	console.log(`Listening on localhost:${PORT}`);
})
