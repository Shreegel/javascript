function comparatorOperatorsExample(){
    // let a=null;
    // let b=5;
    // // let c= (a < b)? 'a is less than b': 'a is greater than b';
    // let c=a??b;
    let a=Date();
    

    document.getElementById('comparator').innerHTML=a;
}

function onOptionSelected(){
    let a=document.getElementById('options').value;
    document.getElementById('selected').innerHTML="The selected value is: "+a;
}