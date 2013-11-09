$.get("http://data.sfgov.org/resource/uk3k-9ai5.json", function(data){
  app(data);
});

var app = function(data){
  console.log(data)
}

