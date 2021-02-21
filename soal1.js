

// Soal nomor 1 

function soalSatu () {

}

soalSatu.prototype.reverse = function (string) {
   
    string = string.split("").reverse().join()   
    return string

}

console.log(soalSatu.prototype.reverse("rusak"));