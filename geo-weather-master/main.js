
    $(document).ready(function(){
        
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Unable to retrieve Data");
        }
    }
    
    var x = document.lastModified;
    $('#datetime').html("Last Updated:"+x);
    

    function getWeather(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let API_KEY = '32b2fb76d87564a13034a19aececc295';
        let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;
        
        $.post(baseURL,function(res){
            let data = res.current;
            let temp = Math.floor(data.temp - 273);
            let condition = data.weather[0].description;
           
            // var d = new Date();
            // d.setDate(d.getDate() - 1);
            var x = document.lastModified;
            $('#datetime').html("Last Updated:"+x);
            // document.getElementById("datetime").onload = function() {myFunction()};

            // function myFunction() {
            //     $('#datetime').html(x);
            // }
            // var LastUpdated = document.lastModified;
            // $('#datetime').html(x);
            $('#temp-main').html(`${temp}*C`);
          
        
              
                  if (10 < temp &&  temp <= 20) {
                    $('#appi').css({"backgroundColor" : "blue"});
                  } else if (20 < temp && temp <= 35) {
                    $('#appi').css({"backgroundColor" : "green"});
                  }
                
            
            $('#condition').html(condition);
           
          
            setTimeout(function(){
                window.location.reload(1);
             }, 1000);
        
                
         
 


                
        })
        // alert("Unable to retrieve Data");
        
    
    }  
    



    getLocation();
})
