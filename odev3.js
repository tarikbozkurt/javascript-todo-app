
//burada her bir "yapılacaklar" üyesinin sağına bir çarpı kapatma iconu koyduk.
let myNodeList = document.getElementsByTagName('li');
let i;

for (i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7')
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//burada her bir oluşturulan "yapılacaklara bir kapatma fonksiyonu atadık"
let close = document.getElementsByClassName("close");
let y;

for (y = 0; y < close.length; y++) {
    close[y].onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';

    }
}

//checked sembolü tıklandığı zaman liste içerisinde

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


//yeni todo eklemek
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}