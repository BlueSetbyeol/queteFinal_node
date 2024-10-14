// server.js
import "dotenv/config";
import * as cowsay from "cowsay"

console.log(
	cowsay.say({
		text: `I'm ${process.env.NAME} from ${process.env.CAMPUS}`,
		e: "oO",
		T: "U ",
	}),
);
