(function ($) {
  var weather, lat, lon;
  navigator.geolocation.getCurrentPosition(handle_geolocation_query,handle_errors); 

 function handle_errors(error)
        {
            switch(error.code)
            {
                case error.PERMISSION_DENIED: alert("user did not share geolocation data");
                break;
 
                case error.POSITION_UNAVAILABLE: alert("could not detect current position");
                break;
 
                case error.TIMEOUT: alert("retrieving position timed out");
                break;
 
                default: alert("unknown error");
                break;
            }
        }
 function handle_geolocation_query(position){
        lat = data.coords.latitude;
        lon = data.coords.longitude;
		var image_url = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + "," +
                    position.coords.longitude + "&zoom=14&size=300x400&markers=color:blue|label:S|" +
                    position.coords.latitude + ',' + position.coords.longitude;
		jQuery("#map").remove();
		jQuery(document.body).append(
			jQuery(document.createElement("img")).attr("src", image_url).attr('id','map')
		);
        getWeather(lat , lon);    console.log('Lat: ' + position.coords.latitude + ' ' +
                  'Lon: ' + position.coords.longitude);
 }
 function getWeather(lat,lon){
 
   $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=3acc16ffae9e45df92a064e41646355f', function(json) { 
				loc = (json.name);
				country = json.sys.country;
        descr = json.weather[0].description;
        fahrenheit = Math.round(json.main.temp);
				celcius = Math.round((fahrenheit - 32) * 5 / 9); 
         $("#loc").text(loc + "," + country);	
         $("#description").text(descr);
     count = 0;
   
         $("#temp").text(fahrenheit);
         $("#tempUnit").text("F");
         $("#switchUnit").text("C");
         $("button").click(function(){
             if(count == 1){
               $("#temp").text(fahrenheit);
               $("#tempUnit").text("F");
               $("#switchUnit").text("C");
               count = 0;
             }
             else{
              $("#temp").text(celcius);
             $("#tempUnit").text("C");
               $("#switchUnit").text("F");
             count = count+1;
             }
          });
     mainW = json.weather[0].main;
     switch (mainW.toLowerCase()){
          case 'haze':
            $(".primary").addClass("fa-cloud");
            $(".s1").addClass("fa-cloud");
            break;
          case 'clouds':
            $(".primary").addClass("fa-cloud");
            $(".s1").addClass("fa-cloud");
            break;
          case 'rain':
            $(".primary").addClass("fa-cloud");
            $(".s2").addClass("fa-tint");
            break;
          case 'snow':
            $(".fa").addClass("fa-snowflake-o");
            $(".primary").addClass("fa-spin");
            break;
          case 'clear':
            $(".fa").addClass("fa-sun-o");
            $(".primary").addClass("fa-spin");
            break;
          case 'thunderstorm':
            $(".primary").addClass("fa-cloud");
            $(".s3").addClass("fa-bolt");
            break;
          default:
            break;
       }
        
			});
   	
 } 
})(jQuery);