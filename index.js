// import moment from "moment";
import dotenv from "dotenv";
dotenv.config();

let greeting = "Welcome to the Jenkins Node.js application!";
console.log(greeting);

let currentTime = new Date();
console.log("Current time is: " + currentTime.toLocaleTimeString());

let user = process.env.NAME || "Guest";
console.log(`Hello, ${user}!`);
console.log(`Running in ${process.env.ENVIRONMENT} environment.`);

let formattedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(`Formatted date: ${formattedDate}`);

console.log("Done successfully.");
