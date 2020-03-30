function calc() {

  var proc = parseInt(document.querySelector("input[name=stavka]:checked").value);

  var s = document.getElementById("s-summa").value;
  s = parseFloat(s);

  var t = document.getElementById("srok-time").value;
  t = parseInt(t);

  var dohod = s * ((proc / (12 * 100)) * t);
  
  var nalog = document.querySelector("input[name=uchet]:checked");
  
  if (nalog != null) {
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

