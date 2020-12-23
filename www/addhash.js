$(function() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    history.pushState({}, '', e.target.hash);
  });

  var hash = document.location.hash;
  var prefix = "tab_";
  if (hash) {
    $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show');
  }
});
