// function :  Total Surface Area of cone
/*
Total Surface Area, A = πr(r+l) = πr[r+√(h2+r2)] 
r= radius of a cone

h= height of a cone

l = slant height
*/

function total_surface_area_of_cone(r,h){
    const l = Math.sqrt((h*2)+(r*2));
    const PI = 3.14159

    return PI * r * (r+l)
}

console.log(total_surface_area_of_cone(3,4),"cm^2");
