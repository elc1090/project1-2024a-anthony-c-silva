function verifiData(inputDate) {
    
    var inputDate2 = new Date(inputDate.value);
    var DataAtual = new Date();
    var ano = inputDate2.getFullYear();
    var anoAtual = new Date();
    
    if(ano < 2000 || ano > anoAtual.getFullYear()){

        inputDate.value = ''
        alert('Você inseriu uma data invalida ! O campo foi zerado.');
        
    }else
    if (inputDate2 < DataAtual) {
       
        alert('Você inseriu uma data anterior a atual !');
    }else 
    if (inputDate2 > DataAtual) {
       
        alert('Você inseriu uma data posterior a atual !');
    } 
    
};