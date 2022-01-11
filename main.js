const post = [
    {
        id: 1,
        user: 'Floriano Delishaj',
        userPhoto:'https://unsplash.it/300/300?image=',
        data: '06-30-2021',
        postText:'Ciao',
        postImage:'https://unsplash.it/300/300?image=',
        likes: 71,
    },
    {
        id: 2,
        user: 'Micheal Jordan',
        userPhoto:'https://unsplash.it/300/300?image=',
        data: '07-02-2021',
        postText:'Winner',
        postImage:'https://unsplash.it/300/300?image=',
        likes: 4721,
    },
    {
        id: 3,
        user:'Micheal Scoffield',
        userPhoto:'https://unsplash.it/300/300?image=',
        data: '01-01-2022',
        postText:'Happy new year',
        postImage:'https://unsplash.it/300/300?image=',
        likes: 921,
    },
]

const containerPost = document.getElementById('container');

for (i = 0; i < post.length; i++) {
    containerPost.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post[i].userPhoto}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post[i].user}</div>
                <div class="post-meta__time">${post[i].data}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post[i].postText}</div>
    <div class="post__image">
        <img src="${post[i].postImage}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${post[i].id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${post[i].id}" class="js-likes-counter">${post[i].likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
}



const likeButton = document.querySelectorAll('.js-like-button');
let counterLike = 0;

for (let i = 0; i < likeButton.length; i++) {
likeButton[i].addEventListener('click', function() {

    const likeCounter = document.getElementById(`like-counter-${post[i].id}`)
    likeButton[i].classList.toggle('like-button--liked');
    likeCounter.innerHTML = post[i].likes++

})
}