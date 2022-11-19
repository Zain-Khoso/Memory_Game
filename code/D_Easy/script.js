Array.prototype.random = function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};
Array.prototype.setupPaths = function () {
    this.push("../../assets/cat.jpg")
    this.push("../../assets/elephant.jpg")
    this.push("../../assets/lion.png")
    this.push("../../assets/cat.jpg")
    this.push("../../assets/elephant.jpg")
    this.push("../../assets/lion.png")
};
const imgPaths = [];
const clkdDivs = [];

let trys = 1;
let attempts = 3;
let score = 0;

function handleUrl(val) {
    if (val === 'easy') {
        open('index.html', '_self')
    }
    else if (val === 'standard') {
        open('code/D_Standard/index.html', '_self')
    }
    else {
        open('code/D_Hard/index.html', '_self')
    }
}
function clicked(node) {
    if (attempts > 1) {
        if (trys <= 2) {
            if (trys == 1) {
                setupNode(node);

                trys++;
            } else if (trys == 2 && clkdDivs.includes(node)) {
                alert("Don't try to be smart, Just play the game");
                resetEnv();
                attempts = attempts-1;
                atpt.textContent = `Attempts: ${attempts}`;
            } else {
                setupNode(node);
                if (
                    clkdDivs[0].firstElementChild.src ==
                    clkdDivs[1].firstElementChild.src
                ) {
                    score++;
                    attempts = 3;
                    src.textContent = `Score: ${score}`;
                    atpt.textContent = `Attempts: ${attempts}`;

                    setTimeout(function () {
                        alert("Congrets, You have won the game.");
                    }, 100);
                    setTimeout(function () {
                        resetEnv();
                        imgPaths.setupPaths();
                        setupEnv();
                    }, 500);
                } else {
                    --attempts;
                    atpt.textContent = `Attempts: ${attempts}`;

                    setTimeout(function () {
                        alert(`Nice Try, You have ${attempts} Attempts left.`);
                    }, 100);
                    setTimeout(resetEnv, 500);
                }
            }
        }
    } else {
        if (trys <= 2) {
            if (trys == 1) {
                setupNode(node);

                trys++;
            } else if (trys == 2 && clkdDivs.includes(node)) {
                alert("You wasted Your Last Atempt");
                resetEnv();
                imgPaths.setupPaths();
                setupEnv();

                attempts = 3;
                score = 0;
                atpt.textContent = `Attempts: ${attempts}`;
                src.textContent = `Score: ${score}`;
            } else {
                setupNode(node);
                if (
                    clkdDivs[0].firstElementChild.src ==
                    clkdDivs[1].firstElementChild.src
                ) {
                    score++;
                    attempts = 3;
                    src.textContent = `Score: ${score}`;
                    atpt.textContent = `Attempts: ${attempts}`;

                    setTimeout(function () {
                        alert("Congrets, You have won the game.");
                    }, 100);
                    setTimeout(function () {
                        resetEnv();
                        imgPaths.setupPaths();
                        setupEnv();
                    }, 500);
                } else {
                    setTimeout(function () {
                        alert("Nice try, Better Luck Next Time.");
                        resetEnv();
                        imgPaths.setupPaths();
                        setupEnv();
                    }, 100);

                    attempts = 3;
                    score = 0;
                    atpt.textContent = `Attempts: ${attempts}`;
                    src.textContent = `Score: ${score}`;
                }
            }
        }
    }
}
function setupNode(node) {
    node.firstElementChild.width = node.offsetWidth;
    node.firstElementChild.height = node.offsetHeight;
    clkdDivs.push(node);
}

function resetEnv() {
    let fItem = clkdDivs.pop();
    let sItem = clkdDivs.pop();

    fItem.firstElementChild.width = 0;
    fItem.firstElementChild.height = 0;
    sItem.firstElementChild.width = 0;
    sItem.firstElementChild.height = 0;

    trys = 1;
}

function setupEnv() {
    for (let child of container.children) {
        child.firstElementChild.src = imgPaths.random();
    }
}

imgPaths.setupPaths();
setupEnv();