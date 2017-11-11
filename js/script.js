$(document).ready(function() {

function hideAll() {
  $('#dreams').hide();
  $('#everywhere').hide();
  $('#landslide').hide();
  $('#rhiannon').hide();
}

 hideAll();

$('#big_image').click(function() {
  $('#text').slideToggle();
});


$('.image').click(function() {

   hideAll();

   $("audio").each(function() {
       this.pause();
       this.currentTime = 0;
   });

   switch ($(this).attr("id")) {
     case "img_dreams":
        $('#dreams').show();
        break;
     case "img_everywhere":
        $('#everywhere').show();
        break;
     case "img_landslide":
        $('#landslide').show();
        break;
     case "img_rhiannon":
        $('#rhiannon').show();
        break;
    }
  });
  $( "#more_text" ).hide();


  $('#button1').click(function() {
    $('#more_text').slideToggle();

});




});
