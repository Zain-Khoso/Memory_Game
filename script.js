const clkdDivs = [];

let trys = 1;
let attempts = 0;
let score = 0;

function clicked(node) {
    if (trys <= 2) {
        if (trys == 1) {
            setupNode(node);

            trys++;
        } else if (trys == 2 && clkdDivs.includes(node)) {
            alert("Don't try to be smart, Just play the game");
            resetEnv();
            trys = 1;
        } else {
            setupNode(node);
            if (
                clkdDivs[0].firstElementChild.className ==
                clkdDivs[1].firstElementChild.className
            ) {
                score++;
                attempts++;
                src.textContent = `Score: ${score}`;
                atpt.textContent = `Attempts: ${attempts}`;

                setTimeout(function () {
                    alert("Congrets, You have won the game.");
                }, 100);
                setTimeout(resetEnv, 500);
            } else {
                attempts++;
                atpt.textContent = `Attempts: ${attempts}`;

                setTimeout(function () {
                    alert("Game Over, Try again.");
                }, 100);
                setTimeout(resetEnv, 500);
            }
        }
    }
}
function setupNode(node) {
    node.firstElementChild.width = 145;
    node.firstElementChild.height = 145;
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
