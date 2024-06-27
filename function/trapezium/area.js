/*formula = ½(c + b)h
 c = side 
 b = side2 
 h = height

 */
function area_of_trapezium(c,b,h){
    const a = (1/2)*( c + b)*h
    return a
}
 let height = 8
 let c = 3
 let b = 5
 let result = area_of_trapezium(c,b,height)
 console.log(result)