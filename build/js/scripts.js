$(document).ready(function(){
    function validEmail(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };  
    $('.login__container--box-inputs input').keyup(function(){
        var inputmail = $('.email-input').val();
        var inputpassword = $('.password-input').val();
        if (!validEmail(inputmail) || inputpassword == '') {
            $('.login__container--box-alerts-error').addClass('show');
            $('.login__container--box-alerts-success').removeClass('show');
          }else{
            $('.login__container--box-alerts-success').addClass('show');
            $('.login__container--box-alerts-error').removeClass('show');
          } 
    });
})