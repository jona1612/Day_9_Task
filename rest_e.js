let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload = function(){
    if (request.status==200){
        let c=JSON.parse(request.responseText)
             c.filter((e)=> e.currencies)
              .filter((e)=> e.currencies.USD)
                .map((e)=>{
                    
                    console.log(" COUNTRY: " + e.name.official);
                    console.log(" CURRENCY: " + e.currencies.USD.name);
                    console.log(" SYMBOL: " + e.currencies.USD.symbol);
                })
            }
            else{
                console.log("Error");
            }
}
request.onerror= function(){
    console.log(error)
}
