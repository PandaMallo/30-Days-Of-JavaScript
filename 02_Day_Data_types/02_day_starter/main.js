// this is your main.js script

//Level 1
let challenge = '30 Days Of JavaScript'

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3,4));
console.log(challenge.substring(3,7));
console.log(challenge.slice(3,21));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));
console.log(challenge.repeat(2));

let itCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(itCompanies.split(','));

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

console.log(' 30 Days Of JavaScript '.trim());
console.log('30 Days Of'.concat('JavaScript'));

//Level 2
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same\nwith charity you give love, so don't just give money but reach out your hand instead.");

let num = '10'
let parseNum = +num
console.log(typeof parseNum === typeof 10);

let parseFloatNum = parseFloat('9.8')
console.log(Math.floor(parseFloatNum + 1)  === parseFloat(10));

console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

console.log('I hope this course is not full of jargon.'.includes('jargon'));

let randomNumber = Math.floor(Math.random() * 101)
console.log(randomNumber);

let randomNumberOf50 = Math.floor(Math.random() * (101 - 51) + 50)
console.log(randomNumberOf50);

let randomNumberOf255 = Math.floor(Math.random() * 256)
console.log(randomNumberOf255);

let strLength = 'JavaScript'.length
console.log('JavaScript'.charAt(Math.floor(Math.random() * strLength)));

console.log('1\t1\t1\t1\t1');
console.log(`2\t1\t${2**1}\t${2**2}\t${2**3}`);
console.log(`3\t1\t${3**1}\t${3**2}\t${3**3}`);
console.log(`4\t1\t${4**1}\t${4**2}\t${4**3}`);
console.log(`5\t1\t${5**1}\t${5**2}\t${5**3}`);

let s = 'You cannot end a sentence with because because because is a conjunction'
console.log(s.substr(31, 23));

//Level 3
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let lovePattern = /love/gi
console.log(loveSentence.match(lovePattern).length);

let becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
let becausePattern = /because/g
console.log(becauseSentence.match(becausePattern).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanS = sentence.replace(/\W/g, ' ')
console.log(cleanS);

let monthSalary = 5000
let anualBonus = 10000
let monthCourse = 15000
let anualIncome = monthSalary * 12 + anualBonus + monthCourse * 12
console.log(anualIncome);
