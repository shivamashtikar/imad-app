//Counter code
var button = document.getElementById('counter');

button.onclick = function (){
  
 
  //  make a request
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function ()  {
      if(request.readyState == XMLHttpRequest.DONE){
          //Take some action
            if(request.status==200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
          
      }
      //not done yet
      
  };
  //Make the request
  request.open('GET','http://lightningshivam.imad.hasura-app.io/counter',true);
  request.send(null);
  
  
}; 
//submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    
  //make a request  and send name
   //  make a request
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function ()  {
      if(request.readyState == XMLHttpRequest.DONE){
          //Take some action
            if(request.status==200){
                  var names =request.responseText; 
                  names =JSON.parse(names); 
                  var list = '';
                  for (var i=0; i<names.length;i++){
                      list += '<li>'+ names[i] +'</li>';
                  }
                  var ul = document.getElementById('namelist');
                  ul.innerHTMl = list;
                  }
                        
      }
      //not done yet
      
  };
  var nameInput = document.getElementById('name');
    var name = nameInput.value;

  //Make the request
  request.open('GET','http://lightningshivam.imad.hasura-app.io/submit-name/'+ name,true);
  request.send(null);
  //capture a list of names and render it as list
  
    
};