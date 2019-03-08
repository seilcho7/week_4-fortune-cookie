const jokesFortune = [
    "1 :Mountains aren't just funny, they are hill areas.",
    "2: Demand the establishment of the government in its rightful home at Disneyland.",
    "3: What is the leading cause of dry skin? Towels.",
    "4: Computer programmers never die, they just get lost in the processing.",
    "5: Never take advice from electrons. They are always negative.",
]
const outElement = document.querySelector('[data-output]');
const nextElement = document.querySelector('[data-next]');
const prevElement = document.querySelector('[data-prev]');
const randomElement = document.querySelector('[data-random]');

let counter = 0;

function next() {
    if (counter < jokesFortune.length) {
        outElement.textContent = jokesFortune[counter];
        counter += 1;
        console.log(counter);
    }
    else if (counter === jokesFortune.length) {
        counter = 0;
        outElement.textContent = jokesFortune[counter];
        counter += 1;
        console.log(counter);
    }
}

function prev() {
    if (counter > 0 && counter <= jokesFortune.length) {
        outElement.textContent = jokesFortune[counter - 2];
        counter -= 1;
        if (counter === 0) {
            counter = jokesFortune.length;
            outElement.textContent = jokesFortune[counter-1];
        }
        console.log(counter);
    }
}

function random() {
    counter = Math.floor(Math.random() * 5) + 1;
    console.log(counter);
    if (counter === 0) {
        outElement.textContent = jokesFortune[jokesFortune.length - 1];
    }
    else {
        outElement.textContent = jokesFortune[counter-1];
    }

}

nextElement.addEventListener('click', next);
prevElement.addEventListener('click', prev);
randomElement.addEventListener('click', random);

function respondToClick(event) {
    event.target.classList.toggle('effect');
}

nextElement.addEventListener('click', respondToClick);