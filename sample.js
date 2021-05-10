function euroConverter(){
    let url = "https://api.ratesapi.io/latest?base=EUR"
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.euro.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.euro.value * obj.rates.USD).toFixed(3);
    document.converter.franc.value = (document.converter.euro.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.euro.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.euro.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.euro.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.euro.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.euro.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.euro.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.euro.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.euro.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.euro.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.euro.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.euro.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.euro.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.euro.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.euro.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.euro.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.euro.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.euro.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.euro.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.euro.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.euro.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.euro.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.euro.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.euro.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.euro.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.euro.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.euro.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.euro.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.euro.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.euro.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function dollarConverter(){
    let url = "https://api.ratesapi.io/latest?base=USD";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.dollar.value * obj.rates.AUD).toFixed(3);
    document.converter.euro.value = (document.converter.dollar.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.dollar.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.dollar.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.dollar.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.dollar.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.dollar.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.dollar.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.dollar.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.dollar.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.dollar.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.dollar.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.dollar.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.dollar.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.dollar.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.dollar.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.dollar.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.dollar.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.dollar.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.dollar.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.dollar.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.dollar.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.dollar.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.dollar.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.dollar.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.dollar.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.dollar.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.dollar.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.dollar.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.dollar.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.dollar.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.dollar.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function poundConverter(){
    let url = "https://api.ratesapi.io/latest?base=GBP";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.pound.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.pound.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.pound.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.pound.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.pound.value * obj.rates.MXN).toFixed(3);
    document.converter.ringgit.value = (document.converter.pound.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.pound.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.pound.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.pound.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.pound.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.pound.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.pound.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.pound.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.pound.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.pound.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.pound.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.pound.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.pound.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.pound.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.pound.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.pound.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.pound.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.pound.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.pound.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.pound.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.pound.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.pound.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.pound.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.pound.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.pound.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.pound.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.pound.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function yenConverter(){
    let url = "https://api.ratesapi.io/latest?base=JPY";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.yen.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.yen.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.yen.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.yen.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.yen.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.yen.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.yen.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.yen.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.yen.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.yen.value * obj.rates.KRW).toFixed(3);
    document.converter.yuan.value = (document.converter.yen.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.yen.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.yen.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.yen.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.yen.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.yen.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.yen.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.yen.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.yen.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.yen.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.yen.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.yen.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.yen.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.yen.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.yen.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.yen.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.yen.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.yen.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.yen.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.yen.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.yen.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.yen.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function rupeeConverter(){
    let url = "https://api.ratesapi.io/latest?base=INR";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.rupee.value * obj.rates.AUD).toFixed(3);
    document.converter.euro.value = (document.converter.rupee.value * obj.rates.EUR).toFixed(3);
    document.converter.dollar.value = (document.converter.rupee.value * obj.rates.USD).toFixed(3);
    document.converter.franc.value = (document.converter.rupee.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.rupee.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.rupee.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.rupee.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.rupee.value * obj.rates.RUB).toFixed(3);
    document.converter.won.value = (document.converter.rupee.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.rupee.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.rupee.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.rupee.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.rupee.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.rupee.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.rupee.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.rupee.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.rupee.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.rupee.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.rupee.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.rupee.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.rupee.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.rupee.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.rupee.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.rupee.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.rupee.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.rupee.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.rupee.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.rupee.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.rupee.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.rupee.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.rupee.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.rupee.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function asdConverter(){
    let url = "https://api.ratesapi.io/latest?base=AUD";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.euro.value = (document.converter.asd.value * obj.rates.EUR).toFixed(3);
    document.converter.dollar.value = (document.converter.asd.value * obj.rates.USD).toFixed(3);
    document.converter.franc.value = (document.converter.asd.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.asd.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.asd.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.asd.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.asd.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.asd.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.asd.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.asd.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.asd.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.asd.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.asd.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.asd.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.asd.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.asd.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.asd.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.asd.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.asd.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.asd.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.asd.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.asd.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.asd.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.asd.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.asd.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.asd.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.asd.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.asd.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.asd.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.asd.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.asd.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.asd.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function skwConverter(){
    let url = "https://api.ratesapi.io/latest?base=KRW";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.won.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.won.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.won.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.won.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.won.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.won.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.won.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.won.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.won.value * obj.rates.INR).toFixed(3);
    document.converter.yen.value = (document.converter.won.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.won.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.won.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.won.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.won.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.won.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.won.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.won.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.won.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.won.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.won.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.won.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.won.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.won.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.won.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.won.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.won.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.won.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.won.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.won.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.won.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.won.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.won.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function rubleConverter(){
    let url = "https://api.ratesapi.io/latest?base=RUB";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.ruble.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.ruble.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.ruble.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.ruble.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.ruble.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.ruble.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.ruble.value * obj.rates.MYR).toFixed(3);
    document.converter.rupee.value = (document.converter.ruble.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.ruble.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.ruble.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.ruble.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.ruble.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.ruble.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.ruble.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.ruble.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.ruble.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.ruble.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.ruble.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.ruble.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.ruble.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.ruble.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.ruble.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.ruble.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.ruble.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.ruble.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.ruble.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.ruble.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.ruble.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.ruble.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.ruble.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.ruble.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.ruble.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function yuanConverter(){
    let url = "https://api.ratesapi.io/latest?base=CNY";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.yuan.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.yuan.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.yuan.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.yuan.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.yuan.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.yuan.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.yuan.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.yuan.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.yuan.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.yuan.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.yuan.value * obj.rates.JPY).toFixed(3);
    document.converter.isk.value = (document.converter.yuan.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.yuan.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.yuan.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.yuan.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.yuan.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.yuan.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.yuan.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.yuan.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.yuan.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.yuan.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.yuan.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.yuan.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.yuan.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.yuan.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.yuan.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.yuan.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.yuan.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.yuan.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.yuan.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.yuan.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.yuan.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function francConverter(){
    let url = "https://api.ratesapi.io/latest?base=CHF";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.franc.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.franc.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.franc.value * obj.rates.EUR).toFixed(3);
    document.converter.peso.value = (document.converter.franc.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.franc.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.franc.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.franc.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.franc.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.franc.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.franc.value * obj.rates.CHF).toFixed(3);
    document.converter.yuan.value = (document.converter.franc.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.franc.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.franc.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.franc.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.franc.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.franc.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.franc.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.franc.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.franc.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.franc.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.franc.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.franc.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.franc.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.franc.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.franc.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.franc.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.franc.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.franc.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.franc.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.franc.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.franc.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.franc.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function ringgitConverter(){
let url = "https://api.ratesapi.io/latest?base=MYR";
let req = new XMLHttpRequest();
req.open("GET",url);
req.send();
req.onload=()=>{
    let obj = JSON.parse(req.response);
    console.log(obj);
    console.log(req);
    document.converter.asd.value = (document.converter.ringgit.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.ringgit.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.ringgit.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.ringgit.value * obj.rates.CHF).toFixed(3);
    document.converter.peso.value = (document.converter.ringgit.value * obj.rates.MXN).toFixed(3);
    document.converter.pound.value = (document.converter.ringgit.value * obj.rates.GBP).toFixed(3);
    document.converter.ruble.value = (document.converter.ringgit.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.ringgit.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.ringgit.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.ringgit.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.ringgit.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.ringgit.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.ringgit.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.ringgit.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.ringgit.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.ringgit.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.ringgit.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.ringgit.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.ringgit.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.ringgit.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.ringgit.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.ringgit.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.ringgit.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.ringgit.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.ringgit.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.ringgit.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.ringgit.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.ringgit.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.ringgit.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.ringgit.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.ringgit.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.ringgit.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}


function pesoConverter(){
    let url = "https://api.ratesapi.io/latest?base=MXN";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.peso.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.peso.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.peso.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.peso.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.peso.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.peso.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.peso.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.peso.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.peso.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.peso.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.peso.value * obj.rates.CNY).toFixed(3);
    document.converter.isk.value = (document.converter.peso.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.peso.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.peso.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.peso.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.peso.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.peso.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.peso.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.peso.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.peso.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.peso.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.peso.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.peso.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.peso.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.peso.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.peso.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.peso.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.peso.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.peso.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.peso.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.peso.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.peso.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function iskConverter(){
    let url = "https://api.ratesapi.io/latest?base=ISK";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.isk.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.isk.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.isk.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.isk.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.isk.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.isk.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.isk.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.isk.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.isk.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.isk.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.isk.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.isk.value * obj.rates.MXN).toFixed(3);
    document.converter.ron.value = (document.converter.isk.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.isk.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.isk.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.isk.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.isk.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.isk.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.isk.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.isk.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.isk.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.isk.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.isk.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.isk.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.isk.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.isk.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.isk.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.isk.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.isk.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.isk.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.isk.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.isk.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function ronConverter(){
    let url = "https://api.ratesapi.io/latest?base=RON";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.ron.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.ron.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.ron.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.ron.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.ron.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.ron.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.ron.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.ron.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.ron.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.ron.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.ron.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.ron.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.ron.value * obj.rates.ISK).toFixed(3);
    document.converter.brl.value = (document.converter.ron.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.ron.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.ron.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.ron.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.ron.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.ron.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.ron.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.ron.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.ron.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.ron.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.ron.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.ron.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.ron.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.ron.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.ron.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.ron.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.ron.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.ron.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.ron.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function brlConverter(){
    let url = "https://api.ratesapi.io/latest?base=BRL";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.brl.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.brl.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.brl.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.brl.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.brl.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.brl.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.brl.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.brl.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.brl.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.brl.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.brl.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.brl.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.brl.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.brl.value * obj.rates.RON).toFixed(3);
    document.converter.bgn.value = (document.converter.brl.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.brl.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.brl.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.brl.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.brl.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.brl.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.brl.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.brl.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.brl.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.brl.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.brl.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.brl.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.brl.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.brl.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.brl.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.brl.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.brl.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.brl.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function bgnConverter(){
    let url = "https://api.ratesapi.io/latest?base=BGN";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.bgn.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.bgn.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.bgn.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.bgn.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.bgn.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.bgn.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.bgn.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.bgn.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.bgn.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.bgn.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.bgn.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.bgn.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.bgn.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.bgn.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.bgn.value * obj.rates.BRL).toFixed(3);
    document.converter.idr.value = (document.converter.bgn.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.bgn.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.bgn.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.bgn.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.bgn.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.bgn.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.bgn.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.bgn.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.bgn.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.bgn.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.bgn.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.bgn.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.bgn.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.bgn.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.bgn.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.bgn.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.bgn.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function idrConverter(){
    let url = "https://api.ratesapi.io/latest?base=IDR";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.idr.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.idr.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.idr.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.idr.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.idr.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.idr.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.idr.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.idr.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.idr.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.idr.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.idr.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.idr.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.idr.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.idr.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.idr.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.idr.value * obj.rates.BGN).toFixed(3);
    document.converter.sgd.value = (document.converter.idr.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.idr.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.idr.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.idr.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.idr.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.idr.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.idr.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.idr.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.idr.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.idr.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.idr.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.idr.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.idr.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.idr.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.idr.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.idr.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function sgdConverter(){
    let url = "https://api.ratesapi.io/latest?base=SGD";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.sgd.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.sgd.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.sgd.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.sgd.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.sgd.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.sgd.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.sgd.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.sgd.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.sgd.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.sgd.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.sgd.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.sgd.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.sgd.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.sgd.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.sgd.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.sgd.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.sgd.value * obj.rates.IDR).toFixed(3);
    document.converter.cad.value = (document.converter.sgd.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.sgd.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.sgd.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.sgd.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.sgd.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.sgd.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.sgd.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.sgd.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.sgd.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.sgd.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.sgd.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.sgd.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.sgd.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.sgd.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.sgd.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function cadConverter(){
    let url = "https://api.ratesapi.io/latest?base=cad";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.cad.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.cad.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.cad.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.cad.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.cad.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.cad.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.cad.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.cad.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.cad.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.cad.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.cad.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.cad.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.cad.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.cad.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.cad.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.cad.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.cad.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.cad.value * obj.rates.SGD).toFixed(3);
    document.converter.isl.value = (document.converter.cad.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.cad.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.cad.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.cad.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.cad.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.cad.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.cad.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.cad.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.cad.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.cad.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.cad.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.cad.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.cad.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.cad.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function islConverter(){
    let url = "https://api.ratesapi.io/latest?base=ILS";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.isl.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.isl.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.isl.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.isl.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.isl.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.isl.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.isl.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.isl.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.isl.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.isl.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.isl.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.isl.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.isl.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.isl.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.isl.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.isl.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.isl.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.isl.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.isl.value * obj.rates.CAD).toFixed(3);
    document.converter.zar.value = (document.converter.isl.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.isl.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.isl.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.isl.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.isl.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.isl.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.isl.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.isl.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.isl.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.isl.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.isl.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.isl.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.isl.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function zarConverter(){
    let url = "https://api.ratesapi.io/latest?base=ZAR";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.zar.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.zar.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.zar.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.zar.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.zar.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.zar.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.zar.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.zar.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.zar.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.zar.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.zar.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.zar.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.zar.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.zar.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.zar.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.zar.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.zar.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.zar.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.zar.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.zar.value * obj.rates.ILS).toFixed(3);
    document.converter.hrk.value = (document.converter.zar.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.zar.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.zar.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.zar.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.zar.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.zar.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.zar.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.zar.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.zar.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.zar.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.zar.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.zar.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function hrkConverter(){
    let url = "https://api.ratesapi.io/latest?base=HRK";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.hrk.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.hrk.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.hrk.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.hrk.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.hrk.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.hrk.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.hrk.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.hrk.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.hrk.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.hrk.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.hrk.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.hrk.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.hrk.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.hrk.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.hrk.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.hrk.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.hrk.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.hrk.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.hrk.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.hrk.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.hrk.value * obj.rates.ZAR).toFixed(3);
    document.converter.czk.value = (document.converter.hrk.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.hrk.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.hrk.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.hrk.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.hrk.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.hrk.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.hrk.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.hrk.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.hrk.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.hrk.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.hrk.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function czkConverter(){
    let url = "https://api.ratesapi.io/latest?base=CZK";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.czk.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.czk.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.czk.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.czk.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.czk.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.czk.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.czk.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.czk.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.czk.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.czk.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.czk.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.czk.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.czk.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.czk.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.czk.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.czk.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.czk.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.czk.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.czk.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.czk.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.czk.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.czk.value * obj.rates.HRK).toFixed(3);
    document.converter.sek.value = (document.converter.czk.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.czk.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.czk.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.czk.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.czk.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.czk.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.czk.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.czk.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.czk.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.czk.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function sekConverter(){
    let url = "https://api.ratesapi.io/latest?base=SEK";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.sek.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.sek.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.sek.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.sek.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.sek.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.sek.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.sek.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.sek.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.sek.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.sek.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.sek.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.sek.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.sek.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.sek.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.sek.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.sek.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.sek.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.sek.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.sek.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.sek.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.sek.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.sek.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.sek.value * obj.rates.CZK).toFixed(3);
    document.converter.dkk.value = (document.converter.sek.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.sek.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.sek.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.sek.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.sek.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.sek.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.sek.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.sek.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.sek.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function dkkConverter(){
    let url = "https://api.ratesapi.io/latest?base=DKK";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.dkk.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.dkk.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.dkk.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.dkk.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.dkk.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.dkk.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.dkk.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.dkk.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.dkk.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.dkk.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.dkk.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.dkk.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.dkk.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.dkk.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.dkk.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.dkk.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.dkk.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.dkk.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.dkk.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.dkk.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.dkk.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.dkk.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.dkk.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.dkk.value * obj.rates.SEK).toFixed(3);
    document.converter.nok.value = (document.converter.dkk.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.dkk.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.dkk.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.dkk.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.dkk.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.dkk.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.dkk.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.dkk.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function nokConverter(){
    let url = "https://api.ratesapi.io/latest?base=NOK";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.nok.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.nok.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.nok.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.nok.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.nok.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.nok.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.nok.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.nok.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.nok.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.nok.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.nok.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.nok.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.nok.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.nok.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.nok.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.nok.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.nok.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.nok.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.nok.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.nok.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.nok.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.nok.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.nok.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.nok.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.nok.value * obj.rates.DKK).toFixed(3);
    document.converter.thb.value = (document.converter.nok.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.nok.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.nok.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.nok.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.nok.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.nok.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.nok.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function thbConverter(){
    let url = "https://api.ratesapi.io/latest?base=THB";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.thb.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.thb.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.thb.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.thb.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.thb.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.thb.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.thb.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.thb.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.thb.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.thb.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.thb.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.thb.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.thb.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.thb.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.thb.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.thb.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.thb.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.thb.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.thb.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.thb.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.thb.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.thb.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.thb.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.thb.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.thb.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.thb.value * obj.rates.NOK).toFixed(3);
    document.converter.nzd.value = (document.converter.thb.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.thb.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.thb.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.thb.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.thb.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.thb.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function nzdConverter(){
    let url = "https://api.ratesapi.io/latest?base=NZD";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.nzd.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.nzd.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.nzd.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.nzd.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.nzd.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.nzd.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.nzd.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.nzd.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.nzd.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.nzd.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.nzd.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.nzd.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.nzd.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.nzd.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.nzd.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.nzd.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.nzd.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.nzd.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.nzd.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.nzd.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.nzd.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.nzd.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.nzd.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.nzd.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.nzd.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.nzd.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.nzd.value * obj.rates.THB).toFixed(3);
    document.converter.tri.value = (document.converter.nzd.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.nzd.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.nzd.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.nzd.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.nzd.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function triConverter(){
    let url = "https://api.ratesapi.io/latest?base=TRY";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.tri.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.tri.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.tri.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.tri.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.tri.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.tri.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.tri.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.tri.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.tri.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.tri.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.tri.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.tri.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.tri.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.tri.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.tri.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.tri.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.tri.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.tri.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.tri.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.tri.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.tri.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.tri.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.tri.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.tri.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.tri.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.tri.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.tri.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.tri.value * obj.rates.NZD).toFixed(3);
    document.converter.hkd.value = (document.converter.tri.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.tri.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.tri.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.tri.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function hkdConverter(){
    let url = "https://api.ratesapi.io/latest?base=HKD";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.hkd.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.hkd.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.hkd.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.hkd.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.hkd.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.hkd.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.hkd.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.hkd.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.hkd.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.hkd.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.hkd.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.hkd.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.hkd.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.hkd.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.hkd.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.hkd.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.hkd.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.hkd.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.hkd.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.hkd.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.hkd.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.hkd.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.hkd.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.hkd.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.hkd.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.hkd.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.hkd.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.hkd.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.hkd.value * obj.rates.TRY).toFixed(3);
    document.converter.pln.value = (document.converter.hkd.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.hkd.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.hkd.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function plnConverter(){
    let url = "https://api.ratesapi.io/latest?base=PLN";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.pln.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.pln.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.pln.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.pln.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.pln.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.pln.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.pln.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.pln.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.pln.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.pln.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.pln.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.pln.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.pln.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.pln.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.pln.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.pln.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.pln.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.pln.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.pln.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.pln.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.pln.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.pln.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.pln.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.pln.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.pln.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.pln.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.pln.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.pln.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.pln.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.pln.value * obj.rates.HKD).toFixed(3);
    document.converter.huf.value = (document.converter.pln.value * obj.rates.HUF).toFixed(3);
    document.converter.php.value = (document.converter.pln.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function hufConverter(){
    let url = "https://api.ratesapi.io/latest?base=HUF";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.huf.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.huf.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.huf.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.huf.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.huf.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.huf.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.huf.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.huf.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.huf.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.huf.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.huf.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.huf.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.huf.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.huf.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.huf.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.huf.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.huf.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.huf.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.huf.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.huf.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.huf.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.huf.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.huf.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.huf.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.huf.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.huf.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.huf.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.huf.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.huf.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.huf.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.huf.value * obj.rates.PLN).toFixed(3);
    document.converter.php.value = (document.converter.huf.value * obj.rates.PHP).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}

function phpConverter(){
    let url = "https://api.ratesapi.io/latest?base=PHP";
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.send();
    req.onload=()=>{
        let obj = JSON.parse(req.response);
        console.log(obj);
        console.log(req);
    document.converter.asd.value = (document.converter.php.value * obj.rates.AUD).toFixed(3);
    document.converter.dollar.value = (document.converter.php.value * obj.rates.USD).toFixed(3);
    document.converter.euro.value = (document.converter.php.value * obj.rates.EUR).toFixed(3);
    document.converter.franc.value = (document.converter.php.value * obj.rates.CHF).toFixed(3);
    document.converter.pound.value = (document.converter.php.value * obj.rates.GBP).toFixed(3);
    document.converter.ringgit.value = (document.converter.php.value * obj.rates.MYR).toFixed(3);
    document.converter.ruble.value = (document.converter.php.value * obj.rates.RUB).toFixed(3);
    document.converter.rupee.value = (document.converter.php.value * obj.rates.INR).toFixed(3);
    document.converter.won.value = (document.converter.php.value * obj.rates.KRW).toFixed(3);
    document.converter.yen.value = (document.converter.php.value * obj.rates.JPY).toFixed(3);
    document.converter.yuan.value = (document.converter.php.value * obj.rates.CNY).toFixed(3);
    document.converter.peso.value = (document.converter.php.value * obj.rates.MXN).toFixed(3);
    document.converter.isk.value = (document.converter.php.value * obj.rates.ISK).toFixed(3);
    document.converter.ron.value = (document.converter.php.value * obj.rates.RON).toFixed(3);
    document.converter.brl.value = (document.converter.php.value * obj.rates.BRL).toFixed(3);
    document.converter.bgn.value = (document.converter.php.value * obj.rates.BGN).toFixed(3);
    document.converter.idr.value = (document.converter.php.value * obj.rates.IDR).toFixed(3);
    document.converter.sgd.value = (document.converter.php.value * obj.rates.SGD).toFixed(3);
    document.converter.cad.value = (document.converter.php.value * obj.rates.CAD).toFixed(3);
    document.converter.isl.value = (document.converter.php.value * obj.rates.ILS).toFixed(3);
    document.converter.zar.value = (document.converter.php.value * obj.rates.ZAR).toFixed(3);
    document.converter.hrk.value = (document.converter.php.value * obj.rates.HRK).toFixed(3);
    document.converter.czk.value = (document.converter.php.value * obj.rates.CZK).toFixed(3);
    document.converter.sek.value = (document.converter.php.value * obj.rates.SEK).toFixed(3);
    document.converter.dkk.value = (document.converter.php.value * obj.rates.DKK).toFixed(3);
    document.converter.nok.value = (document.converter.php.value * obj.rates.NOK).toFixed(3);
    document.converter.thb.value = (document.converter.php.value * obj.rates.THB).toFixed(3);
    document.converter.nzd.value = (document.converter.php.value * obj.rates.NZD).toFixed(3);
    document.converter.tri.value = (document.converter.php.value * obj.rates.TRY).toFixed(3);
    document.converter.hkd.value = (document.converter.php.value * obj.rates.HKD).toFixed(3);
    document.converter.pln.value = (document.converter.php.value * obj.rates.PLN).toFixed(3);
    document.converter.huf.value = (document.converter.php.value * obj.rates.HUF).toFixed(3);

    var cDate = obj.date;
    var para = document.getElementById("obs-date");
    para.innerHTML="";
    var t = document.createTextNode("*Values as published by the European central Bank at the end of " + cDate);
    para.appendChild(t);
    }
}