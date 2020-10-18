const headlines = []
const body = []
const id = []
const data = []

fetch("https://content.guardianapis.com/search" + "?show-fields=body" + "&api-key=" + GUARDIAN_KEY) //"?show-fields=body"
  .then(response => {
    return response.json(); 
  })
  .then(json => {
    data.push(json.response.results)
    return data[0]
  })
  .then(data => {
    console.log(data)
    for (i = 0; i < data.length; i++) {
    headlines.push("<div> <a href=#" + data[i].id + "><li>" + data[i].webTitle + "</a></li></div>")
    body.push(data[i].fields.body)
    id.push(data[i].id)
    }
    document.getElementById("app").innerHTML = headlines.join("")
  })

 

  window.addEventListener("hashchange", function (event) {
    event.preventDefault() 
    insertIntoHTML(outputToHtml(_getArticle(_idFromURL()))
    );
  });


  function insertIntoHTML(htmlString) {
    var element = document.getElementById("app");
    element.innerHTML = htmlString
  }

  function outputToHtml(article) {
    let html = article.fields.body
    return "<body>" + html + "</body>"     
  }

  function _getArticle(id) {
    for (let index = 0; index < data[0].length; index++) {
      const element = data[0][index];
      if (element.id == id) {
        article = element
      }
    }
    return article;
  }
  
  function _idFromURL() {
    console.log(location.hash.split("#")[1]);
    return location.hash.split("#")[1];
  }
 