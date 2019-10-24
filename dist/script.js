$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    
    var captchaValue = $('#captcha').val();
    captchaValue = captchaValue.toLowerCase();
    
    if (captchaValue == 'computer vision') {
      window.location.href="https://github.com/Baiyun-u-smartAI/temp/blob/master/%E4%B8%8B%E8%BD%BD%20(1).png?raw=true";
    } 
    else if (captchaValue == '') {
      $('body').append('<span class="notice">Try the captcha again</span>'); 
    } 
    else {
      alert('You are a robot!');
    }
  });
 
  $('#bot').click(function(e){
    e.preventDefault();
    $('head link, head style').remove();
    $('#captcha').val('');
    $('.notice').remove();
    $(this).remove();
  });
});