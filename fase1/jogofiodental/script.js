const object = document.getElementById("object");
const pia = document.querySelector(".pia");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let holdTimer = null;

function isOverlapping(obj1, obj2) {
    const rect1 = obj1.getBoundingClientRect();
    const rect2 = obj2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

function startHoldCheck() {
    if (holdTimer) return;

    holdTimer = setTimeout(() => {
        window.location.href = "/fase1/fdentalparabens/index.html";
    }, 5000);
}

function cancelHoldCheck() {
    if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
    }
}

function moveObject(x, y) {
    object.style.left = x - offsetX + "px";
    object.style.top = y - offsetY + "px";

    // Verifica se está sobre a pia
    if (isOverlapping(object, pia)) {
        startHoldCheck();
    } else {
        cancelHoldCheck();
    }
}

// MOUSE
object.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - object.getBoundingClientRect().left;
    offsetY = e.clientY - object.getBoundingClientRect().top;
    object.style.position = "absolute";
    object.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        moveObject(e.clientX, e.clientY);
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    object.style.cursor = "grab";
    cancelHoldCheck();
});

// TOUCH
object.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - object.getBoundingClientRect().left;
    offsetY = touch.clientY - object.getBoundingClientRect().top;
    object.style.position = "absolute";
}, { passive: false });

document.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        moveObject(touch.clientX, touch.clientY);
        e.preventDefault(); // Impede o scroll
    }
}, { passive: false });

document.addEventListener("touchend", () => {
    isDragging = false;
    cancelHoldCheck();
});

function playAudio() {
    const audio = document.getElementById('bg-audio');
    audio.play();
    document.getElementById('playBtn').style.display = 'none'; // esconde o botão após tocar
}
