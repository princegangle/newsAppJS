const API_KEY = "0b6d97996e1546fa9da1b81298cf5ee6"
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener("load", () => GetNews("india"));

async function GetNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`) 
    const data = await res.json()
    console.log(data)
    bindData(data.articles)
}

const bindData = (articles) => {
    const cardcontiner = document.getElementById("card-continar");
    const teampletnewscatd = document.getElementById("template-news-card");

    cardcontiner.innerHTML = "";    
    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardclone = teampletnewscatd.content.cloneNode(true);
        Cardinfo(cardclone,article)
        cardcontiner.appendChild(cardclone)
    });


}
function Cardinfo (cardclone,article){
const articleImage = cardclone.querySelector("#articleImage")
const articleTitle = cardclone.querySelector("#articleTitle")
const articleSource = cardclone.querySelector("#articlesource")
const articleDese = cardclone.querySelector("#articleDese")
articleImage.src =article.urlToImage;
articleTitle.innerHTML=article.title
articleDese.innerHTML=article.description;

const date =new Date(article.publishedAt).toLocaleString("en-US" ,{timeZone:"Asia/jakarta"})
articleSource.innerHTML = `${article.source.name}${date}`;
}