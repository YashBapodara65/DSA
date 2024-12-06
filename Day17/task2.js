let str = "())"
let stack = []
let obj = { ")" : "(", "]" : "[" , "}" : "{" }
function isBalance() {
    for (let x = 0; x < str.length; x++) {
        if (str[x] == "(" || str[x] == "{" || str[x] == "[") {
            stack.push(str[x])
        } else if (str[x] == ")" || str[x] == "}" || str[x] == "]") {

            // if (stack.length > 0 && (stack[stack.length - 1] == "(" && str[x] == ")") || (stack[stack.length - 1] == "[" && str[x] == "]") || (stack[stack.length - 1] == "{" && str[x] == "}")  ) {
            //     stack.pop()
            // } else {
            //     return false
            // }
            if(stack.pop() != obj[str[x]]){
                return false
            }


        }
    }
    if (stack.length == 0) {
        return true
    } else {
        return false
    }
}

console.log(isBalance());