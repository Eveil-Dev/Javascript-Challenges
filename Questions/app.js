const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    const btn = question.querySelector('.toggle-btn')
    btn.addEventListener('click', function(e){
        questions.forEach(function(item){
            if(item != question){
                item.classList.remove('show-text')
            }else{
                item.classList.toggle('show-text')
            }
        })
    })
})