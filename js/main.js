var last=0;
function setdivsize()
{
	var h=($(window).height()-67).toString()+"px";
	$(".full-screen").css('height',h);
	$("#photo").css('height',h);
	$("#four-pages-iframe").css('height',h);
	$("#four-pages-iframe").css('width',$(window).width());
	$("#footer-iframe").css('height',h);
	$("#footer-iframe").css('width',$(window).width());
}

function change_saying()
{
	var pn=last;
	while(pn == last)
	{
		pn=rnd(1,6);
	}
	$("#slides_"+pn.toString()).click();
}

$(document).ready(function(e) {
	setdivsize();
	setInterval("change_saying()",4000);
});

$(window).resize(function(e) {
	setdivsize();
});

$('#1-a').click(function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top-67
            }, 500);
            remove_active();
			$("#nav1").addClass("active");
});
$('#2-a').click(function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top-67
            }, 500);
            remove_active();
			$("#nav2").addClass("active");
});
$('#3-a').click(function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top-67
            }, 500);
            remove_active();
			$("#nav3").addClass("active");
});
$('#4-a').click(function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top-67
            }, 500);
            remove_active();
			$("#nav4").addClass("active");
});
$('#5-a').click(function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top-67
            }, 500);
            remove_active();
			$("#nav5").addClass("active");
});
$('#6-a').click(function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top-67
            }, 500);
            remove_active();
			$("#nav6").addClass("active");
});

function remove_active()
{
	$(".nav-item").removeClass("active");
}

$("#first-page").scroll(function() {
	remove_active();
	$("#nav1").addClass("active");
});

$("#four-pages").scroll(function() {
	remove_active();
	$("#nav2").addClass("active");
});

$("#ppt-examples").scroll(function() {
	remove_active();
	$("#nav3").addClass("active");
});

$("#sayings-clouds").scroll(function() {
	remove_active();
	$("#nav4").addClass("active");
});

$("#author-photo").scroll(function() {
	remove_active();
	$("#nav5").addClass("active");
});

$("#footer").scroll(function() {
	remove_active();
	$("#nav6").addClass("active");
});