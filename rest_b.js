let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    if (request.status == 200) {
        let m = JSON.parse(request.responseText)
          m.filter((k)=> k.population<200000)
            .map((k) => {
             
                console.log("COUNTRY : " + k.name.official);
                console.log("POPULATION : " + k.population);
         })
        
    }
}