const numberInput = document.getElementById('number');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const regexNum = /[0-9]/;



const narcisCheck = (num) => {

	number = numberInput.value;

    result.style.display = 'block';

	if(number == '') {

		result.innerHTML = `Please enter a number to check`;
		return;
	}

    numberString = number.toString();

	let numberArray = numberString.split('');

	console.log(numberArray)

	for(let i = 0; i < numberArray.length; i++) {

	if(!regexNum.test(numberArray[i])) {

			result.innerHTML = `Please enter a VALID number to check`;

			return;
		}
	}

	let x = numberArray.map(y => Math.pow(y, numberArray.length))

	console.log(x)

	let z = x.reduce((a, b) => (a + b));

	console.log(number)
	console.log(z)

	let k = '';

	if(Number(number) === z) {
		k = 'TRUE';
	} else {
		k = 'FALSE';
	}

	result.innerHTML = `Test: ${k}`;

	// return k;
}


btn.addEventListener('click', narcisCheck);
number.addEventListener('change', narcisCheck);

const para = document.querySelector('.left');
    const timeIn = () => {
    let period = new Date().toLocaleTimeString();
    para.innerHTML = '<h1>' + period + '</h1>';
      };

    setInterval(timeIn, 1000);




    const hammingDistance = (str) => {
    	let count = 0;
    	let strSplit = str.split(',')

       	let [str1, str2] = strSplit;

    	str1 = str1.trim();
    	str2 = str2.trim();

    	// console.log(str1,str2);
    	// console.log(str1.length,str2.length);

    	for(let i = 0; i < str1.length; i++) {
    		if(str1[i] !== str2[i]) {
    			count++;
    		}
    	}
    	console.log(count);
    	return count;
    }

    hammingDistance('10011, 10100');
    hammingDistance('helloworld, worldhello');