module.exports = function toReadable (number) {
    const points = number % 10;
    const secondPoints = (number % 100);
    const thirdPoints = Math.floor((number%100)/10)
    const dozens = ((number-points)/10);
    let hundreds = Math.floor(number/100);
    let hundredsFloor = Math.floor(((number-points)%100)/10);
    const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen ','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let word = arrDozens[dozens]+ (' ') + arr[points];
    if (number<100&& number > 20) { // если число меньше 100
        word = ((arrDozens[dozens]) + (' ') + (arr[points]));
      } else if (number > 100 && secondPoints >20) { 
        word = ((arr[hundreds]) + (" ") + ("hundred") + (" ") + (arrDozens[thirdPoints])+ " " + (arr[points]));
    } else if (number ==20) { 
      word = ((arrDozens[dozens]));
    }  else if (number ==0) { 
      word = ('zero');
    }else if (number == 100) { 
      word = ((arr[hundreds])+ (' ') + 'hundred');
    } else if ((number<=1000 && number>=100) && (secondPoints < 20 && secondPoints>0)) {
      word = ((arr[hundreds]) + (" ") + ("hundred") + (" ") + (arr[secondPoints]));
    } else if ((number<=1000 && number>=100) && (points === 0)) {
        word = ((arr[hundreds]) + (" ") + ("hundred") + (" ") + (arrDozens[thirdPoints]));
    }else {word = arr[number];      
    } //console.log(word);
    return word.trim()
  }