/* formula =  2(lb + bh + hl)
 l = length
 b = breadth
 h = height 
 */
function surface_area_of_cuboid(l,b,h){
    const a =  2*((l*b) + (b*h) + (h*l))
    return a 
}
let l = 7
let b = 8
let h = 9
let result = surface_area_of_cuboid(l,b,h)
console.log(result)