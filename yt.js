// YouTube video ID
var videoID = "wWN6hZu9jjE";

// Fetch video info (using a proxy to avoid CORS errors)
fetch('https://cors-anywhere.herokuapp.com/' + "https://youtube.com/get_video_info?video_id=" + videoID).then(response => {

  if (response.ok) {
    response.text().then(ytData => {
      
      // parse response to find audio info
      var ytData = parse_str(ytData);
      var getAdaptiveFormats = JSON.parse(ytData.player_response).streamingData.adaptiveFormats;
      var findAudioInfo = getAdaptiveFormats.findIndex(obj => obj.audioQuality);
      
      // get the URL for the audio file
      var audioURL = getAdaptiveFormats[findAudioInfo].url;
      
      // update the <audio> element src
      var youtubeAudio = document.getElementById('youtube1');
      youtubeAudio.src = audioURL;
      
    });
  }
});


function parse_str(str) {
  return str.split('&').reduce(function(params, param) {
    var paramSplit = param.split('=').map(function(value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}
// YouTube video ID
var videoID = "Qg1qZq5yjps";

// Fetch video info (using a proxy to avoid CORS errors)
fetch('https://cors-anywhere.herokuapp.com/' + "https://youtube.com/get_video_info?video_id=" + videoID).then(response => {

  if (response.ok) {
    response.text().then(ytData => {
      
      // parse response to find audio info
      var ytData = parse_str(ytData);
      var getAdaptiveFormats = JSON.parse(ytData.player_response).streamingData.adaptiveFormats;
      var findAudioInfo = getAdaptiveFormats.findIndex(obj => obj.audioQuality);
      
      // get the URL for the audio file
      var audioURL = getAdaptiveFormats[findAudioInfo].url;
      
      // update the <audio> element src
      var youtubeAudio = document.getElementById('youtube2');
      youtubeAudio.src = audioURL;
      
    });
  }
});


function parse_str(str) {
  return str.split('&').reduce(function(params, param) {
    var paramSplit = param.split('=').map(function(value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}
// YouTube video ID
var videoID = "r35M6AI5S2A";

// Fetch video info (using a proxy to avoid CORS errors)
fetch('https://cors-anywhere.herokuapp.com/' + "https://youtube.com/get_video_info?video_id=" + videoID).then(response => {

  if (response.ok) {
    response.text().then(ytData => {
      
      // parse response to find audio info
      var ytData = parse_str(ytData);
      var getAdaptiveFormats = JSON.parse(ytData.player_response).streamingData.adaptiveFormats;
      var findAudioInfo = getAdaptiveFormats.findIndex(obj => obj.audioQuality);
      
      // get the URL for the audio file
      var audioURL = getAdaptiveFormats[findAudioInfo].url;
      
      // update the <audio> element src
      var youtubeAudio = document.getElementById('youtube3');
      youtubeAudio.src = audioURL;
      
    });
  }
});


function parse_str(str) {
  return str.split('&').reduce(function(params, param) {
    var paramSplit = param.split('=').map(function(value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}
// YouTube video ID
var videoID = "Q6D_Girbs_E";

// Fetch video info (using a proxy to avoid CORS errors)
fetch('https://cors-anywhere.herokuapp.com/' + "https://youtube.com/get_video_info?video_id=" + videoID).then(response => {

  if (response.ok) {
    response.text().then(ytData => {
      
      // parse response to find audio info
      var ytData = parse_str(ytData);
      var getAdaptiveFormats = JSON.parse(ytData.player_response).streamingData.adaptiveFormats;
      var findAudioInfo = getAdaptiveFormats.findIndex(obj => obj.audioQuality);
      
      // get the URL for the audio file
      var audioURL = getAdaptiveFormats[findAudioInfo].url;
      
      // update the <audio> element src
      var youtubeAudio = document.getElementById('youtube4');
      youtubeAudio.src = audioURL;
      
    });
  }
});


function parse_str(str) {
  return str.split('&').reduce(function(params, param) {
    var paramSplit = param.split('=').map(function(value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}
console.log("y u no work!")