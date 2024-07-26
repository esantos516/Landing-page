jQuery(document).ready(function($) {


	var createdate = new Date();
	var getyear = createdate.getFullYear();
	var getyeardiv = document.getElementById('year');
	getyeardiv.innerHTML = getyear;


	$(function() {
        $('.gototop').click(function() {
            $('body,html').animate({scrollTop:0},800);
        }); 
	});


	var lightbox = $('.gallery a').simpleLightbox({ history: false });



    var lastId,
	topMenu = $("#headnav"),
	topMenuHeight = topMenu.outerHeight()+135,
	// All list items
	menuItems = topMenu.find("a").not("li.phone a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"), 
	      offsetTop = href === "#" ? 0 : $(href).offset().top-120;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 1200);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});
	//ENDED
});