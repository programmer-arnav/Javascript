function pythagoresthorem_of_rightangled_triangle(height,base,hypotenuse){
    let bSquare = base**2;
    let hSquare = height**2;
    let hySquare = hypotenuse**2;
    let result = (bSquare+hSquare)-hySquare
    return result
}

console.log(pythagoresthorem_of_rightangled_triangle(3,5,4),"cm^2" )