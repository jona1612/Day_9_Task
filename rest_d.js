let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload = function(){
    if (request.status==200){
        let p = JSON.parse(request.responseText)
        // p.reduce((e)=> e.population);
        // .filter((e)=> e.name.population);

       console.log(p.reduce((c,k) => ({population: c.population + k.population})).population)

    }
}