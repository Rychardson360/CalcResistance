function pegarDados(){
    document.querySelector(".final").style.display = "block";
    let PriFaixa=document.getElementById('PriFaixa').value;
    let SegFaixa=document.getElementById('SegFaixa').value;
    let TerFaixa=document.getElementById('TerFaixa').value;
    let QuaFaixa=document.getElementById('QuaFaixa').value;
    let QuiFaixa=document.getElementById('QuiFaixa').value;
    let con = parseFloat(PriFaixa + SegFaixa + TerFaixa);
    let result = con * QuaFaixa;
    let tol0 = result * QuiFaixa;
    let tol1 = result - tol0;
    let tol2 = result + tol0;
    document.getElementById('result').innerHTML = result + ' Ω Omhs,' + ' Tolerância Mínima: ' + tol1 + ' Ω Omhs e Tolerância Máxima: ' + tol2 + ' Ω Omhs';
}