let btn = document.querySelector("#new-quote")
let quote  = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [{
    
    quote: `"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."`,
    person: `Albert Einstein`
},{
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`
}
,{
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela:`
}
,{
    quote: `"Injustice anywhere is a threat to justice everywhere."`,
    person: `Martin Luther King Jr.`
}
,{
    quote: `"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."`,
    person: `Marie Curie:`
}
,{
    quote: `"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."`,
    person: `Steve Jobs: `
}
,{
    quote: `"Be yourself; everyone else is already taken.`,
    person: `Oscar Wilde: : `
}];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
