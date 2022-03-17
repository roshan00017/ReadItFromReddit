var after4=""



  function fetchB4(){
  
    url = "funny"
    
    fetchContent4(url)
     
   
  }
  function fetchContent4(url){

    if (document.querySelector(".content")) {
      document.querySelector(".content").remove()
      console.log("removed")
    }
   
    var parentdiv = document.createElement("div");
    parentdiv.className = "content"
    console.log("created")
    console.log(after)
    fetch(`https://www.reddit.com/r/`+url+`.json?after=${after4}`)
    .then((response) => { return response.json();
    })
    .then((body) => {
      console.log(body);
      after4 = body.data.after;
      console.log(after)
       
        for (var index = 0; index < body.data.children.length; index++){
              console.log("loop started")
              if (body.data.children[index].data.post_hint === "image"){
              let newdiv = document.createElement("div");
              let h4 = document.createElement("h4");
              let image = document.createElement("img");
              image.src = body.data.children[index].data.url_overridden_by_dest;
              h4.textContent = body.data.children[index].data.title;
              newdiv.appendChild(h4);
              newdiv.appendChild(image);
              
              parentdiv.appendChild(newdiv);
              console.log("all created")
  
  
        }
        else if(body.data.children[index].data.post_hint==="hosted:video"){
          let newdiv = document.createElement("div");
          let h4 = document.createElement("h4");
          let video = document.createElement("video");
          let audio = document.createElement("audio")
          video.src = body.data.children[index].data.secure_media.reddit_video.fallback_url;
          audio.src = break_address(video.src)+`_audio.mp4`;
          video.onplay  = function() { audio.play();  }
          video.onpause = function() { audio.pause(); }
          
          
          /* if (video.canPlayType('video/mp4')) {
            video.setAttribute('src',video.src);
  
          } else if (video.canPlayType('video/webm')) {
            video.setAttribute('src',video.src);
          }
          if (audio.canPlayType('audio/mpeg')) {
            audio.setAttribute('src',audio.src);
          } else if (audio.canPlayType('audio/ogg')) {
            audio.setAttribute('src',audio.src);
          } */
          
          video.controls = true
          video.volume = true
          h4.textContent = body.data.children[index].data.title;
          newdiv.appendChild(h4);
          newdiv.appendChild(video);
          
          parentdiv.appendChild(newdiv);
        }
        
          
        document.body.appendChild(parentdiv);
      }
      
      
    })
   
    
  }var after4=""

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
  
  function fetchB2(){
    
      url = 'ksi'
      
      fetchContent2(url)
      
      
  }
    function fetchContent2(url){
  
      if (document.querySelector(".content")) {
        document.querySelector(".content").remove()
        console.log("removed")
      }
     
      var parentdiv = document.createElement("div");
      parentdiv.className = "content"
      console.log("created")
      console.log(after)
      fetch(`https://www.reddit.com/r/`+url+`.json?after=${after4}`)
      .then((response) => { return response.json();
      })
      .then((body) => {
        console.log(body);
        after4 = body.data.after;
        console.log(after)
         
          for (var index = 0; index < body.data.children.length; index++){
                console.log("loop started")
                if (body.data.children[index].data.post_hint === "image"){
                let newdiv = document.createElement("div");
                let h4 = document.createElement("h4");
                let image = document.createElement("img");
                image.src = body.data.children[index].data.url_overridden_by_dest;
                h4.textContent = body.data.children[index].data.title;
                newdiv.appendChild(h4);
                newdiv.appendChild(image);
                
                parentdiv.appendChild(newdiv);
                console.log("all created")
    
    
          }
          else if(body.data.children[index].data.post_hint==="hosted:video"){
            let newdiv = document.createElement("div");
            let h4 = document.createElement("h4");
            let video = document.createElement("video");
            let audio = document.createElement("audio")
            video.src = body.data.children[index].data.secure_media.reddit_video.fallback_url;
            audio.src = break_address(video.src)+`_audio.mp4`;
            video.onplay  = function() { audio.play();  }
            video.onpause = function() { audio.pause(); }
            
            
            /* if (video.canPlayType('video/mp4')) {
              video.setAttribute('src',video.src);
    
            } else if (video.canPlayType('video/webm')) {
              video.setAttribute('src',video.src);
            }
            if (audio.canPlayType('audio/mpeg')) {
              audio.setAttribute('src',audio.src);
            } else if (audio.canPlayType('audio/ogg')) {
              audio.setAttribute('src',audio.src);
            } */
            
            video.controls = true
            video.volume = true
            h4.textContent = body.data.children[index].data.title;
            newdiv.appendChild(h4);
            newdiv.appendChild(video);
            
            parentdiv.appendChild(newdiv);
          }
          
            
          document.body.appendChild(parentdiv);
        }
        
        
      })
     
      
    }