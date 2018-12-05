$(function(){
  console.log('scripts loaded');

  var url1 = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=emo+rap&limit=10&api_key=90a3ca32719b4f3dbbdb70e210784219&format=json';
  var url2 = 'https://newsapi.org/v2/everything?q=emo%20rap&sources=mtv-news,buzzfeed,entertainment-weekly,vice-news&sortBy=relevance&apiKey=cfc8e67278ab4b87aab2d9429f5acac0';
  var url3 = 'https://orion.apiseeds.com/api/music/lyric/XXXTentacion/jocelyn flores?apikey=XMyu1OJbKppZHI98U6h5mgBnRglxIegaezrvOLYcf79oSnbMEJXwpDym3y30iCxC';
  var lastfm_data = [];
  var mtv_data = [];
  var lyric_data = [];
  var html = '';
  var artists = [];
  var artist = [];
  var i;


//jump menu


$('a[href*="#"]').bind('click', function(e) {
		e.preventDefault();

		var target = $(this).attr("href");

		$('html, body').stop().animate({
				scrollTop: $(target).offset().top
		}, 600, function() {
				location.hash = target;
		});

		return false;
});


$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

	if (scrollDistance >= 60) {
				$('nav').fadeIn("fast");
		} else {
				$('nav').fadeOut("fast");
		}

		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
}).scroll();

//fade in on scroll


  ScrollReveal().reveal('.header-text', {delay: 300});
  ScrollReveal().reveal('.intro', {delay: 500});
  ScrollReveal().reveal('.top-artists', {delay: 500});
  ScrollReveal().reveal('.top-5', {delay: 500});
  ScrollReveal().reveal('.news', {delay: 500});
  ScrollReveal().reveal('.examples', {delay: 500});
  ScrollReveal().reveal('.closing', {delay: 500});


//last fm api


$.ajax({
    type:'GET',
    url: url1,
    dataType: 'json',
    data:lastfm_data,
    async:true,
    success:function(lastfm_data){
      console.log(lastfm_data.topartists);
      artists = lastfm_data.topartists;
      html = '';

      html += '<a href="' + lastfm_data.topartists.artist[0].url + '" target=_blank>';
      html += '<div class="artist-cards">';
      html +=   '<img src="' + lastfm_data.topartists.artist[0].image[2]['#text'] + '">';
      html +=   '<h3>' + lastfm_data.topartists.artist[0].name + '</h3>';
      html += '</div>';
      html += '</a>';

      html += '<a href="' + lastfm_data.topartists.artist[1].url + '" target=_blank>';
      html += '<div class="artist-cards">';
      html +=   '<img src="' + lastfm_data.topartists.artist[1].image[2]['#text'] + '">';
      html +=   '<h3>' + lastfm_data.topartists.artist[1].name + '</h3>';
      html += '</div>';
      html += '</a>';

      html += '<a href="' + lastfm_data.topartists.artist[2].url + '" target=_blank>';
      html += '<div class="artist-cards">';
      html +=   '<img src="' + lastfm_data.topartists.artist[2].image[2]['#text'] + '">';
      html +=   '<h3>' + lastfm_data.topartists.artist[2].name + '</h3>';
      html += '</div>';
      html += '</a>';

      html += '<a href="' + lastfm_data.topartists.artist[3].url + '" target=_blank>';
      html += '<div class="artist-cards flex">';
      html +=   '<img src="' + lastfm_data.topartists.artist[3].image[2]['#text'] + '">';
      html +=   '<h3>' + lastfm_data.topartists.artist[3].name + '</h3>';
      html += '</div>';
      html += '</a>';

      html += '<a href="' + lastfm_data.topartists.artist[4].url + '" target=_blank>';
      html += '<div class="artist-cards flex">';
      html +=   '<img src="' + lastfm_data.topartists.artist[4].image[2]['#text'] + '">';
      html +=   '<h3>' + lastfm_data.topartists.artist[4].name + '</h3>';
      html += '</div>';
      html += '</a>'



    $('#artistresults').html(html);

    } //end success function




  });


$.ajax({
  type:'GET',
  url: url2,
  dataType:'json',
  async:true,
  data:mtv_data,
  success:function(mtv_data){
    console.log(mtv_data.articles);
    articles = mtv_data.articles;
    html = '';

    articles.forEach(function(article){
      console.log(article.title);
      html += '<div class="cards flex">';
      html +=   '<img class="thumbnail" src="' + article.urlToImage + '">';
      html +=   '<div class="text">';
      html +=     '<a href="' + article.url + '" target="_blank">';
      html +=   '<h3 class="headline">' + article.title + '</h3>';
      html +=   '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
      html +=   '</div></a>';
      html += '</div>'

    });
    $('#newsresults').append(html);

  }


});


$.ajax({
  type:'GET',
  url: url3,
  dataType:'json',
  async:true,
  data:lyric_data,
  success:function(lyric_data){
    console.log(lyric_data.result);
    song = lyric_data.result;
    html = '';

    html += '<div class="lyrics">';
    html +=   '<h3>' + song.track.name + '</h3>';
    html +=   '<h4>By: ' + song.artist.name + '</h4>';
    html +=     '<div class="lyrics-text">';
    html +=       '<p>' + song.track.text + '</p>';
    html +=     '</div>';
    html +=   '<h5>' + song.copyright.notice + '</h5>';
    html += '</div>'




    $('#lyricsresults').html(html);

  }


});






}); //end scripts loaded
