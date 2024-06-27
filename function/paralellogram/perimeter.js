/*formula = 2(a+b)
 a = side a
 b = side b
 */
function perimeter_of_parallelogram(l,b){
    const a = 2*(l+b)
    return a     
}
let length = 5
let width = 6
let result = perimeter_of_parallelogram(length,width)
console.log(perimeter_of_parallelogram(5,6),"cm^2")
