const container = document.querySelector("#container");
const logos = document.querySelectorAll("#logo");

logos.forEach((img, index) => {
  img.style.zIndex = `${logos.length - index}`;
});

window.addEventListener("mousemove", function (dets) {
  let x = dets.clientX * 0.05 - 20;
  let y = dets.clientY * 0.05 - 20;

  logos.forEach((img, index) => {
    img.style.transform = `translate(${x * index}px, ${y * index}px) `;
  });
});

