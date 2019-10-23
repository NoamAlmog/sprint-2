
function init() {
    renderGallery();

}

function renderGallery() {

    var galleryHTML = '';

    galleryHTML += memes.map(card => `<div class="card" onclick="openmodal(${card.id})"><img src="${card.adress}"  alt="" ></div>`).join('');

    document.querySelector('.gallery-content').innerHTML = galleryHTML;

}

function openmodal(elID){
    let meme = getMemeById(elID);
    
    document.querySelector('.modal').classList.add('open');
    
    memeImg = meme.adress;
    renderMeme(memeImg);
}

function closeModal(){
    document.querySelector('.modal').classList.remove('open');
}

