const $search = $('#mainSearch');

$search.keyup( function () {
  $("#imageList .thumbnail").each(function () {
    let $title = $(this).attr("title").toLowerCase();
    if ($search.val() === '') {
      $(this).fadeTo(250, 1);
    } else if ($title.indexOf($search.val().toLowerCase()) > -1) {
      $(this).fadeTo(250, 1);
    } else {
      $(this).fadeTo(250, 0.1);
    };
  });
});