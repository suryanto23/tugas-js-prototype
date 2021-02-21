





// Soal nomor 1 

function soalSatu () {

}

soalSatu.prototype.reverse = function (string) {
   
    string = string.split("").reverse().join()   
    return string

}

console.log(soalSatu.prototype.reverse("rusak"));




// Soal nomor 2

function soalDua () {

}

soalDua.prototype.isPrima = function (param) {
   
    let number = param;
    let flag = 1;
   
    for (let i = 1 ; i < 9 ; i++) {
        if (number % i == 0) {
            flag++ 
        }
    }

    if (flag == 2){
        return true;
    } 
    return false;


}

console.log(soalDua.prototype.isPrima(97));



