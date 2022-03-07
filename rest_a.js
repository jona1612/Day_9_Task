let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload = function(){
    if (request.status==200){
        let c=JSON.parse(request.responseText)
            //  c.filter((k)=> k.region)
              c.filter((k)=> k.region=="Asia" || k.continents=="Asia")
                .map((k)=>{
                    
                    console.log(" COUNTRY : " + k.name.official)
                    console.log(" REGION : " + k.region)
                    console.log(" CONTINENTS : " + k.continents)
                })       
            }
            else{
                console.log("Error");
            }
}
request.onerror= function(){
    console.log(error)
} 