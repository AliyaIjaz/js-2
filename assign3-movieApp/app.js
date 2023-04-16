(
    
    async function () {
    const response = await fetch("./data.json");
    const movies = await response.json();
    console.log(movies);
    
const movieList = document.getElementById('movie-list');

    function displayMoviesDetails(queryResults) {
       let count = 1;
        queryResults.forEach(function (result) {
            let dt = new Date(result.release_date);
            const tr = document.createElement('tr');
            const rowData = `
            <td>${count}</td><td><img src=${result.homepage}/>&nbsp;&nbsp;${result.title}</td><td>${dt.getFullYear()}</td>
            `;
            tr.innerHTML = rowData;
            movieList.appendChild(tr);
            count++;
        })
    }



    let searchRequests = ['all','all','all','all'];

    function search(searchReq) {
        console.log(searchReq);

        const results = movies.filter(function (movie) {
            return (movie.genres.includes(searchReq[0])) //&&
           // (movie.release_date === searchReq[1]) && 
            //(movie.original_language === searchReq[2]) &&
            //(movie.vote_average === searchReq[3]))
        });
        console.log('results.... ',results);
        displayMoviesDetails(results);
    }


    function getGenres() {
        let allGenres = [];

        for (let i = 0; i < movies.length; i++) {
            const gens = movies[i].genres;
            if (typeof gens !== 'string') {

                for (let j = 0; j < gens.length; j++) {
                    if (allGenres.includes(gens[j])) {
                        continue;
                    } else {
                        allGenres.push(gens[j]);
                    }
                }
            }
        }
        // console.log('all genres...', allGenres);
        return allGenres;
    }

    function getYears() {
        let allYears = [];

        for (let i = 0; i < movies.length; i++) {
            const dt = movies[i].release_date;
            let date = new Date(dt);
            let year = date.getFullYear();
            if (allYears.includes(year)) {
                // continue;
            } else {
                allYears.push(year);
            }
        }
        allYears.sort().reverse();
        return allYears;
    }

    function getLang() {
        let allLang = [];

        for (let i = 0; i < movies.length; i++) {
            let lang = movies[i].original_language;
            if (allLang.includes(lang)) {
                // continue;
            } else {
                allLang.push(lang);
            }
        }
        return allLang;
    }
    function getRating() {
        let allRating = [];

        for (let i = 0; i < movies.length; i++) {
            let rating = movies[i].vote_average;
            if (allRating.includes(rating)) {
                // continue;
            } else {
                allRating.push(rating);
            }
        }
        allRating.sort().reverse();
        return allRating;
    }
    const genre = document.getElementById('genre');
    const year = document.getElementById('year');
    const lang = document.getElementById('lang');
    const rating = document.getElementById('rating');


    let allGenres = getGenres();
    console.log(allGenres);

    let allYears = getYears();
    console.log('all years...', allYears);

    let allLang = getLang();
    console.log('all Languages...', allLang);

    let allRating = getRating();
    console.log('all Rating...', allRating);

    allGenres.forEach(function (ele) {
        genre.options[genre.options.length] = new Option(ele, ele);
    })

    allYears.forEach(function (ele) {
        year.options[year.options.length] = new Option(ele, ele);
    })

    allLang.forEach(function (ele) {
        lang.options[lang.options.length] = new Option(ele, ele);
    })

    allRating.forEach(function (ele) {
        rating.options[rating.options.length] = new Option(ele, ele);
    })

    genre.addEventListener('change',function(){
        console.log(genre.value);
        searchRequests[0] = genre.value;
        search(searchRequests);
    });

    year.addEventListener('change',function(){
        console.log(year.value);
        searchRequests[1] = year.value;
        search(searchRequests);
    });
    lang.addEventListener('change',function(){
        console.log(lang.value);
        searchRequests[2] = lang.value;
        search(searchRequests);
    })
    rating.addEventListener('change',function(){
        console.log(rating.value);
        searchRequests[3] = rating.value;
        search(searchRequests);
    })


})();
