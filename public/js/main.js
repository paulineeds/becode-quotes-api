// fetch('https://hidden-journey-32557.herokuapp.com/quotes',{mode: 'no-cors'})
// .then(response => response.json())
// .then(quote => console.log(quote))
// // .catch(error => alert('Error:', error))

fetch('https://hidden-journey-32557.herokuapp.com/quotes', {mode: 'no-cors'})
    .then(response => response.json())
    .then(json => getQuote(json));

const getQuote = (data) => {
    console.log(data);
}