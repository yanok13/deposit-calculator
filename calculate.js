function calc() {
  var checkProcElem = document.querySelector("input[name=stavka]:checked");
  var proc = parseInt(checkProcElem.value);
  var calcNalog = checkProcElem.dataset.calcNalog;

  var s = document.getElementById("s-summa").value;
  s = parseFloat(s);

  var t = document.getElementById("srok-time").value;
  t = parseInt(t);

  var mr = document.getElementById("mr-mounth-replenishment").value;
  mr = parseFloat(mr);

  var mounthRep = 0;
  if (!isNaN(mr)) {
    for (var i = 0; i < t; i++) {
      mounthRep = mounthRep + mr;
    }
    s = mounthRep + s;
  }
  
  var dohod = s * ((proc / (12 * 100)) * t);
  
  var nalog = document.querySelector("input[name=uchet]:checked");
  
  if (nalog != null && calcNalog == "1") {
    nalog = nalog.value;
    nalog = parseFloat(nalog);
    nalog = nalog * dohod;
    dohod = dohod - nalog;
  }

  dohod = dohod + s;

  if (!isNaN(s) && !isNaN(dohod)) {
    document.getElementById("out-vklad").innerHTML = s + " грн";
    document.getElementById("out-poluchil").innerHTML = dohod + " грн";
  }
}  

