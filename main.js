const cores = ["purple", "yellow", "rgba(133, 122, 200)", "#f15025"];
const button = document.querySelector('.btn');
const color = document.querySelector('.color')

button.addEventListener('click', () => {
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = cores[randomNumber]
  color.textContent = cores[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * cores.length)
}