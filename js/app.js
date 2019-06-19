



const search = $('')
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=qL4fYopCYBypWudl3e9ZCXzoQLVwiflm&q=" + search +

$.ajax({
    url: queryURL,
    method: "GET"
    console.log(response)
  }).then(function(response) {
    for (let i = 0; i < results.length; i++) {
    const results = response.response.docs
    const listResults = $('#results')
    const newDiv = $("<div>").addClass('article')
    const h = $("<h4>")
    const p = $("<p>")

    h.text(results[i].headline.main);
    p.text()
    

    }
  })

