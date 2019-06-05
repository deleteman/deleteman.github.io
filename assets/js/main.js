var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {

  if(window.location.pathname == '/') { //If this is our home
    $("section h2").each(function(){
      let $next = $($(this).siblings("h3")[0])
      $("nav#posts ul").append( ["<li class='nav-item tag-" + this.nodeName.toLowerCase() + "'>",
                              "<a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>",
                              $(this).text() ,
                              " <span class=\"release-date\">(" + $next.text() + ")</span>",
                              "</a></li>"].join(""));
      $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
      $("nav#posts ul li:first-child a").parent().addClass("active");
    });
  } else {
    $("#posts").hide()
  }

  $("nav#posts ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav#posts ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});
