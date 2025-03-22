const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("The app is listening in port " + PORT);
});