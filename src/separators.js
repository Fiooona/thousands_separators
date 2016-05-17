'use strict';

function thousands_separators(num) {
    num=num.toString();
    if(num.indexOf(".")==-1) num+=".0";
   var num1=num.split(".");
    while(/\d{4}/.test(num1[0])){
        //如果有4个相连的数字
        num1[0]=num.replace(/(\d+)(\d{3})/,'$1,$2');
    }
    num=num1[0]+"."+num2[1];
}
module.exports = thousands_separators;

