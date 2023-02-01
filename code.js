const btn = document.getElementById("btn");



function showdata(data,lag,lon){

    let nameOfzone = document.getElementById("namezone").innerHTML = data.results[0].timezone.name;
    let lati = document.getElementById("lat").innerHTML =lag;
    let long = document.getElementById("lon").innerHTML = lon;
    let offset = document.getElementById("ostd").innerHTML = data.results[0].timezone.offset_STD;
    let offsets =document.getElementById("offsets").innerHTML =data.results[0].timezone.offset_STD_seconds;

 let dst = document.getElementById("dst").innerHTML = data.results[0].timezone.offset_DST;

 let disec =document.getElementById("dsts").innerHTML =data.results[0].timezone.offset_DST_seconds;
 let country =document.getElementById("country").innerHTML = data.results[0].country;
 let pincode = document.getElementById("pscode").innerHTML = data.results[0].postcode;
 let city = document.getElementById("city").innerHTML = data.results[0].city;

   
console.log(data);



}

function showPosition() {

    navigator.geolocation.getCurrentPosition((position) => {
        let lat =  position.coords.latitude 
        let lon =position.coords.longitude;

        responcedata(lat,lon);
        
        
       
});
}

async function responcedata(lat,lon){
let url = 'https://api.geoapify.com/v1/geocode/reverse?lat=17.498527629759185&lon=78.39325019998743&format=json&apiKey=2456a09e75ce484c8c0b8cbf94131188'

    const responce = await fetch(url);
   console.log(url);
    const data =await responce.json();
    showdata(data,lat,lon);

}

function showdata1(data){
       
console.log(data.features[0]);

   let nameOfzone = document.getElementById("namezone2").innerHTML = data.features[0].properties.timezone.name
   let lati = document.getElementById("lat-i").innerHTML =data.features[0].properties.lat;
  let long = document.getElementById("lon-1").innerHTML = data.features[0].properties.lon;
    let offset = document.getElementById("ostdi").innerHTML =data.features[0].properties.timezone.offset_STD;
    let offsets =document.getElementById("offsets1").innerHTML =data.features[0].properties.timezone.offset_STD_seconds;

 let dst = document.getElementById("dst1").innerHTML = data.features[0].properties.timezone.offset_DST;

 let disec =document.getElementById("dsts1").innerHTML =data.features[0].properties.timezone.offset_DST_seconds;
 let country =document.getElementById("country1").innerHTML = data.features[0].properties.country;
 let pincode = document.getElementById("pscode1").innerHTML = data.features[0].properties.country_code;
 let city = document.getElementById("city1").innerHTML = data.features[0].properties.name;






}


function intilazation (){

    let usera = document.getElementById("input").value ;
    console.log(usera);
    
    responcedata1(usera)
   
    
}
async function responcedata1(usera){
    let url ='https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent('+usera+')}&apiKey=2456a09e75ce484c8c0b8cbf94131188';
   
        const responce = await fetch(url);
       console.log(url);
        const data =await responce.json();
showdata1(data);
        
    }

btn.addEventListener('click',intilazation);


      showPosition();
      