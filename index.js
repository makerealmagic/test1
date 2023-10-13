function wish(){
    
    function wishing(person){
        let wish1 = `Hello, ${person} How Are You`
        alert(wish1);
    }
    let person = document.getElementById("in").value;
    console.log(person);
    wishing(person);
    
}
