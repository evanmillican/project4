$(function(){
  console.log('scripts loaded');

  var url1 = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=90a3ca32719b4f3dbbdb70e210784219&format=json';
  var lastfm_data;
  var html = '';
  var artists = [];
  var i = '';



  $.ajax({
    type:'GET',
    url: url1,
    dataType: 'json',
    data:lastfm_data,
    async:true,
    success:function(lastfm_data){
      console.log(lastfm_data.artists);
      artist = lastfm_data.artists;
      console.log(lastfm_data.artist.name);

      artists.forEach(function(artist){
        console.log(artist);
          html += '<div class="cards flex">';
          html +=   '<div class="thumbnail">' + artist.image + '</div>';
          html +=   '<h2>' + artist.name + '</h2>';
          html += '</div>'

        }); //end for each

      $('#results').html(html);

    } //end success function


  });



});
