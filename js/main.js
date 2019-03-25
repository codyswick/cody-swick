// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}





// contact form
$(".form").on('click', function() {
  $(this).addClass('active');
});

$(".submit").on('click', function() {
  $(this).parent().parent().hide(300);
  $(".ok_message").addClass("active");
  setTimeout(function(){
				$(".submit").attr("type","submit");
			}, 3000);


});

$(".ok_message").on('click', function() {
  $(this).removeClass("active");
  $(".form").removeClass("active").show();
});


//skills bars

jQuery(document).ready(function(){

  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);

    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });
  });
});
