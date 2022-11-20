Array.prototype.random = function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};
Array.prototype.setupPaths = function () {
    this.push("../../assets/imgs/cat.jpg");
    this.push("../../assets/imgs/elephant.jpg");
    this.push("../../assets/imgs/lion.png");
    this.push("../../assets/imgs/dog.jpg");
    this.push("../../assets/imgs/cat.jpg");
    this.push("../../assets/imgs/elephant.jpg");
    this.push("../../assets/imgs/lion.png");
    this.push("../../assets/imgs/dog.jpg");
    this.push("../../assets/imgs/cat.jpg");
    this.push("../../assets/imgs/elephant.jpg");
    this.push("../../assets/imgs/lion.png");
    this.push("../../assets/imgs/dog.jpg");
};
const imgPaths = [];
const clkdDivs = [];

let trys = 1;
let attempts = 4;
let score = 0;

function clicked(node) {
    if (attempts > 1) {
        if (trys == 1) {
            setupNode(node);
            trys++;
        } else if (trys == 2) {
            if (clkdDivs.includes(node)) {
                alert("You cannot pick the same card two or more times.");
            } else {
                setupNode(node);
                trys++;
            }
        } else {
            if (clkdDivs.includes(node)) {
                alert("You cannot pick the same card two or more times.");
            } else {
                setupNode(node);

                if (
                    clkdDivs.every(
                        (element) =>
                            element.firstElementChild.src ==
                            clkdDivs[0].firstElementChild.src
                    )
                ) {
                    score++;
                    attempts = 4;
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
                    attempts--;
                    atpt.textContent = `Attempts: ${attempts}`;

                    setTimeout(function () {
                        alert(`Nice try, You have ${attempts} Attempts left.`);
                        resetEnv();
                    }, 100);
                }
            }
        }
    } else {
        if (trys == 1) {
            setupNode(node);
            trys++;
        } else if (trys == 2) {
            if (clkdDivs.includes(node)) {
                alert("You cannot pick the same card two or more times.");
            } else {
                setupNode(node);
                trys++;
            }
        } else {
            if (clkdDivs.includes(node)) {
                alert("You cannot pick the same card two or more times.");
            } else {
                setupNode(node);

                if (
                    clkdDivs.every(
                        (element) =>
                            element.firstElementChild.src ==
                            clkdDivs[0].firstElementChild.src
                    )
                ) {
                    score++;
                    attempts = 4;
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
                    console.log(clkdDivs);
                    attempts = 4;
                    score = 0;
                    atpt.textContent = `Attempts: ${attempts}`;
                    src.textContent = `Score: ${score}`;

                    setTimeout(function () {
                        alert("Game Over, Better Luck Next Time.");
                        resetEnv();
                        imgPaths.setupPaths();
                        setupEnv();
                    }, 100);
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
    let tItem = clkdDivs.pop();

    fItem.firstElementChild.width = 0;
    fItem.firstElementChild.height = 0;
    sItem.firstElementChild.width = 0;
    sItem.firstElementChild.height = 0;
    tItem.firstElementChild.width = 0;
    tItem.firstElementChild.height = 0;

    trys = 1;
}

function setupEnv() {
    for (let child of container.children) {
        child.firstElementChild.src = imgPaths.random();
    }
}

function handleUrl(val) {
    if (val === "easy") {
        open("../../index.html", "_self");
    } else if (val === "standard") {
        open("code/D_Standard/index.html", "_self");
    } else {
        open("../D_Hard/index.html", "_self");
    }
}
imgPaths.setupPaths();
setupEnv();
