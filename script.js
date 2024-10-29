const apiKey = 'myapikey'; // Replace with your actual API key

async function fetchMovieSuggestions(query) {
  const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === 'True') {
    displaySuggestions(data.Search);
  } else {
    clearSuggestions();
  }
}

function displaySuggestions(movies) {
  const suggestionsDiv = document.getElementById('suggestions');
  suggestionsDiv.innerHTML = '';

  movies.forEach(movie => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion-item');

    suggestionItem.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title} Poster">
      <span><strong>${movie.Title}</strong> (${movie.Year})</span>
    `;

    suggestionItem.addEventListener('click', () => {
      const mediaType = document.getElementById('media-type').value;
      if (mediaType === 'movie') {
        embedMovie(movie.imdbID, movie.Title, movie.Year);
      } else if (mediaType === 'tv-show') {
        embedTVShow(movie.imdbID, movie.Title, movie.Year);
      }
      clearSuggestions();
    });

    suggestionsDiv.appendChild(suggestionItem);
  });
}

function embedMovie(imdbID, title, year) {
  const resultsDiv = document.getElementById('results');
  const embedDiv = document.getElementById('embed-container');
  const selectedSource = document.getElementById('embed-source').value;

  resultsDiv.innerHTML = `<strong>${title}</strong> (${year}) - IMDb ID: <strong>${imdbID}</strong>`;

  let embedLink;
  if (selectedSource === 'embed.su') {
    embedLink = `https://embed.su/embed/movie/${imdbID}`;
  } else if (selectedSource === 'superembed.stream') {
    embedLink = `https://multiembed.mov/?video_id=${imdbID}`;
  } else if (selectedSource === '2embed.cc') {
    embedLink = `https://www.2embed.cc/embed/${imdbID}`;
  } else if (selectedSource === 'vidlink.pro') {
    embedLink = `https://vidlink.pro/movie/${imdbID}`;
  } else if (selectedSource === 'vidsrc.me') {
    embedLink = `https://vidsrc.xyz/embed/movie/${imdbID}`;
  } else if (selectedSource === 'smashy.stream') {
    embedLink = `https://player.smashy.stream/movie/${imdbID}`;
  }

  embedDiv.innerHTML = `<iframe width="800" height="450" src="${embedLink}" frameborder="0" allowfullscreen></iframe>`;
}

function embedTVShow(imdbID, title, year) {
  const resultsDiv = document.getElementById('results');
  const embedDiv = document.getElementById('embed-container');
  const seasonNumber = document.getElementById('season-number').value;
  const episodeNumber = document.getElementById('episode-number').value;
  const selectedSource = document.getElementById('embed-source').value;
  const selectedEpisodeOption = document.getElementById('episode-option')?.value;

  resultsDiv.innerHTML = `<strong>${title}</strong> (${year}) - IMDb ID: <strong>${imdbID}</strong>`;

  let embedLink;
  if (selectedSource === 'vidsrc.me') {
    embedLink = `https://vidsrc.xyz/embed/tv?imdb=${imdbID}&s=${seasonNumber}&e=${episodeNumber}`;
  } else if (selectedSource === 'smashy.stream') {
    embedLink = `https://player.smashy.stream/tv/${imdbID}?s=${seasonNumber}&e=${episodeNumber}`;
  }

  embedDiv.innerHTML = `<iframe width="800" height="450" src="${embedLink}" frameborder="0" allowfullscreen></iframe>`;
}

function clearSuggestions() {
  document.getElementById('suggestions').innerHTML = '';
}

function dismissWarning() {
  document.getElementById('adblock-warning').style.display = 'none';
}

document.getElementById('search-input').addEventListener('input', (e) => {
  const query = e.target.value;
  if (query.length > 2) {
    fetchMovieSuggestions(query);
  } else {
    clearSuggestions();
  }
});

document.getElementById('media-type').addEventListener('change', (e) => {
  if (e.target.value === 'tv-show') {
    document.getElementById('tv-show-details').style.display = 'block';
  } else {
    document.getElementById('tv-show-details').style.display = 'none';
  }
});
