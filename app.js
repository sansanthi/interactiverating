const submitBtn = document.querySelector('.rating__btn');
const rating = document.querySelector('.rating');
const ratingNumber = document.querySelector('#number');
submitBtn.addEventListener('click', function(){
    event.preventDefault();
    var ratingStep = document.querySelector('input[name="step"]:checked');
    if(ratingStep) {
        ratingNumber.textContent = ratingStep.value;
        rating.classList.add('submit');
    }
})