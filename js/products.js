const img = document.querySelector(".himg1");

const img2 = document.querySelector(".himg2");

const title = document.querySelector(".r2");

const title2 = document.querySelector(".r3");

const title3 = document.querySelector(".h3");

const title4 = document.querySelector(".h4");

const par1 = document.querySelector(".hpar");

const par2 = document.querySelector(".hpar2");

const leftBtn = document.querySelector(".left");

const pages = document.querySelector(".hpages");

const rightBtn = document.querySelector(".right");
let i = 1;
rightBtn.addEventListener("click", function () {
  i++;

  if (i > 3) {
    i = 1;
  }
  pages.textContent = `${i}/3`;

  console.log(i);

  if (i === 1) {
    img.src = "assets/svg/html2Pngs/1.png";
    img2.src = "assets/svg/html2Pngs/2.png";
    title.textContent = "XX99 MARK I";
    title2.textContent = "HEADPHONES";
    title3.textContent = "XX99 MARK I";
    title4.textContent = "HEADPHONES";
    par1.textContent =
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.";
    par2.textContent =
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.";
  } else if (i === 2) {
    img.src = "assets/svg/html2Pngs/3.png";
    img2.src = "assets/svg/html2Pngs/4.png";
    title.textContent = "XX59 ";
    title2.textContent = "HEADPHONES";
    title3.textContent = "ZX7";
    title4.textContent = "SPEAKER";
    par1.textContent =
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.";
    par2.textContent =
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";
  } else if (i === 3) {
    img.src = "assets/svg/html2Pngs/5.png";
    img2.src = "assets/svg/html2Pngs/6.png";
    title.textContent = "ZX9 ";
    title2.textContent = "SPEAKER";
    title3.textContent = "YX1 WIRELESSS";
    title4.textContent = "EARPHONES";
    par1.textContent =
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.";
    par2.textContent =
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";
  }
});

console.log(i);

leftBtn.addEventListener("click", function () {
  i--;

  if (i < 1) {
    i = 3;
  }
  pages.textContent = `${i}/3`;

  console.log(i);

  if (i === 1) {
    img.src = "assets/svg/html2Pngs/1.png";
    img2.src = "assets/svg/html2Pngs/2.png";
    title.textContent = "XX99 MARK I";
    title2.textContent = "HEADPHONES";
    title3.textContent = "XX99 MARK I";
    title4.textContent = "HEADPHONES";
    par1.textContent =
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.";
    par2.textContent =
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.";
  } else if (i === 2) {
    img.src = "assets/svg/html2Pngs/3.png";
    img2.src = "assets/svg/html2Pngs/4.png";
    title.textContent = "XX59 ";
    title2.textContent = "HEADPHONES";
    title3.textContent = "ZX7";
    title4.textContent = "SPEAKER";
    par1.textContent =
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.";
    par2.textContent =
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";
  } else if (i === 3) {
    img.src = "assets/svg/html2Pngs/5.png";
    img2.src = "assets/svg/html2Pngs/6.png";
    title.textContent = "ZX9 ";
    title2.textContent = "SPEAKER";
    title3.textContent = "YX1 WIRELESSS";
    title4.textContent = "EARPHONES";
    par1.textContent =
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.";
    par2.textContent =
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";
  }
});
