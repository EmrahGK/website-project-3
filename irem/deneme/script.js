function myFunction(){
    let isim = document.forms["form"]["name"].value;
    let soyisim = document.forms["form"]["surname"].value;
    
    if(isim == "" || soyisim == ""){
        alert("Lütfen geçerli bir ad girin")
    }

    else{
        alert("Adınız: " + isim +" " +soyisim)
    }


}