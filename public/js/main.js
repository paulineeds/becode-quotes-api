window.onload = () => {
    fetch('https://hidden-journey-32557.herokuapp.com/quotes', {
            method: "GET"
        })
        .then(response => response.json())
        .then(json => getQuote(json))
        .catch(error => alert('Error:', error));
}


const h3 = document.querySelector('h3');
const p = document.querySelector('p');

const handleLoad = (e) => {
    const randomQuote = e[Math.floor(Math.random() * e.length)];
    // console.log(randomQuote)
    h3.textContent = `"${randomQuote.quote}"`
    p.textContent = randomQuote.author
}

const getQuote = (quotes) => {
    console.log(quotes);

    handleLoad(quotes)

    const handleClickButton = () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(randomQuote)
        h3.textContent = `"${randomQuote.quote}"`
        p.textContent = randomQuote.author
    }


    document.querySelector("button").addEventListener('click', handleClickButton);
};