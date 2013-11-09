$.get("http://data.sfgov.org/resource/yivs-89de.json", function(data){
  app(data);
});

var app = function(data){
  console.log(data[0])
}

