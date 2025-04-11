const accId= 12324          // cant be updated
let accEmail= "Rishi"       // SHOULD BE USED ALWAYS
var accPass= "ris123"       // don't use it leads to scope or block errors
accCity= "Kanpur"

console.table([accId, accEmail, accPass ,accCity])

// accId= 213  ---->  cont variables cant be upgraded
accEmail= "Singh"
accPass = "ads2131"
accCity= "Gonda"

console.table([accId, accEmail, accPass ,accCity])


console.log(typeof undefined)       // is a datatype of itself
console.log(typeof null)            // null is an object
