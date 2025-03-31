function spinWheel() {
    const wheel = document.getElementById('wheel');
    const spins = 5; // Количество полных оборотов
    const fixedRotation = 360 * spins + 0; // Всегда останавливается на "Скидка 5%"
    wheel.style.transform = `rotate(${fixedRotation}deg)`;
}