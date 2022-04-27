//when click button, switch "channel" --> change video

var buttons = document.querySelectorAll('.television__channel a');

//for the number of buttons, change to a different channel conneccted to different button
//make sure it doesnt change to default. 
for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    document.querySelector('.television__screen iframe').src = this.href;
    e.preventDefault();
  });
}
