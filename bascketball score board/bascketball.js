let scoreEL = document.getElementById("score-el")
let score = 0
function plusone() {
  score += 1
  scoreEL.textContent = score
}
function plustwo() {
  score += 2
  scoreEL.textContent = score
}
function plusthree() {
  score += 3
  scoreEL.textContent = score
}
let scoreEll = document.getElementById("score-ell")
let scoree = 0
function plusonee() {
  scoree += 1
  scoreEll.textContent = scoree
}
function plustwoo() {
  scoree += 2
  scoreEll.textContent = scoree
}
function plusthreee() {
  scoree += 3
  scoreEll.textContent = scoree
}
function newEL(){
  score = 0
  scoreEL.textContent = score
  scoree = 0
  scoreEll.textContent = scoree
}
