let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")
homeScore = 0
guestScore = 0

function hone() {
    homeScore = homeScore + 1
}

function htwo() {
    homeScore = homeScore + 2
}

function hthree() {
    homeScore.innerText = homeScore + 3
}

function gone() {
    guestScore = guestScore +1
}

function gtwo() {
    guestScore = guestScore +2
}

function gthree() {
    guestScore = guestScore +3
}