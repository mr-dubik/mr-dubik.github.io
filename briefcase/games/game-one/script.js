window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        if (!window.application.blocks[screenName]) {
            console.log("Такого экрана нет");
        } else {
            this.blocks[screenName];
        }
    },
    renderBlock: function (blockName, container) {
        if (!window.application.blocks[blockName]) {
            console.log("Такого блока нет");
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
};

const container = document.querySelector(".container");
window.application.renderScreen("level");

function renderLevelScreen() {
    if (container != null) {
        container.textContent = "";
    }

    const levelBox = document.createElement("div");
    levelBox.classList.add("level-box");

    const title = document.createElement("p");
    title.classList.add("level-box__title");
    title.textContent = "Выбери сложность";

    const levelBoxNumber = document.createElement("div");
    levelBoxNumber.classList.add("level-box__number");

    const number1 = document.createElement("div");
    number1.classList = "level-box__number_style";
    number1.textContent = "1";

    const number2 = document.createElement("div");
    number2.classList = "level-box__number_style";
    number2.textContent = "2";

    const number3 = document.createElement("div");
    number3.classList = "level-box__number_style";
    number3.textContent = "3";

    const levelButton = document.createElement("button");
    levelButton.classList = "button";
    levelButton.textContent = "Старт";

    if (container != null) {
        container.appendChild(levelBox);
    }

    levelBox.appendChild(title);
    levelBox.appendChild(levelBoxNumber);
    levelBox.appendChild(levelButton);
    levelBoxNumber.appendChild(number1);
    levelBoxNumber.appendChild(number2);
    levelBoxNumber.appendChild(number3);
    levelChange();
    const button = document.querySelector("button");
    if (button != null) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            renderGameScreen();
        });
    }
}

window.application.screens["level"] = renderLevelScreen();



function levelChange() {
    const numbers = document.querySelectorAll(".level-box__number_style");
    numbers.forEach((numb) => {
        numb.addEventListener("click", function (event) {
            numbers.forEach((numb) => {
                if (numb.classList.contains("change")) {
                    numb.classList.remove("change");
                }
            });
            if (!(event.target)) return;
            const target = event.target;
            if (target != null) {
                target.classList.add("change");
                window.application.level = target.textContent;
            }
        });
    });
}

