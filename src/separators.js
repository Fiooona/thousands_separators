'use strict';

function thousands_separators(num) {
    function thousands_separators(num){
        num=num.toString();
        if(num.indexOf(".")==-1) {
            while(/\d{4}/.test(num)) {
                num = num.replace(/(\d+)(\d{3}\,)/, '$1,$2');
            }
        }
        else{
            var num1=num.split(".");
            while(/\d{4}/.test(num1[0])) {
                num1[0] = num1[0].replace(/(\d+)(\d{3})/, '$1,$2');
            }

            num=num1[0]+"."+num1[1];
        }
        return num;
    }
}
//以下这种方法只能完成小数点后的数字小于3 的情况，
//function thousands_separators(num){
//
//    num = num.toString();   //将输入的数字转换为字符串
//
//    if(/^-?\d+\.?\d+$/.test(num)){  //判断输入内容是否为整数或小数
//        if(/^-?\d+$/.test(num)){    //判断输入内容是否为整数
//            num =num + ",00";   //将整数转为精度为2的小数，并将小数点换成逗号
//        }else{
//            num = num.replace(/\./,',');    //将小数的小数点换成逗号
//        }
//
//        while(/\d{4}/.test(num)){ //
//            /***
//             *判断是否有4个相连的数字，如果有则需要继续拆分，否则结束循环；
//             *将4个相连以上的数字分成两组，第一组$1是前面所有的数字（负数则有符号），
//             *第二组第一个逗号及其前面3个相连的数字；
//             * 将第二组内容替换为“,3个相连的数字，”
//             ***/
//            num = num.replace(/(\d+)(\d{3}\,)/,'$1,$2');
//        }
//
//        num = num.replace(/\,(\d*)$/,'.$1');   //将最后一个逗号换成小数点
//    }
//    return num;
//}
//var s=thousands_separators(100000);
//
//    console.log("hello"+s);
module.exports = thousands_separators;


