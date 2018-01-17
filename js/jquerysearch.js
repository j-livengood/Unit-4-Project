var $search = $('#mainSearch');

$search.keyup( function () {
  $("#imageList .thumbnail").each(function () {
    var $title = $(this).attr("title").toLowerCase();
    if ($search.val() === '') {
      $(this).fadeTo(250, 1);
    } else if ($title.indexOf($search.val().toLowerCase()) > -1) {
      $(this).show(250);
    } else {
      $(this).hide(250);
    }
  });
});