function renderGameScreen() {
    if (container != null) {
        container.textContent = "";
    }
    const header = document.createElement("div");
    header.classList.add("header");
    const timeBox = document.createElement("div");
    timeBox.classList.add("time-box");
    const timeBoxName = document.createElement("div");
    timeBoxName.classList.add("time-box__name");
    const minName = document.createElement("p");
    minName.classList.add("time-box__name_min");
    minName.textContent = "min";
    const secName = document.createElement("p");
    secName.classList.add("time-box__name_sec");
    secName.textContent = "sec";
    const timerBox = document.createElement("div");
    timerBox.classList.add("time-box__timer");
    const minTimer = document.createElement("p");
    minTimer.classList.add("time-box__timer_min");
    minTimer.textContent = "00.";
    const secTimer = document.createElement("p");
    secTimer.classList.add("time-box__timer_sec");
    secTimer.textContent = "00";
    const gameButton = document.createElement("button");
    gameButton.classList.add("button");
    gameButton.classList.add("buttonNewStart");
    gameButton.textContent = "Начать заново";
    const cardsBox = document.createElement("div");
    cardsBox.classList.add("cards-box");
    if (container != null) {
        container.appendChild(header);
        container.appendChild(cardsBox);
    }
    header.appendChild(timeBox);
    timeBox.appendChild(timeBoxName);
    timeBox.appendChild(timerBox);
    timerBox.appendChild(minTimer);
    timerBox.appendChild(secTimer);
    timeBoxName.appendChild(minName);
    timeBoxName.appendChild(secName);
    header.appendChild(gameButton);

    let numberOfCards = 0;

    if (window.application.level === "1") {
        numberOfCards = 3;
    } else if (window.application.level === "2") {
        numberOfCards = 6;
    } else if (window.application.level === "3") {
        numberOfCards = 9;
    }

    let card = 0;

    function getRandomInt(min, max) {
        min = 1;
        max = 37;
        card = Math.floor(Math.random() * (max - min)) + min;
        return card;
    }

    const cards = [];

    for (let i = 0; i < numberOfCards; i++) {
        getRandomInt(1, 37);
        if (cards.includes(card)) {
            getRandomInt(1, 37);
            cards.push(card);
        } else {
            cards.push(card);
        }
    }
    cards.push(...cards);

    cards.sort(() => Math.random() - 0.5);

    for (let i = 0; i < cards.length; i++) {
        const item = document.createElement("div");
        item.classList.add("cards-box__item");
        if (numberOfCards === 3) {
            item.classList.add("card3");
        } else if (numberOfCards === 6) {
            item.classList.add("card6");
        } else if (numberOfCards === 9) {
            item.classList.add("card9");
        }
        cardsBox.appendChild(item);

        const img = document.createElement("img");
        img.src = "img/" + cards[i] + ".png";
        img.classList.add("image");
        item.appendChild(img);
    }

    const items = document.querySelectorAll(".cards-box__item");

    function cardsHidden() {
        items.forEach((item) => {
            const upperBlock = document.createElement("div");
            upperBlock.classList.add("shirt");
            item.appendChild(upperBlock);
        });
    }

    let sec = 0;
    let min = 0;

    function startTimer() {
        setInterval(function () {
            sec++;
            secTimer.textContent = String(sec);
            if (sec < 10) {
                secTimer.textContent = "0" + sec;
            }
            if (sec === 60) {
                sec = 0;
                min++;
                minTimer.textContent = min + ".";
                if (min < 10) {
                    minTimer.textContent = "0" + min + ".";
                }
            }
        }, 1000);

        const newGame = document.querySelector(".buttonNewStart");

        if (newGame != null) {
            newGame.addEventListener("click", function (event) {
                event.preventDefault();
                renderGameScreen();
            });
        }
    }
    window.application.timers.push(setTimeout(cardsHidden, 5000));
    window.application.timers.push(setTimeout(startTimer, 4000));

    let compared = [];
    let counter = 0;

    items.forEach((item) => {
        item.addEventListener("click", function () {
            if (item.children.length > 1) {
                if (item.lastElementChild != null) {
                    item.removeChild(item.lastElementChild);
                }
                if (item.firstElementChild != null) {
                    compared.push(item.firstElementChild);
                }
            } else {
                return;
            }
            if (compared.length >= 2) {
                if (
                    compared[0].attributes.src.nodeValue ===
                    compared[1].attributes.src.nodeValue
                ) {
                    compared = [];
                    items.forEach((item) => {
                        if (item.children.length === 1) {
                            counter += 1;
                            const comparisonСounter = numberOfCards * 4;
                            if (counter === comparisonСounter) {
                                renderWinScreen();
                                const loseTime =
                                    minTimer.textContent +
                                    secTimer.textContent;
                                window.application.loseGame = loseTime;
                                renderWinScreen();
                            }
                        }
                    });
                } else {
                    const loseTime =
                        minTimer.textContent + secTimer.textContent;
                    window.application.loseGame = loseTime;
                    renderLoseScreen();
                }
            }
        });
    });
}
window.application.screens["game"] = renderGameScreen;

function renderWinScreen() {
    if (container != null) {
        container.textContent = "";
    }
    const header = document.createElement("div");
    header.classList.add("header");
    const timeBox = document.createElement("div");
    timeBox.classList.add("time-box");
    const timeBoxName = document.createElement("div");
    timeBoxName.classList.add("time-box__name");
    const minName = document.createElement("p");
    minName.classList.add("time-box__name_min");
    minName.textContent = "min";
    const secName = document.createElement("p");
    secName.classList.add("time-box__name_sec");
    secName.textContent = "sec";
    const timerBox = document.createElement("div");
    timerBox.classList.add("time-box__timer");
    const minTimer = document.createElement("p");
    minTimer.classList.add("time-box__timer_min");
    minTimer.textContent = "00.";
    const secTimer = document.createElement("p");
    secTimer.classList.add("time-box__timer_sec");
    secTimer.textContent = "00";
    const gameButton = document.createElement("button");
    gameButton.classList.add("button");
    gameButton.classList.add("buttonNewStart");
    gameButton.textContent = "Начать заново";
    const cardsBox = document.createElement("div");
    cardsBox.classList.add("cardsBoxWin");
    const hiddenBox = document.createElement("div");
    hiddenBox.classList.add("hiddenBox");
    const winBox = document.createElement("div");
    winBox.classList = "end-game-box";
    const winImage = document.createElement("img");
    winImage.classList.add("end-game-box__win-image");
    winImage.src = "../img/win.png";
    const title = document.createElement("p");
    title.classList = "end-game-box__title";
    title.textContent = "Вы выйграли";
    const passed = document.createElement("p");
    passed.classList = "end-game-box__passed";
    passed.textContent = "Затраченное время:";
    const timeInfo = document.createElement("p");
    timeInfo.classList = "end-game-box__time-info";
    timeInfo.textContent = window.application.loseGame;
    const endGameButton = document.createElement("button");
    endGameButton.classList = "button";
    endGameButton.classList = "end-game-box__button";
    endGameButton.textContent = "Играть снова";

    if (container != null) {
        container.appendChild(header);
        container.appendChild(cardsBox);
        container.appendChild(hiddenBox);
        container.appendChild(winBox);
    }
    winBox.appendChild(winImage);
    winBox.appendChild(title);
    winBox.appendChild(passed);
    winBox.appendChild(timeInfo);
    winBox.appendChild(endGameButton);

    header.appendChild(timeBox);
    timeBox.appendChild(timeBoxName);
    timeBox.appendChild(timerBox);
    timerBox.appendChild(minTimer);
    timerBox.appendChild(secTimer);
    timeBoxName.appendChild(minName);
    timeBoxName.appendChild(secName);
    header.appendChild(gameButton);

    for (let i = 0; i < 36; i++) {
        const item = document.createElement("div");
        item.classList.add("cards-box__item");
        item.classList.add("card36");
        cardsBox.appendChild(item);

        let cardNumber = i + 1;

        const img = document.createElement("img");
        img.src = "img/" + cardNumber + ".png";
        img.classList.add("image");
        item.appendChild(img);
    }

    endGameButton.addEventListener("click", function (event) {
        event?.preventDefault();
        renderLevelScreen();
    });
}
window.application.screens["win"] = renderWinScreen;

