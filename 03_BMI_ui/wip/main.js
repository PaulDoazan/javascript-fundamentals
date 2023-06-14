const bmiData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en
// calcul au carré : 6 ** 2 = 36

const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const btn = document.querySelector(".form-btn")
const bmiValue = document.querySelector(".bmi-value")
const description = document.querySelector(".description")

btn.addEventListener('click', onBtnClick)

function onBtnClick(event) {
  event.preventDefault();

  const wValue = weight.value
  const hValue = height.value

  if (!wValue || !hValue || wValue <= 0 || hValue <= 0) {
    handleError()
    return
  }

  const bmi = (wValue / Math.pow((hValue / 100), 2)).toFixed(1)
  displayResult(bmi);
}

function displayResult(val) {
  let rank

  for (let i = 0; i < bmiData.length; i++) {
    if (val >= bmiData[i].range[0] && val < bmiData[i].range[1]) {
      rank = bmiData[i]
      break;
    } else if (typeof bmiData[i].range === 'number' && val >= bmiData[i].range) {
      rank = bmiData[i]
    }
  }

  bmiValue.textContent = val;
  bmiValue.style.color = rank.color
  description.textContent = rank.name
}

function handleError() {
  bmiValue.textContent = "Echec"
  description.textContent = "Remplissez correctement le formulaire !"
}