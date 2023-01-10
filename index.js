// PONTUAÇÃO
let homeScore = 0
let guestScore = 0

document.getElementById("homeScore").innerHTML = homeScore
document.getElementById("guestScore").innerHTML = guestScore


function add1PointHome() {
    let plus1 = document.getElementById("homeScore")
    homeScore += 1
    plus1.textContent = homeScore
}

function add2PointsHome() {
    let plus2 = document.getElementById("homeScore")
    homeScore += 2
    plus2.textContent = homeScore
}

function add3PointsHome() { 
    let plus3 = document.getElementById("homeScore")
    homeScore += 3
    plus3.textContent = homeScore
}

function add1PointGuest() {
    let plus1 = document.getElementById("guestScore")
    guestScore += 1
    plus1.textContent = guestScore
}

function add2PointsGuest() {
    let plus2 = document.getElementById("guestScore")
    guestScore += 2
    plus2.textContent = guestScore
}

function add3PointsGuest() { 
    let plus3 = document.getElementById("guestScore")
    guestScore += 3
    plus3.textContent = guestScore
}


// CRONÔMETRO
"use strict";

let hh = 00;
let mm = 00;
let ss = 00;

let tempo = 1000; // Quantos milésimos valem 1s 
let cron;

function start() {
    cron = setInterval(() => { timer() }, tempo);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    clearInterval(cron);
    hh = 00;
    mm = 00;
    ss = 00;

    document.getElementById("counter").innerText = "00:00:00";
}

function timer() {
    ss++;

    if(ss == 60) {
        ss = 0;
        mm++;

        if(mm == 60) {
            mm = 0;
            hh++;
        }
    }

    let format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
    document.getElementById("counter").innerText = format;
}