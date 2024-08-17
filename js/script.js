
// ------------Encryption---------------


const encryptBtn= document.querySelector('#change');
encryptBtn.addEventListener('click',function () {
const Text = document.querySelector('#plainText');
// console.log(plainText.value);
const key = Number(document.querySelector('#key').value);Selector('#cipherText');
let plainText=Text.value;
console.log(key);
const cText = document.query
plainText = plainText.toLowerCase();


let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const cipher = plainText.split('');
let cipherIndex = [];
    for (const alph2 of cipher) {
        // console.log(alph1,i);
        for (const [i, alph1] of alph.entries()) {
            if (alph2 == alph1) {
                //console.log(alph1, i);
              //  let letter = alph1;
                let indexLetter = i;
                const n = (indexLetter + key);
                if (n < 26) {
                    let c = n;
                    // console.log(c);
                    cipherIndex.push(c);
                } else {
                    c = n % 26;
                    // console.log(c);
                    cipherIndex.push(c);
                };
            };
        };
    };


    // console.log(cipherIndex);

    const cipherText = [];
    for (const n of cipherIndex) {
        for (const [i, alph1] of alph.entries()) {
            if (n == i) {
                console.log(alph1, i);
                cipherText.push(alph1);
            }
        }
    };
    // console.log(cipherText);

    const Result = cipherText.join('');
    // console.log(Result);

    cText.innerHTML=Result;
    //end of function
});

// ------------Decryption---------------

const decryptBtn= document.querySelector('#changeD');
decryptBtn.addEventListener('click',function () {
const Text = document.querySelector('#plainTextD');
// console.log(plainText.value);
const key = Number(document.querySelector('#keyD').value);
// console.log(key);
const cText = document.querySelector('#cipherTextD');
const plainText=Text.value;

let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const cipher = plainText.split('');
let cipherIndexD = [];
    for (const alph2 of cipher) {
        // console.log(alph1,i);
        for (const [i, alph1] of alph.entries()) {
            if (alph2 == alph1) {
                // console.log(alph1, i);
                // let letter = alph1;
                let indexLetter = i;
                const n = (indexLetter - key);
                if(n >= 0){
                    if (n < 26) {
                    let c = n;
                    console.log(c);
                    cipherIndexD.push(c);
                } else {
                    c = n % 26;
                    console.log(c);
                    cipherIndexD.push(c);
                };
                }else{
                    const f=(Math.floor(n/26))*26;
                    const m=n-f;
                    if (m < 26) {
                        let c = m;
                        console.log(c);
                        cipherIndexD.push(c);
                    } else {
                        c = m % 26;
                        console.log(c);
                        cipherIndexD.push(c);
                    };

                }
                
            };
        };
    };


    // console.log(cipherIndexD);

    const cipherTextD = [];
    for (const n of cipherIndexD) {
        for (const [i, alph1] of alph.entries()) {
            if (n == i) {
                console.log(alph1, i);
                cipherTextD.push(alph1);
            }
        }
    };
    // console.log(cipherTextD);

    const Result = cipherTextD.join('');
    // console.log(Result);
    
    cText.innerHTML=Result;
    //end of function
});




