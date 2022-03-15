alert("Write the following phrases in Indonesian. Correct answers will be given at the end.")
alert("Hint: Capitalize the first letter of the phrase.")
let hello = prompt("1. Hello")
let howAreYou = prompt("2. How are you?")
let thankYou = prompt("3. Thank you.")
let goodMorning = prompt("4. Good morning")
let goodAfternoon = prompt("5. Good Afternoon")
let goodEvening = prompt("6. Good evening")
let youreWelcome = prompt("7. You're welcome")
let goodbye = prompt("8. Goodbye")

//write functions for each answer with conditional.

let helloAnswer = function(hello) {
    if (hello === "Halo") {
        document.write("1. Hello: Good job! The correct answer is Halo. ")
    } else { 
        document.write("1. Hello: Not quite! The answer is Halo.")
    }
}

let howAreYouAnswer = function(howAreYou) {
    if (howAreYou === "Apa kabar?") {
        document.write(`2. How are you?: Good job! The correct answer is 'Apa kabar?'`)
    } else {
        document.write(`2. How are you?: Not quite! The answer is 'Apa kabar?' You put ${howAreYou}` )
    }
}

let thankYouAnswer = function(thankYou) { 
    if (thankYou === "Terima kasih") {
        document.write("3. Thank you: Good job! The correct answer is Terima kasih.")
    } else {
        document.write(`3. Thank you: Not quite! The answer is Terima kasih, you put ${thankYou}`)
    }
}

let goodMorningAnswer = function(goodMorning) {
    if (goodMorning === "Selamat pagi") {
        document.write("4. Good morning: Good job! The correct answer is Selamat pagi.")
    } else {
        document.write(`4. Good morning: Not quite! The answer is Selamat pagi, you put ${goodMorning}.`)
    }
}

let goodAfternoonAnswer = function(goodAfternoon) {
    if (goodAfternoon === "Selamat siang") {
        document.write("5. Good afternoon: Good job! the correct answer is Selamat siang.")
    } else { 
    document.write(`5. Good afternoon: Not quite! The answer is Selamat siang, you put ${goodAfternoon}`)
    }
}

let goodEveningAnswer = function(goodEvening) {
    if (goodEvening === "Selamat malam") {
        document.write("5. Good evening: Good job! The correct answer is Selamat malam.")
    } else {
        document.write(`5. Good evening: Not quite! The answer is Selamat malam, you put ${goodEvening}.`)
    }
}

let youreWelcomeAnswer = function(youreWelcome) {
    if (youreWelcome === "Sama-sama") {
        document.write("6. You're welcome: Good job! The answer is Sama-sama.")
    } else { 
        document.write(`6. You're welcome: Not quite! The answer is Sama-sama, you put ${youreWelcome}`)
    }
}

let goodbyeAnswer = function(goodbye) {
    if (goodbye === "Selamat singgal") { 
        document.write("8. Goodbye: Good job! The answer is Selamat singgal.")
    } else { 
        document.write(`8. Goodbye: Not quite! The answer is Selamat singgal, you put ${goodbye}.`)
    }
}


