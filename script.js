function removeFromArray(arreglo,item){
    const newArray = arreglo.filter(elemento => elemento !== item);
    console.log(newArray);
}

removeFromArray([1,2,3,4,5],3);
removeFromArray(["a","b","c","d"],"c");