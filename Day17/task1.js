// stack (LIFO)
// stack is a linear data structure.
// push(), pop(), peek(), size(), isEmpty()

let str = "hello"
let stack = [];
 
for(let char of str){
    stack.push(char)
}

let ans = ""

while(stack.length > 0){

ans += stack.pop()

}

console.log(ans)