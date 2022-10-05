var dateInput = document.querySelector('#ip-date');
var resBtn = document.querySelector('.btn');
var outputText = document.querySelector('.op-text');

// DD-MM-YYYY
// MM-DD-YYYY
// YYYY-MM-DD
// DD-MM-YY
// MM-DD-YY
// YY-MM-DD

function getDateFormats(){
    var dt = dateInput.value;
    var date = dt.toString();
    var dateLst = date.split('-');
    dateLst.reverse();
    console.log(dateLst);
    var formatList = [];
    formatList.push(dateLst.join(''));
    formatList.push(dateLst[1]+dateLst[0]+dateLst[2]);
    formatList.push(dateLst[2]+dateLst[1]+dateLst[0]);
    formatList.push(dateLst[0]+dateLst[1]+dateLst[2].slice(-2));
    formatList.push(dateLst[1]+dateLst[0]+dateLst[2].slice(-2));
    formatList.push(dateLst[2].slice(-2)+dateLst[1]+dateLst[0]);
    return formatList;
}


function isPalindrome(date){
    var revDate = date.split('').reverse().join('');
    if(revDate === date){
        return true;
    }
    else{
        return false;
    }
}


function clickHandler(){
    var dateFormats = getDateFormats();
    for(var i = 0; i<dateFormats.length; i++){
        console.log(dateFormats[i]);
    }
    var flag = false;
    for(var i = 0; i<6; i++){
        if(isPalindrome(dateFormats[i])){
            flag = true;
            break;
        }
    }
    if(flag){
        outputText.innerHTML = "Congratulations!! Your Birthday is a palindrome :)";
    }
    else{
        console.log("Sad");
    }
}

resBtn.addEventListener('click', clickHandler);