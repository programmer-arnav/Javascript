/*
formula = 4πr2
π = 3.14
r = radius
 */
function surface_area_of_sphere(π,r){
    const a = 4*π*r**2
    return a
}
let π = 3.14
let r = 2
let result = surface_area_of_sphere(π,r)
console.log(result)