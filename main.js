var arr = [];
function calc(p,r,m){
    arr =[];
    var tmpA = 0;
    for(var x =0; x < m; x++){
    	tmpA = parseFloat(tmpA + (p * (r / m)) / 100).toFixed(2);
        arr.push(parseFloat(tmpA).toFixed(2));
    }
}


calc(700000,10,12);