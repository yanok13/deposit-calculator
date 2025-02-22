function calc() {
  const checkProcElem = document.querySelector("input[name=stavka]:checked");
  const proc = parseInt(checkProcElem.value);
  const calcNalog = checkProcElem.dataset.calcNalog;

  var summaVklada = document.getElementById("s-summa").value;
  summaVklada = parseFloat(summaVklada);

  var srok = document.getElementById("srok-time").value;
  srok = parseInt(srok);

  if (srok <= 1 || srok >= 120) {
    return;
  }

  var monthReplen = document.getElementById("input-month-replenishment").value;
  monthReplen = parseFloat(monthReplen);

  var dohod = 0;

  if (!isNaN(monthReplen)) {
    for (var i = 0; i < srok; i++) {
      summaVklada += monthReplen;
      dohod += summaVklada * (proc / (12 * 100));
    }
  } else {
    dohod = summaVklada * ((proc / (12 * 100)) * srok);
  }

  const nalogElem = document.querySelector("input[name=uchet]:checked");

  if (nalogElem != null && calcNalog == "1") {
    const nalogKoef = parseFloat(nalogElem.value);
    const nalogSum = dohod * nalogKoef;
    dohod -= nalogSum;
  }

  if (!isNaN(summaVklada) && !isNaN(dohod)) {
    document.getElementById("out-vklad").innerHTML = summaVklada + " грн";
    document.getElementById("out-poluchil").innerHTML = dohod + summaVklada + " грн";
  }
}
