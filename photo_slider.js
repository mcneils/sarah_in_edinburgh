
function photo_slider(intro_slide, file_path, captions){
  // keeping track of where user is in array
  var counter = -1;
  $(document).ready(function(){        
    //keeps the picture in the right place when window is resized
    $(window).resize(function(){ 
       $('.my_images').css({
        position:'absolute',
        left: ($(window).width() 
          - $('.my_images').outerWidth())/2,
        top: ($(window).height() 
          - $('.my_images').outerHeight())/2
      });   
    });
    //clicking on the left button
    $('.left_button').click(function(){
      counter = backward(intro_slide,file_path,captions, counter);
    });
    //clicking on the right button
    $('.right_button').click(function(){
      counter = forward(intro_slide, file_path, captions, counter);          
    }); 
    //using arrow keys (Natalie, in case you ever look at this code)
    $(document).keydown(function(e) {
      switch(e.which) {
        case 37: // left
          counter = backward(intro_slide, file_path,captions, counter);
          break;

        case 39: // right
        counter = forward(intro_slide, file_path, captions, counter); 
        break;
        default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
    // To initially run the function:        
    $(window).resize();
    $('.left_button').click();
  });
}


function backward(intro_slide, file_path, captions, counter) {
  if (counter === -1 || counter === 0){
    $("#my_images").html('<div class="caption">'+ intro_slide +
      '<p>Use buttons or l/r arrow keys to flip through pictures.</p></div>'); 
    if (counter === 0){
      counter -= 1;
    }      
  } else {
      counter-=1;
      $("#my_images").html('<img src = "images/'+file_path+
      counter.toString()+'.JPG" id="main_picture"> <div class="caption"><p>'+
      captions[counter]+'</p></div>');       
    }
  return counter;
}     

function forward(intro_slide, file_path, captions, counter){
  if (counter < captions.length-1){
    counter +=1;
    console.log(counter);
    $("#my_images").html('<img src = "images/'+ file_path +
     counter.toString()+'.JPG" id="main_picture"> <div class="caption"><p>'+
     captions[counter]+'</p></div>');
  }else{
    if(counter === captions.length-1){
      counter+=1;
    }
    $("#my_images").html('<img src = "images/end.jpg" id="main_picture">');
  }
  return counter;
}