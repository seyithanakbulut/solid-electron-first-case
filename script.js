
let marulSayisi = 5
let paketSosSayisi = 5
let soganSayisi = 5
let tursuSayisi = 5
let domatesSayisi = 5
let ekmekSayisi = 5
let patatesSayisi = 5
let kolaSayisi = 5

let tavukSayisi = 5
let kofteSayisi = 5

var marulEklendi = "Marul "
var paketSosEklendi = "Paket Sos"
var soganEklendi = " Sogan"
var tursuEklendi = "Tursu"
var domatesEklendi = "Domates"

var tavukEklendi = " Tavuk"
var kofteEklendi = "Köfte"

var menu = []

let sayac = 0



function siparisAl() {
    if ((document.getElementById("kola").checked === true) && (document.getElementById("ekmek").checked === true) && (document.getElementById("patates").checked === true)) {
        window.setTimeout(() => {
            document.getElementById("step11").checked = true
            document.getElementById("step1").innerHTML = 'Siparişiniz Hazırlanıyor...'
            document.getElementById("step1").style.background = "green"

        }, 1000)
        stokKontrolu();
    }
    else {
        alert("Kola , ekmek ve patates eklemek zorundasınız! Lütfen tekrar sipariş veriniz. Diğer seçenekler konusunda serbestsiniz :) ")
    }

    document.getElementById("step44").addEventListener("click", () => {
        servisTepsisi()
    })
}
function stokKontrolu() {

    window.setTimeout(() => {
        if (marulSayisi > 0 && paketSosSayisi > 0 && soganSayisi > 0 && tursuSayisi > 0 && domatesSayisi > 0 && ekmekSayisi > 0 && patatesSayisi > 0 && kolaSayisi > 0 && tavukSayisi > 0 && ekmekSayisi > 0 && kofteSayisi > 0) {
            document.getElementById("step2").innerHTML = 'Stoklar Yeterli'
            document.getElementById("step2").style.background = "green"
            document.getElementById("step22").checked = true
        }
        else {
            alert("Yetersiz stok olduğundan siparişiniz iptal edilmiştir.")
        }
        document.getElementById("kofteAndTavuk").style.display = ""
    }, 3000)
    kalanStok()

}
function kalanStok() {
    if (document.getElementById("marul").checked === true) {
        marulSayisi = marulSayisi - 1
        menu.push(marulEklendi)

    }
    if (document.getElementById("paketSos").checked === true) {
        paketSosSayisi = paketSosSayisi - 1
        menu.push(paketSosEklendi)

    }
    if (document.getElementById("sogan").checked === true) {
        soganSayisi = soganSayisi - 1
        menu.push(soganEklendi)
    }
    if (document.getElementById("tursu").checked === true) {
        tursuSayisi = tursuSayisi - 1
        menu.push(tursuEklendi)
    }
    if (document.getElementById("domates").checked === true) {
        domatesSayisi = domatesSayisi - 1
        menu.push(domatesEklendi)
    }
    if (document.getElementById("ekmek").checked === true) {
        ekmekSayisi = ekmekSayisi - 1
    }
    if (document.getElementById("patates").checked === true) {
        patatesSayisi = patatesSayisi - 1
    }
    if (document.getElementById("kola").checked === true) {
        kolaSayisi = kolaSayisi - 1

    }

}
function koftemiTavukmu() {

    window.setTimeout(() => {
        if (document.getElementById("buttonTavukId").checked) {
            tavukPisirme()
            document.getElementById("step3").innerHTML = 'Tavuk seçildi'
            document.getElementById("buttonkofteId").style.display = "none"
            document.getElementById("kofteYazi").style.display = "none"
            menu.push(tavukEklendi)
            tavukSayisi -= tavukSayisi
        }
        if (document.getElementById("buttonkofteId").checked) {
            document.getElementById("step3").innerHTML = 'Köfte seçildi'
            document.getElementById("buttonTavukId").style.display = "none"
            document.getElementById("tavukYazi").style.display = "none"
            document.getElementById("pisirmeSecenekler").style.display = ""
            menu.push(kofteEklendi)
            kofteSayisi -= kofteSayisi
        }

    }, 1000)

}
function hamburgerYapimi() {

    window.setTimeout(() => {

        document.getElementById("step3").innerHTML = 'Hamburger Malzemeleri birleştirildi : ' + menu
        document.getElementById("step3").style.background = "green"
        document.getElementById("step33").checked = true
        sayac++
    }, 2000)

}
function azPismisKofte() {
    if (document.getElementById("azPismis").checked) {
        window.setTimeout(() => {
        }, 2000)

        document.getElementById("step3").innerHTML = 'Köfte az pişti'

    }
    if (document.getElementById("step3").innerHTML = 'Köfte az pişti') {
        hamburgerYapimi()
    }
}


function ortaPismisKofte() {
    if (document.getElementById("ortaPismis").checked) {
        window.setTimeout(() => {
        }, 3000)
        document.getElementById("step3").innerHTML = 'Köfte orta pişti'

    }
    if (document.getElementById("step3").innerHTML = 'Köfte orta pişti') {
        hamburgerYapimi()
    }

}

function cokPismisKofte() {
    if (document.getElementById("cokPismis").checked) {
        window.setTimeout(() => {
        }, 4000)
        document.getElementById("step3").innerHTML = 'Köfte çok pişti'

    }
    if (document.getElementById("step3").innerHTML = 'Köfte çok pişti') {
        hamburgerYapimi()
    }
}
function tavukPisirme() {
    window.setTimeout(() => {
        document.getElementById("step3").innerHTML = 'Tavuk Pişti.'
        hamburgerYapimi()
    }, 3000)

}
function patatesleriKizart() {

    window.setTimeout(() => {
        document.getElementById("step4").innerHTML = 'Patatesler Kızardı'
        document.getElementById("step4").style.background = "green"
        document.getElementById("step44").checked = true
        sayac++
    }, 5000)


}
function icecegiHazirla() {
    window.setTimeout(() => {
        document.getElementById("step5").innerHTML = 'İçeçek Hazırlandı'
        document.getElementById("step5").style.background = "green"
        document.getElementById("step55").checked = true
        sayac++
    }, 2000)


}

function ucDortBes() {
    koftemiTavukmu()
    patatesleriKizart()
    icecegiHazirla()



}

function servisTepsisi() {
    window.setTimeout(() => {
        document.getElementById("step6").innerHTML = 'Servis Tepsisi Hazır.'
        document.getElementById("step6").style.background = "green"
        document.getElementById("step66").checked = true
        sayac++
    }, 1000)

}

function servisYap() {
    window.setTimeout(() => {
        document.getElementById("step7").innerHTML = 'Müşteriye servis edildi'
        document.getElementById("step7").style.background = "green"
        document.getElementById("step77").checked = true
    }, 1000)

}

var id=setInterval(()=>  {
    if(sayac===3){
        servisTepsisi()
      
    }
    if(sayac===4){
        servisYap()
        clearInterval(id)
    }
},500)




