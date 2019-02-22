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
    p.textContent = `- ${randomQuote.author}`
}

const getQuote = (quotes) => {
    console.log(quotes);

    handleLoad(quotes)

    const handleClickButton = () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(randomQuote)
        h3.textContent = `"${randomQuote.quote}"`
        p.textContent = `- ${randomQuote.author}`
    }


    document.querySelector("#quotebutton").addEventListener('click', handleClickButton);
};

document.querySelector('#create').addEventListener('click',function(e){
    e.preventDefault()
   
    let valquote = document.querySelector('#quote').value;
    let valauthor =document.querySelector('#author').value;
  

    const addQuote={
        method:'post',
        mode:'cors',
        headers: {"content-type": "application/json"},
        body:JSON.stringify({
            "quote":`${valquote}`,
            "author": `${valauthor}`
        })

    }
 
    fetch('/quotes/new',addQuote)
    .then(location.reload())
})

const deleteQuote = (e) => {
 e.preventDefault()
    // let valquote = document.querySelector('#quote').value;
    // let valauthor =document.querySelector('#author').value;
    let valid = document.querySelector('#id').value;
console.log(valid)
    // const deleteQuote={
       
    //     method:'delete'
    //     // mode:'cors',
    //     // headers: {"content-type": "application/json"},
    //     // body:JSON.stringify({
    //     //     // "quote":`${valquote}`,
    //     //     // "author": `${valauthor}`,
    //     //     "_id":`${valid}`
            
    //     // })
       
    // }
    
    fetch(`https://hidden-journey-32557.herokuapp.com/quotes/destroy/${valid}`, {
        method:'delete',
        mode:'cors',
        
            
    })
    .then(response => console.log(response))
    .then(data => {
        console.log(data)
    })
    // .then(location.reload())
}

   

document.querySelector('#delete').addEventListener('mousedown',deleteQuote);

// function remove(event){
//     event.preventDefault()
//     var id = event.target.getAttribute("data-id")
//     fetch(apiUrl + "/" + id,{
//       method: 'DELETE'
//     }).then(function(){
//       todos.removeChild(event.target.parentNode)
//     })
//   }