function renderLoseScreen() {
    if (container != null) {
        container.textContent = "";
    }
    const header = document.createElement("div");
    header.classList.add("header");
    const timeBox = document.createElement("div");
    timeBox.classList.add("time-box");
    const timeBoxName = document.createElement("div");
    timeBoxName.classList.add("time-box__name");
    const minName = document.createElement("p");
    minName.classList.add("time-box__name_min");
    minName.textContent = "min";
    const secName = document.createElement("p");
    secName.classList.add("time-box__name_sec");
    secName.textContent = "sec";
    const timerBox = document.createElement("div");
    timerBox.classList.add("end-game-box__title");
    const minTimer = document.createElement("p");
    minTimer.classList.add("time-box__timer_min");
    minTimer.textContent = "00.";
    const secTimer = document.createElement("p");
    secTimer.classList.add("time-box__timer_sec");
    secTimer.textContent = "00";
    const gameButton = document.createElement("button");
    gameButton.classList.add("button");
    gameButton.classList.add("buttonNewStart");
    gameButton.textContent = "Начать заново";
    const cardsBox = document.createElement("div");
    cardsBox.classList.add("cardsBoxWin");
    const hiddenBox = document.createElement("div");
    hiddenBox.classList.add("hiddenBox");
    const winBox = document.createElement("div");
    winBox.classList = "end-game-box";
    const loseImage = document.createElement("img");
    loseImage.classList.add("end-game-box__lose-image");
    loseImage.src = "../img/lose.png";
    const title = document.createElement("p");
    title.classList = "end-game-box__title";
    title.textContent = "Вы проиграли";
    const passed = document.createElement("p");
    passed.classList = "end-game-box__passed";
    passed.textContent = "Затраченное время:";
    const timeInfo = document.createElement("p");
    timeInfo.classList = "end-game-box__time-info";
    timeInfo.textContent = window.application.loseGame;
    const endGameButton = document.createElement("button");
    endGameButton.classList = "button";
    endGameButton.classList = "end-game-box__button";
    endGameButton.textContent = "Играть снова";

    if (container != null) {
        container.appendChild(header);
        container.appendChild(cardsBox);
        container.appendChild(hiddenBox);
        container.appendChild(winBox);
    }
    winBox.appendChild(loseImage);
    winBox.appendChild(title);
    winBox.appendChild(passed);
    winBox.appendChild(timeInfo);
    winBox.appendChild(endGameButton);

    header.appendChild(timeBox);
    timeBox.appendChild(timeBoxName);
    timeBox.appendChild(timerBox);
    timerBox.appendChild(minTimer);
    timerBox.appendChild(secTimer);
    timeBoxName.appendChild(minName);
    timeBoxName.appendChild(secName);
    header.appendChild(gameButton);

    for (let i = 0; i < 36; i++) {
        const item = document.createElement("div");
        item.classList.add("cards-box__item");
        item.classList.add("card36");
        cardsBox.appendChild(item);

        let cardNumber = i + 1;

        const img = document.createElement("img");
        img.src = "img/" + cardNumber + ".png";
        img.classList.add("image");
        item.appendChild(img);
    }

    endGameButton.addEventListener("click", function (event) {
        event?.preventDefault();
        renderLevelScreen();
    });
}
window.application.screens["lose"] = renderLoseScreen;