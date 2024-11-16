let homeScore = 0
let guestScore = 0
let homeScoreBoard = document.getElementById("home-score")
let guestScoreBoard = document.getElementById("guest-score")

function increaseHomeScoreOne() {
    homeScore +=1
    homeScoreBoard.textContent = homeScore
}
function increaseHomeScoreTwo() {
    homeScore +=2
    homeScoreBoard.textContent = homeScore
}
function increaseHomeScoreThree() {
    homeScore +=3
    homeScoreBoard.textContent = homeScore
}
function increaseGuestScoreOne() {
    guestScore +=1
    guestScoreBoard.textContent = guestScore
}
function increaseGuestScoreTwo() {
    guestScore +=2
    guestScoreBoard.textContent = guestScore
}
function increaseGuestScoreThree() {
    guestScore +=3
    guestScoreBoard.textContent = guestScore
}