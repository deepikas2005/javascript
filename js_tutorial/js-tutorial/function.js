function hello(){
    console.log("Hello Js");
}
hello();

function add(a,b){
    console.log(a+b);
}
add(1,2);

function display(func){
    func(1,2);
}
display(add);

let varFunc=add;
varFunc(1, 4);

let newFuncVar = function () {
    console.log("Variable function");
};
newFormat();