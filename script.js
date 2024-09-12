$(document).ready(function() {
  $('#mission-title').click(function() {
      $('#vision-content').slideUp();
      $('#mission-content').slideToggle();
  });

  $('#vision-title').click(function() {
      $('#mission-content').slideUp();
      $('#vision-content').slideToggle();
  });
});
 
function scrollToActivity() {
  const activity = document.querySelectorAll("#title")[index];
  if (activity) {
    activity.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

window.scrollTo({
  top: 0,
  behavior: 'smooth'
});














// SOOOOOOOOO NICE yeaaah





