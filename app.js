var dateInput = document.querySelector('#ip-date');
var resBtn = document.querySelector('.btn');
var outputText = document.querySelector('.op-text');

var nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var dateObj = { day: 1, month: 1, year: 2001 };

 function isLeap(year){
    if (year % 400 == 0)return true;
    if (year % 100 == 0)return false;
    if (year % 4 == 0)return true;
    return false;
 }

 function incDate(date){
    date.day++;
    if(nDays[date.month - 1] < date.day){
        if(date.month == 2){
            if(isLeap(date.year)){
                return date;
            }
            else{
                date.day = 1;
                date.month++;
                return date;
            }
        }
        else{
            date.day = 1;
            date.month++;
        }
    }
    if(date.month>12){
        date.month = 1;
        date.year++;
    }
    return date;
}

function getDateFormats(date){
    var day = date.day, month = date.month, year = date.year;
    if(day<10) day = '0'+day;
    if(month<10) month = '0'+month;
    day = day.toString(), month = month.toString(), year = year.toString();
    var dateLst = [day, month, year];
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
    var x = date;
    var revDate = x.split('').reverse().join('');
    if(revDate === date)return true;
    else return false;
}

function clickHandler(){
    var dt = dateInput.value;
    var date = dt.toString();
    var dateLst = date.split('-');
    dateLst.reverse();
    dateObj.day = Number(dateLst[0]), dateObj.month = Number(dateLst[1]), dateObj.year = Number(dateLst[2]);
    var dateFormats = getDateFormats(dateObj);
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
        flag = false;
        var ct = 0;
        while(!flag){
            ct++;
            dateObj = incDate(dateObj);
            dateFormats = getDateFormats(dateObj);
            for(var i = 0; i<6; i++){
                if(isPalindrome(dateFormats[i])){
                    flag = true;
                    break;
                }
            }
        }
        console.log(dateObj);
        outputText.innerHTML = "Oops you missed by " + ct + " days, next palindrome date is: " + dateObj.day+'-'+dateObj.month+'-'+dateObj.year;
    }
}

resBtn.addEventListener('click', clickHandler);