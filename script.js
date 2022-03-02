console.log("linked");

const aboutBtn = document.getElementById("aboutBtn");
const home = document.getElementById("home");
const aboutSection = document.getElementById("about");
const indexSection = document.getElementById("index");
const selectCountry = document.getElementById("selectCountry");
const searchSubmit = document.getElementById("searchSubmit");
const refresh = document.getElementById("refresh");
let searchByCountry = "";

function searchResults() {
    const searchWord = document.getElementById("searchTerm").value;
    let searchUrl;
    searchByCountry = selectCountry.value;
    
    console.log(searchWord)

    if((searchByCountry !== "") && (searchWord !== "")) {
        console.log("double search");
        const searchByWord = `q=${searchWord}`;
        
        searchUrl = `https://gnews.io/api/v4/top-headlines?${searchByWord}${searchByCountry}token=ebdda3382888292a0c2931d963424f67`;

        $("#cardContainer").empty();

        $.ajax({
            method: "GET",
            url: searchUrl,
    
            success: function(data) {
                console.log(data);
    
                for(let i = 0; i < data.articles.length; i++) {
                    console.log(data.articles[i].source.name)
                    let currentArticle = data.articles[i]
                    $("#cardContainer").append(
                        `
                            <div class="card" style="width: 18rem;">
                                <img src=${data.articles[i].image} class="card__img" alt="...">
                                <div class="card-body">
                                    <h5 class="card__title">${data.articles[i].title}</h5>
                                    <p class="card__p">${data.articles[i].publishedAt}</p>
                                </div>
                            </div>
                        `
                    );
                }
    
            }
        });

    } else if ((searchByCountry !== "") && (searchWord === "")) {
        console.log("country search")
        searchUrl = `https://gnews.io/api/v4/top-headlines?${searchByCountry}token=ebdda3382888292a0c2931d963424f67`;

        $("#cardContainer").empty();

        $.ajax({
            method: "GET",
            url: searchUrl,
    
            success: function(data) {
                console.log(data);
    
                for(let i = 0; i < data.articles.length; i++) {
                    console.log(data.articles[i].source.name)
                    let currentArticle = data.articles[i]
                    $("#cardContainer").append(
                        `
                            <div class="card" style="width: 18rem;">
                                <img src=${data.articles[i].image} class="card__img" alt="...">
                                <div class="card-body">
                                    <h5 class="card__title">${data.articles[i].title}</h5>
                                    <p class="card__p">${data.articles[i].publishedAt}</p>
                                </div>
                            </div>
                        `
                    );
                }
    
            }
        });

    } else if ((searchByCountry === "") && (searchWord !== "")) {
        console.log("word search")
        const searchByWord = `q=${searchWord}&`
        searchUrl = `https://gnews.io/api/v4/top-headlines?${searchByWord}token=ebdda3382888292a0c2931d963424f67`;

        $("#cardContainer").empty();

        $.ajax({
            method: "GET",
            url: searchUrl,
    
            success: function(data) {
                console.log(data);
    
                for(let i = 0; i < data.articles.length; i++) {
                    console.log(data.articles[i].source.name)
                    let currentArticle = data.articles[i]
                    $("#cardContainer").append(
                        `
                            <div class="card" style="width: 18rem;">
                                <img src=${data.articles[i].image} class="card__img" alt="...">
                                <div class="card-body">
                                    <h5 class="card__title">${data.articles[i].title}</h5>
                                    <p class="card__p">${data.articles[i].publishedAt}</p>
                                </div>
                            </div>
                        `
                    );
                }
    
            }
        });

    }

    

}

searchSubmit.addEventListener("click", searchResults);


let url = `https://gnews.io/api/v4/top-headlines?token=ebdda3382888292a0c2931d963424f67`;

console.log(url);
$("#cardContainer").empty();

$.ajax({
    method: "GET",
    url: url,

    success: function(data) {
        console.log(data);

        for(let i = 0; i < data.articles.length; i++) {
            console.log(data.articles[i].source.name)
            let currentArticle = data.articles[i]
            $("#cardContainer").append(
                `
                    <div class="card" style="width: 18rem;">
                        <img src=${data.articles[i].image} class="card__img" alt="...">
                        <div class="card-body">
                            <h5 class="card__title">${data.articles[i].title}</h5>
                            <p class="card__p">${data.articles[i].publishedAt}</p>
                        </div>
                    </div>
                `
            );
        }

    }
});

function refreshClicked() {
    document.getElementById("searchTerm").value = "";

    let url = `https://gnews.io/api/v4/top-headlines?token=ebdda3382888292a0c2931d963424f67`;

    console.log(url);
    $("#cardContainer").empty();

    $.ajax({
        method: "GET",
        url: url,

        success: function(data) {
            console.log(data);

            for(let i = 0; i < data.articles.length; i++) {
                console.log(data.articles[i].source.name)
                let currentArticle = data.articles[i]
                $("#cardContainer").append(
                    `
                        <div class="card" style="width: 18rem;">
                            <img src=${data.articles[i].image} class="card__img" alt="...">
                            <div class="card-body">
                                <h5 class="card__title">${data.articles[i].title}</h5>
                                <p class="card__p">${data.articles[i].publishedAt}</p>
                            </div>
                        </div>
                    `
                );
            }

        }
    });
}


function aboutClicked() {
    aboutSection.style.display = ("block");
    indexSection.style.display = ("none");
}

function homeClicked() {
    aboutSection.style.display = ("none");
    indexSection.style.display = ("block");
}

function selectCountryValue() {
    console.log(selectCountry);
}

aboutBtn.addEventListener("click", aboutClicked);
home.addEventListener("click", homeClicked);
refresh.addEventListener("click", refreshClicked)