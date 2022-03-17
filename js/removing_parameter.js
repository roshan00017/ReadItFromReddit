function removeParams(sparam)
{
    var url = "https://v.redd.it/gb0od3elkmn81/DASH_audio.mp4?source=fallback";
    var urlm = url.split('?')[0]+'?';
    var svariable = urlm.split('&'),
    sparameter,i;
    for(i=0; i< svariable.length;i++){
        sparameter = svariable[i].split('=');
        if(sparameter[0] != sparam){
            url = url+sparameter[0] + "=" + sparameter[1]+'&'
        } 
    }
    return url.substring(0,url.length-1);
}


function checkForMatches(str) {
	var res = str.match(/.*\/(.*)_1.jpg/);

	if(res) {
		output = res[res.length-1];
	} else {
		output = false;
	}

	return output;
  
}


alert(checkForMatches("http:\/\/xxx.xxjxf.com\/xxxx\/xxxx\/1234567_1.jpg"))
alert(checkForMatches("this is an invalid string"))



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

var url_add = "https://v.redd.it/gb0od3elkmn81/DASH_97.mp4?source=fallback"
console.log("Original address: "+url_add)
console.log(break_address(url_add))