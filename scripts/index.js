const jokesFortune = [
    "Mountains aren't just funny, they are hill areas.",
    "Demand the establishment of the government in its rightful home at Disneyland.",
    "What is the leading cause of dry skin? Towels.",
    "Computer programmers never die, they just get lost in the processing.",
    "Never take advice from electrons. They are always negative.",
]
const outElement = document.querySelector('[data-output]');
const inElement = document.querySelector('[data-input]');

let counter = 0;

function tell() {
    if (counter < jokesFortune.length) {
        outElement.textContent = jokesFortune[counter];
    }
    counter += 1;
    if (counter === jokesFortune.length) {
        counter = 0;
    }
}

inElement.addEventListener('click', tell);

function respondToClick(event) {
    event.target.classList.toggle('effect');
}

inElement.addEventListener('click', respondToClick);