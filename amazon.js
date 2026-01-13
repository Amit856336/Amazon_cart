// url for all options product


let val = document.getElementById("option");
val.addEventListener("change",function(){
    let url = this.value;
    if(url!=""){
        window.location.href=url;
    }
    
    // event for show all signup
    
});
let even = document.getElementById("Eve");
let data = document.getElementById("drop");
even.addEventListener("click",function(e){
    e.stopPropagation()
    if(data.classList.contains("dro")){
        data.classList.remove("dro");
        window.location.href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
        even.style.padding="10px";
        even.style.border="1px solid white";
    }else{
        data.classList.add("dro")
        puter.classList.remove("put")
    }
});

// show all languages

let puter = document.getElementById("lang-box");
let check = document.getElementById("Event");
check.addEventListener("click",function(e){
    e.stopPropagation()
    if(puter.classList.contains("put")){
        puter.classList.remove("put");
        window.location.href="https://www.amazon.in/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang";
        check.style.padding="10px";
        check.style.border="1px solid white";
    }else{
        puter.classList.add("put");
        data.classList.remove("dro");
    }
});


// for document 
document.addEventListener("click",(e)=>{
    puter.classList.remove("put");
    data.classList.remove("dro");
});


// slider

let alll = document.getElementById("alll");
let slide = document.getElementById("slide");
let cross = document.getElementById("cross");
let opa = document.getElementById("overlay");
alll.addEventListener("click",function(){
    slide.classList.toggle("show");
    opa.classList.toggle("show");
    cross.classList.toggle("cross");
});
cross.addEventListener("click",function(){
    slide.classList.toggle("show");
    opa.classList.toggle("show");
    cross.classList.toggle("cross");
});

opa.addEventListener("click",(e)=>{
    slide.classList.remove("show");
    cross.classList.remove("cross");
    opa.classList.remove("show");
});


// slide banner image

let left = document.getElementById("leftarow");
let right = document.getElementById("rightarow");
let images = document.querySelector(".images");
let slides = document.querySelectorAll(".hlw");

let index = 0;
let loaded = 0;
const lastIndex = slides.length - 1;

slides.forEach(img => {
  if (img.complete) {
    loaded++;
  } else {
    img.addEventListener("load", () => {
      loaded++;
    });
  }
});

function change(){
  images.style.transform = `translateX(-${index * 100}%)`;
}

window.addEventListener("load", function () {
  right.addEventListener("click", function () {
    if (loaded !== slides.length) return;

    if (index < lastIndex) {
      index++;
    } else {
      index = 0;
    }
    change();
  });
});
window.addEventListener("load",function(){
    left.addEventListener("click",function(){
        if(index > 0){
            index--;
        }
        else{
            index = lastIndex;
        }
        change();
    });
})
