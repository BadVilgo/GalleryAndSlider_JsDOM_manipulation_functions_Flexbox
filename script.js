
//// slider ////

let b = 2;

function next() {
    b++;
    let a = b-1;
    let c = b+1;
    console.log(a,b,c);

    if (c>9) {  // usuwa bug pojawiających się pustych zdjęć
        a = 7;
        b = 8;
        c = 9;
        return;
        
    } else{  
        document.getElementsByClassName("img1")[0].innerHTML = "<img src='img/"+a+".jpg'>";
        document.getElementsByClassName("img2")[0].innerHTML = "<img src='img/"+b+".jpg'>";
        document.getElementsByClassName("img3")[0].innerHTML = "<img src='img/"+c+".jpg'>";
    }
}

function previous() {
    b--;
    let a = b-1;
    let c = b+1;
    console.log(a,b,c);

    if (a<1) {
        a = 1;
        b = 2;
        c = 3;
        return;
        
    } else{
        document.getElementsByClassName("img1")[0].innerHTML = "<img src='img/"+a+".jpg'>";
        document.getElementsByClassName("img2")[0].innerHTML = "<img src='img/"+b+".jpg'>";
        document.getElementsByClassName("img3")[0].innerHTML = "<img src='img/"+c+".jpg'>";
    }
}

//// galeria ////

function galleryOpen(){
    document.getElementsByClassName("galleryHidden")[0].style.display = "flex";
}

function galleryClose(){
    document.getElementsByClassName("galleryHidden")[0].style.display = "none";
}







