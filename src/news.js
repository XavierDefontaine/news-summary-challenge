const headlines = []

fetch('https://content.guardianapis.com/search?api-key=' + GUARDIAN_KEY)
  .then(response => {
    return response.json();
  })
  .then(json => {
    let data = json.response.results;
    console.log(json.response.body)
    return data
  })
  .then(data => {
    console.log(data)
    // let id = 0
    for (i = 0; i < data.length; i++) {
    headlines.push("<div> <a href=#" + data[i].id + "><li>" + data[i].webTitle + "</a></li></div>")
    // id ++
    }
    document.getElementById("app").innerHTML = headlines.join("")
  })

  document.addEventListener("hashchange", function (event) {
    event.preventDefault() 
    console.log(location.hash)
    
  })
 