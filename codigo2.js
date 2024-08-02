let level = 1;
let maxLevel = 10;
let timeouts = [2000, 1800, 1600, 1400, 1200, 1000, 800, 600, 400, 200];
let reactionTimeout;

function nextLevel() {
    if (level > maxLevel) {
        document.getElementById('message').innerText = "Parabéns! Você completou todos os níveis!";
        return;
    }

    clearTimeout(reactionTimeout);
    document.getElementById('message').innerText = '';
    document.getElementById('level-info').innerText = `Nível: ${level}`;
    document.getElementById('reaction-btn').disabled = true;

    let randomTime = Math.floor(Math.random() * 3000) + 1000; // Entre 1 e 4 segundos
    setTimeout(() => {
        document.getElementById('reaction-btn').disabled = false;
        reactionTimeout = setTimeout(() => {
            document.getElementById('message').innerText = "Você não conseguiu clicar a tempo! Tente novamente.";
            level = 1;
            document.getElementById('level-info').innerText = `Nível: ${level}`;
        }, timeouts[level - 1]);
    }, randomTime);
}

document.getElementById('reaction-btn').onclick = function() {
    if (!this.disabled) {
        level++;
        nextLevel();
    }
};

// Inicia o jogo
nextLevel();
