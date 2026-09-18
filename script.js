const heart = document.getElementById("heart");

const scale = 170;
const step = 0.12;

let delay = 0;

// สร้างหัวใจทีละตำแหน่ง
for (let y = -1.2; y <= 1.2; y += step) {

    for (let x = -1.2; x <= 1.2; x += step) {

        // สมการรูปหัวใจ
        const equation =
            Math.pow(
                x * x + y * y - 1,
                3
            )
            - x * x * Math.pow(y, 3);

        // ถ้าอยู่ "ข้างใน" รูปหัวใจ
        if (equation <= 0) {

            const smallHeart = document.createElement("span");

            smallHeart.classList.add("small-heart");

            smallHeart.textContent = "❤️";

            smallHeart.style.left =
                (300 + x * scale) + "px";

            smallHeart.style.top =
                (250 - y * scale) + "px";

            smallHeart.style.animationDelay =
                delay + "s";

            heart.appendChild(smallHeart);

            delay += 0.01;
        }
    }
}
