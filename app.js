const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=qL4fYopCYBypWudl3e9ZCXzoQLVwiflm&q=ducks" 

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response)
    
    const results = response.response.docs

  })

