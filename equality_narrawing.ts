function example(x: string | number, y: string | boolean){
    if(x === y){
        x.toUpperCase();
        y.toUpperCase();
    }else{
        console.log(x);
        console.log(y);
    }
}