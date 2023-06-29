let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
        '"The purpose of our lives is to be happy." — Dalai Lama',
        '"Life is what happens when youre busy making other plans." — John Lennon',
        '"Get busy living or get busy dying." — Stephen King',
        '"You only live once, but if you do it right, once is enough." — Mae West',
        '"Many of lifes failures are people who did not realize how close they were to success when they gave up." Thomas A. Edison',
        '"If you want to live a happy life, tie it to a goal, not to people or things." Albert Einstein',
        '"Never let the fear of striking out keep you from playing the game." Babe Ruth',
        '"Money and success dont change people; they merely amplify what is already there." — Will Smith',
        ' "Not how long, but how well you have lived is the main thing.” — Seneca',
        '“In order to write about life first you must live it.”– Ernest Hemingway',
        '“The big lesson in life, baby, is never be scared of anyone or anything.”– Frank Sinatra',
        '“Sing like no ones listening, love like youve never been hurt, dance like nobodys watching, and live like its heaven on earth.”  (Attributed to various sources)',
    ]
btn.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})    