/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let nombresIconos = ["pica", "diamante", "corazones", "trebol"];
  let iconos = {
    pica: "♠",
    diamante: "♦",
    corazones: "♥",
    trebol: "♣"
  };
  const numerosRandom = arr => {
    let numero = Math.round(Math.random() * (arr.length - 1));
    return arr[numero];
  };

  let tipo = numerosRandom(nombresIconos);
  let carta = numerosRandom(numeros);

  let iconoTop = document.querySelector(".icono-superior");
  iconoTop.innerHTML = iconos[tipo];
  iconoTop.classList.add("tipo");

  let numerosOtro = document.querySelector(".numero");
  numerosOtro.innerHTML = carta;
  numerosOtro.classList.add("carta");

  let iconoBot = document.querySelector(".icono-inferior");
  iconoBot.innerHTML = iconos[tipo];
  iconoBot.classList.add("tipo");

  if (nombresIconos === "diamante" || nombresIconos === "corazones") {
    iconoTop.style.color = "red";
    numerosOtro.style.color = "red";
    iconoBot.style.color = "red";
  }
};
