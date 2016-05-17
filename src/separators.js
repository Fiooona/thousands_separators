'use strict';

function thousands_separators(num) {
    num=num.toString();
    if(num.indexOf(".")==-1) num+=".0";
   var num1=num.split(".");
    while(/\d{4}/.test(num1[0])){
        //如果有4个相连的数字
        num1[0]=num.replace(/(\d+)(\d{3})/,'$1,$2');
    }
    var s=num1[0]+"."+num2[1];
    return s;
    //document.write(num);
}
module.exports = thousands_separators;
//thousands_separators(10000000);

