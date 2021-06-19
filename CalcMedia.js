


function adicionar(){
    
    let cal1 = window.document.getElementById("med1");
    let calc1 = Number(cal1.value);

    //let num1 = document.cal.txt.value;
    let num1 = document.cal.txt.value;
    document.cal.txt.value = num1  + `${calc1}`;
     
    
}
function calcular(){
    
    let cal1 = window.document.getElementById("med1");
    let calc1 = Number(cal1.value);
        let media  = calc1/2;
            document.cal.txt.value = `${media}`;


}

function apagar(){
    document.cal.txt.value = "";

}