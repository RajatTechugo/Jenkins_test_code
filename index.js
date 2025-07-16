import moment from "moment";
import dotenv from "dotenv";
dotenv.config();

console.log("Hello from Jenkins Node.js app");

let greeting = "Welcome to the Jenkins Node.js application!";
console.log(greeting);

let currentTime = new Date();
console.log("Current time is: " + currentTime.toLocaleTimeString());

let user = process.env.NAME || "Guest";
console.log(`Hello, ${user}!`);
console.log(`Running in ${process.env.ENVIRONMENT} environment.`);

let formattedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(`Formatted date: ${formattedDate}`);

console.log("Environment variables loaded successfully.");
console.log("Application is running smoothly.");
console.log("Thank you for using this application!");
console.log("Goodbye from Jenkins Node.js app!");
