var rateNumber = undefined;

function getContent(element) {
    rateNumber = element.textContent;
    
    element.classList.add("bg-orange","text-white")
    console.log(rateNumber)
    
    
};


document.getElementById("submit-btn").addEventListener("click",selectRating)


function selectRating(){
    let outputRate = document.getElementById("output-value") 
    if(rateNumber){
        outputRate.textContent = rateNumber;
    
        let firstCard = document.getElementById("initial-article")
        firstCard.classList.add("hidden");
        let feedBack = document.getElementById("feedback-note");
        feedBack.classList.remove("hidden");
    }
    else {
        alert("please select rate number")
    }
}



