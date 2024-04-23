let nome = "Alexsander";
let xp = 1000;
let nivel = "Ferro";

let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let scores = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
let i = 0;

while (xp > scores[i] && i < niveis.length) {
  i++;
}

nivel = niveis[i];

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);