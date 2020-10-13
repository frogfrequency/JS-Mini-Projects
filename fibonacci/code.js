function generateFibo() {

    var fibo = [0,1];
    
    for (i=0; i<1000; i++) {
        
        fibo.push(fibo[i] + fibo[i+1])
  
    }


    const outputElement = document.getElementById('output');
    outputElement.innerHTML = fibo;

    //console.log(fibo);
}
