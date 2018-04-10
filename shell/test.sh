#!/bin/bash

echo 'shell命令的变量 '='两边不得有空格 ， 获取变量时需要加'$' 否则获取到字符串'
myText='hello'
myNum=100
echo $myText
echo myNum

echo '四则运算 + — * /  1.两边需要空格 乘法需要转译 2.运算式用反引号 3.echo的值需要双引号';
a=1
b=2
val=`expr $a + $b`
echo "Total value : $val";

val=`expr $a - $b`
echo "Total value : $val";

val=`expr $a \* $b`
echo "Total value : $val";

val=`expr $a / $b`
echo "Total value : $val";
