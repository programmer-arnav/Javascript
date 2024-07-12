/*
converter of km to cm 
1 km = 100000cm
 */
function convert_km_to_cm(km){
    const convert = km * 1000 *100
    return convert
}
   let km = 12
   let result = convert_km_to_cm(km)
   console.log(result)
