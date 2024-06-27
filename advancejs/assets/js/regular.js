let string = "this is an advance javacsript course and javascript is a client side scripting language";
let substr = /Javacsript/gi;
let matching = string.match(substr);
console.log(matching);
let testing = substr.test(string);
console.log(testing);