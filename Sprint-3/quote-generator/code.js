import { quotes, pickFromArray } from './quotes.js';
function newQuote() {
    const quoteObj = pickFromArray(quotes);
    document.getElementById('quote').textContent = quoteObj.quote;
    document.getElementById('author').textContent = quoteObj.author;
}
document.getElementById("new-quote").addEventListener("click", newQuote);
document.addEventListener("DOMContentLoaded", newQuote);