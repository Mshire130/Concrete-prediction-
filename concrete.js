var cement = document.getElementById("cement"); 
var slag = document.getElementById("slag");
var flyash = document.getElementById("flyash");
var water = document.getElementById("water");
var superplasticizer = document.getElementById("superplasticizer");
var coarseaggregate = document.getElementById("coarseaggregate");
var fineaggregate = document.getElementById("fineaggregate");
var age = document.getElementById("age");

 document.getElementById("Submitb").addEventListener("click", function(){
    
    async function postData(url= "", data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
    
            body: JSON.stringify(data)
                
            });
    
            return await response.json();
    
        }
    
        
    postData( `http://localhost:5000/api/calcstrength` , {
        cement: parseInt(cement.value),
        slag: parseInt(slag.value),
        flyash: parseInt(flyash.value),
        water: parseInt(water.value),
        superplasticizer: parseInt(superplasticizer.value),
        coarseaggregate: parseInt(coarseaggregate.value), 
        fineaggregate: parseInt(fineaggregate.value),
        age: parseInt(age.value)

    })
        .then((data) => {
                
                console.log(data); 
                console.log(data['Concrete strength'].toFixed(2));
                var strengthout = document.getElementById('output');
                strengthout.innerHTML = `Concrete strength: ${data['Concrete strength'].toFixed(2)} MPa`
            });
      

})
