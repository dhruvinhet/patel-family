const wishes = [
    "May the light of Diwali guide you through the darkness of life.",
    "May the joy of Diwali fill your heart with happiness and peace.",
    "May the prosperity of Diwali bring you wealth and abundance.",
    "May the love of Diwali surround you with family and friends.",
    "May the happiness of Diwali last forever."
  ];
  
  const wishesButton = document.querySelector("button[type='submit']");
  const wishesElement = document.querySelector("#wishes");
  
  wishesButton.addEventListener("click", function() {
    const name = document.querySelector("input[type='text']").value;
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  
    wishesElement.innerHTML = `<span style="color: white; font-size: 2em;text-shadow: 0 0 5px #00ff40, 0 0 10px #00ff40, 0 0 15px #00ff40;color: #00ff40;">Happy Diwali, ${name}! ${randomWish}</span>`;
  });
  