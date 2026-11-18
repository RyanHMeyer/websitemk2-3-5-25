
///Wave of 1s changing in the background

let binBack = document.getElementById("backofones").innerHTML;
let binBackLengthNums = [];
let binBackArr = binBack.split("");
let iterationBack = 0;
function flipBin (tint) {//this function will flip the binary value to be its opposite
  if (tint == 0) {
		return 1;
	} else {
		return 0;
	}
}
function binPlus (rint) {//this function will determine if iterationBack+ a number would be greater than the length of the array, and handles changing the array as well
  if ((iterationBack+rint) >= binBackArr.length) {
    binBackArr[iterationBack+rint-binBackArr.length] = flipBin(binBackArr[iterationBack+rint-binBackArr.length]);
  } else {
    binBackArr[iterationBack+rint] = flipBin(binBackArr[iterationBack+rint]);
  }
}
for (let i = 1; i < binBack.length; i++) {
  if (i % 10 == 0) {
    binBackLengthNums.push(i);
  }
}
setInterval(() => { 
	binBackArr[iterationBack] = flipBin(binBackArr[iterationBack]);
    binBackLengthNums.forEach((element) => binPlus(element));//this pushes a binPlus on each item in binBackLengthNums
	document.getElementById("backofones").innerHTML = binBackArr.join("");
	iterationBack++;
	if ((iterationBack+1) > binBack.length) {
		iterationBack = 0;
	}
},150);//<-- changing this value changes the speed

///Word Glitching Effect ONLY WORKS WITH STRS THAT ARE 10 CHARS LONG
if (document.getElementById("cycle")) {
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

var iteration = 20;
var goodWordsNumb = 0;
const goodWords = ["Passion   ","Progress  ","Dedication","Potential ","Leadership","Purpose   "];
document.getElementById("cycle").innerHTML = goodWords[goodWordsNumb];
var brokStr = document.getElementById("cycle").innerHTML.split("");
setInterval(() => {
	var newStr = goodWords[goodWordsNumb].split("");
	if (iteration < 10) {
		brokStr[iteration] = getRandomInt(2);//setting this to a random char from charList made the array larger than it was supposed to be randomly
		document.getElementById("cycle").innerHTML = brokStr.join("");
	}
	if (iteration >= 10 && iteration <20) {
		brokStr[iteration-10] = goodWords[goodWordsNumb].charAt(iteration-10);
		document.getElementById("cycle").innerHTML = brokStr.join("");
	}
	iteration++;
	if (iteration > 60) {
		iteration = -1;
		brokStr = document.getElementById("cycle").innerHTML.split("");
		goodWordsNumb++;
		if (goodWordsNumb > goodWords.length-1) {
			goodWordsNumb = 0;
		}
	}
}, 75);}

///Load the header
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

///Decode Phone Number and Email to protect against scrappers
(function () {
  const decode = (s) => atob(s);

  const email = decode("cnlhbmhhcnJpc29ubWV5ZXJAZ21haWwuY29t");
  const phoneDigits = decode("KDYxMCkgMzA0LTMyMjQ=");

  const emailLink = document.getElementById("email-link");
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;

  const phoneLink = document.getElementById("phone-link");
  phoneLink.href = `tel:+1${phoneDigits}`;
  phoneLink.textContent = phoneDigits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
})();