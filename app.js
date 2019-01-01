"use strict"

const secHand = document.querySelector(".seconds");
const minsHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");


function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secDegrees = ((seconds / 60) * 360) + 91;
	secHand.style.transform = `rotate(${secDegrees}deg)`;

	const mins = now.getMinutes();
	const minDegrees = ((mins / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours / 60) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}	

setInterval(setDate, 1000);
