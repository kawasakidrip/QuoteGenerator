import quote from "./index.js";

function app () {
    const result = document.querySelector('.content');
    const author = document.querySelector('.author');
    const button = document.querySelector('.btn');
    const quoteData = quote()
    console.log(quoteData.data.content)
}
app()