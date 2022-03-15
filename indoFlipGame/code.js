alert("Write the following phrases in Indonesian. Correct answers will be given at the end.")
let hello = prompt("1. Hello")
alert("next question")
let howAreYou = prompt("2. How are you?")
let thankYou = prompt("3. Thank you.")
let goodMorning = prompt("4. Good morning")
let goodAfternoon = prompt("5. Good Afternoon")
let goodEvening = prompt("6. Good evening")
let youreWelcome = prompt("7. You're welcome")
let goodbye = prompt("8. Goodbye")

//write functions for each answer with conditional.
let helloAnswer = function(${hello}) {
    if (hello === Halo) {
        document.write("Good job! The correct answer is Halo. ")
    } else { 
        document.write("Not quite! The answer is Halo.")
    }
}
document.write(
`
<h2>Here are the correct answers:<h2>
1. Hello <br>
${helloAnswer(${hello})}<br>
2. How are you?<br>
 Your response was ${howAreYou}. The correct answer is Apa kabar?<br>
 3. Thank you<br>
 Your response was ${thankYou}. The correct answer is Terima kasih.<br>
 4. Good morning<br>
 Your response was ${goodMorning}. The correct answer is Selamat pagi. <br>
 5. Good Afternoon<br>
 Your response was ${goodAfternoon}. The correct answer is Selamat siang. <br>
 6. Good evening <br>
 Your response was ${goodEvening}. The correct answer is Selamat malam. <br>
 7. You're welcome<br>
 Your response was ${youreWelcome}. The correct answer is Sama-sama. <br>
 8. Goodbye<br>
 Your response was ${goodbye}. The correct answer is Selamat singgal. 
 `)