//Counter code
var button = document.getElementById('counter');

button.onclick = function (){
  
 
  //make a request to the counter endpoint
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function ()  {
      if(request.readyState == XMLHttpRequest.DONE){
          //Take some action
            if(request.status==200){
                var conter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
          
      }
      //not done yet
      
  };
  //render the variable in the correct span
  
  
}; 