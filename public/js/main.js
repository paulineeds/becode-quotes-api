fetch('https://hidden-journey-32557.herokuapp.com/quotes', {
        method: "GET"
    })
    .then(response => response.json())
    .then(json => getQuote(json))
    .catch(error => alert('Error:', error));

const getQuote = (data) => {
    console.log(data);
}