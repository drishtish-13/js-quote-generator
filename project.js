let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person =document.querySelector('.person');

const quotes =[{
    quote:"A rose by any other name would smell as sweet.",
    person: 'William Shakespeare'

},{
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
    person: 'John Kennedy'
},{
    quote: "Ask, and it shall be given you; seek, and you shall find.",
    person:'The Bible'
},{
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: 'Thomas Edison'
},{
    quote:"He travels the fastest who travels alone.",
    person:'Rudyard Kipling	'
},{
    quote:"If you want something said, ask a man; if you want something done, ask a woman.",
    person:'Margaret Thatcher'
},{
    quote:"Life is like a box of chocolates. You never know what you’re gonna get.",
    person:'Forrest Gump'
},{
    quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person:'Albert Einstein'
},{
    quote:"You must be the change you wish to see in the world.",
    person:'Mahatma Gandhi'
},];

btn.addEventListener('click',function(){
    let random= Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
} )