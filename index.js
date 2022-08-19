const homePoints = document.querySelector(".stats__points--home");
const guestPoints = document.querySelector(".stats__points--guest");
const buttons = document.querySelectorAll(".btn");

function addOne(targetTeam) {
	const currentScore = Number(targetTeam.textContent);
	targetTeam.textContent = currentScore + 1;
}

function addTwo(targetTeam) {
	const currentScore = Number(targetTeam.textContent);
	targetTeam.textContent = currentScore + 2;
}

function addThree(targetTeam) {
	const currentScore = Number(targetTeam.textContent);
	targetTeam.textContent = currentScore + 3;
}

/*
  Gets the multiplier value from the clicked button(eventTrigger), 
  which determines which function to run, incrementing the score by 
  the right amount, updating the UI.
*/
function updateScoreboard(e) {
	const eventTrigger = e.target;
	const scoringTeam = eventTrigger.parentElement.children[1];
	const scoreMultiplier = Number(eventTrigger.dataset.multiplier);

	if (scoreMultiplier === 1) {
		addOne(scoringTeam);
	} else if (scoreMultiplier === 2) {
		addTwo(scoringTeam);
	} else {
		addThree(scoringTeam);
	}

	highlightLeadingScore();
}

/*
  Adds a class to the score element that has a higher score, 
  removing the class from the other score element.
*/
function highlightLeadingScore() {
	const homeScore = Number(homePoints.textContent);
	const guestScore = Number(guestPoints.textContent);

	if (homeScore > guestScore) {
		homePoints.classList.add("leading");
		guestPoints.classList.remove("leading");
	} else if (guestScore > homeScore) {
		guestPoints.classList.add("leading");
		homePoints.classList.remove("leading");
	} else {
		homePoints.classList.remove("leading");
		guestPoints.classList.remove("leading");
	}
}

// Attaches click event to each button.
buttons.forEach((button) => button.addEventListener("click", updateScoreboard));
