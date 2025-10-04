console.log("started pack-man");


let displayscore = document.querySelector(".level");
const width = 28;


let grid = document.querySelector(".grid");

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 5, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 5, 3, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

const sq = [];


function boardmaking() {
    for (let i = 0; i < layout.length; i++) {
        let square = document.createElement("div");
        grid.appendChild(square);
        sq.push(square);

        if (layout[i] === 0) {
            sq[i].classList.add("dot");
        }
        else if (layout[i] === 1) {
            sq[i].classList.add("wall");
        }
        else if (layout[i] === 2) {
            sq[i].classList.add("ghost");
        }
        else if (layout[i] === 3) {
            sq[i].classList.add("powerpoint");
        }
        else if (layout[i] === 5) {
            sq[i].classList.add("blast");
        }

    }
}
boardmaking();
console.log(sq)


let packmanindex = 490;
sq[packmanindex].classList.add("packman");

function movepackman(e) {
    console.log(e.key);
    sq[packmanindex].classList.remove("packman");
    switch (e.key) {
        case 'ArrowLeft':
            if (packmanindex % 28 != 0 && !sq[packmanindex - 1].classList.contains("wall") && !sq[packmanindex - 1].classList.contains("ghost")) {
                packmanindex--;
            }
            if (sq[packmanindex - 1] === sq[363]) {
                packmanindex = 391;
            }
            break;

        case 'ArrowRight':
            if (packmanindex % 28 < 27 && !sq[packmanindex + 1].classList.contains("wall") && !sq[packmanindex + 1].classList.contains("ghost")) {
                packmanindex++;
            }
            if (sq[packmanindex + 1] === sq[392]) {
                packmanindex = 364;
            }
            break;

        case 'ArrowUp':
            if (packmanindex - width >= 0 && !sq[packmanindex - 28].classList.contains("wall") && !sq[packmanindex - 28].classList.contains("ghost")) {
                packmanindex -= 28;
            }
            break;

        case 'ArrowDown':
            if (packmanindex + width < layout.length && !sq[packmanindex + 28].classList.contains("wall") && !sq[packmanindex + 28].classList.contains("ghost")) {
                packmanindex += 28;
            }

            break;
    }
    sq[packmanindex].classList.add("packman");

    dot_eat();
    win()
}
document.addEventListener("keyup", movepackman);

let score = 0;
function dot_eat() {
    if (sq[packmanindex].classList.contains("dot")) {
        score++;
        displayscore.innerHTML = score;
        sq[packmanindex].classList.remove("dot");
    }
    else if (sq[packmanindex].classList.contains("powerpoint")) {
        score += 10;
        displayscore.innerHTML = score;
        sq[packmanindex].classList.remove("powerpoint");
    }
    else if (sq[packmanindex].classList.contains("blast")) {
        score -= 10;
        displayscore.innerHTML = score;
        sq[packmanindex].classList.remove("blast");
    }

}

function win() {
    if (!document.querySelector(".dot") && !document.querySelector(".powerpoint")) {
        alert("ham jeet gye")
        popup.style.display = flex;
    }
}

class ghost {
    constructor(className, stindex, speed) {
        this.className = className;
        this.stindex = stindex;
        this.speed = speed;
        this.currentindex = stindex;
        this.isscared = false;
        this.timer = NaN;
    }
}

ghosts = [
    new ghost("bhut1", 348, 250),
    new ghost("bhut2", 376, 400),
    new ghost("bhut3", 351, 300),
    new ghost("bhut4", 379, 550)
]
console.log(ghosts);

ghosts.forEach((e) => {
    sq[e.currentindex].classList.add(e.className);
    sq[e.currentindex].classList.add("ghost");
    // moveghost();
});

ghosts.forEach((e) => {
    moveghost(e);
});

function moveghost(ghost) {
    console.log(ghost)
    let direction = [-1, 1, 28, -28];



    ghost.timer = setInterval(function () {

        if (!sq[currentindex + dir].classList.contains("ghost") && !sq[currentindex + dir].classList.contains("wall")) {

            sq[ghost.currentindex].classList.remove(ghost.className, "ghost");
            let dir = direction[Math.floor(Math.random() * direction.length)];
            ghost.currentindex += dir;
      }

        else {

        }

    }, ghost.speed);

}