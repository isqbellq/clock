"use strict"

const secHand = document.querySelector(".seconds");
const minsHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");
const hands = document.querySelectorAll(".hand");


function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secDegrees = ((seconds / 60) * 360) + 90;
	secHand.style.transform = `rotate(${secDegrees}deg)`;

	const mins = now.getMinutes();
	const minDegrees = ((mins / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

	if (secDegrees === 90) {
		hands.forEach(hand => hand.style.transition = 'none')
	} else {
		hands.forEach(hand => hand.style.transition = '')
	}
}	

setInterval(setDate, 1000);

function removePreloadClass() {
	const body = document.querySelector("body");
	body.classList.remove("preload");
}

setTimeout(removePreloadClass, 2000);

