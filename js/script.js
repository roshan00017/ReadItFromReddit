var after=""
var url ;
let btn = document.querySelector('#button1');



function break_address(url_add) {
  var data = url_add.split("_")
  var protocol = data[0];
  data = data[1].split(".");
  var domain = data[0];
  data = data[1].split("?");

  if(data[1]){
      return [protocol]
  }

  return [protocol]

}



/* 
 function fetchNull(url){
  console.log(after)
  fetch(`https://www.reddit.com/r/`+url+`.json?after=${after}`)
  .then(hello => hello.json())
  .then(body => {
    console.log(after)
     
    if( body.data.after==""){
      console.log("true")
      after=""
      console.log("if runned")
      console.log(after)
      return after;
    }
     })
  
} */






