#!/bin/bash

echo 'shell命令的变量 '='两边不得有空格 ， 获取变量时需要加'$' 否则获取到字符串'
myText='hello'
myNum=100
echo $myText
echo myNum


echo '四则运算 + — * /
    1.两边需要空格 乘法需要转译 2.运算式用反引号 3.echo的值需要双引号';
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


echo '其他的运算符
    %求余 ==相等 =赋值 ！=不相等 ！非  -o或 -a与'
a=2
b=1
if [ $a == $b ]
then echo 'a is equal to b'
fi

if [ $a != $b ]
then echo 'a is not equal to b'
fi


echo -e '关系运算符
        -eq	两个数相等返回true
        -ne	两个数不相等返回true
        -gt	左侧数大于右侧数返回true
        -It	左侧数小于右侧数返回true
        -ge	左侧数大于等于右侧数返回true
        -le	左侧数小于等于右侧数返回true \n'

echo -e '字符串运算符
           =	两个字符串相等返回true
          !=	两个字符串不相等返回true
          -z	字符串长度为0返回true
          -n	字符串长度不为0返回true \n'

echo -e '文件相关运算
        -d file	检测文件是否是目录，如果是，则返回 true
        -r file	检测文件是否可读，如果是，则返回 true
        -w file	检测文件是否可写，如果是，则返回 true
        -x file	检测文件是否可执行，如果是，则返回 true
        -s file	检测文件是否为空（文件大小是否大于0，不为空返回 true
        -e file	检测文件（包括目录）是否存在，如果是，则返回 true\n'

echo '数组： 空格间隔
        ${array[1]} 获取下标为1的元素
        ${#array2[*]} 获取数组的长度'
array=(1 2 3 4 5)
array2=(aa bb cc dd ee)
value=${array[1]}
echo "array[1]的值为 $value"
length=${#array2[*]}
echo "array2的长度为 $length"

echo '判断语句 if elif else'
a=10
b=12
if [ $a == $b ]
then
   echo "a is equal to b"
elif [ $a -gt $b ]
then
   echo "a is greater than b"
elif [ $a -lt $b ]
then
   echo "a is less than b"
else
   echo "None of the condition met"
fi


echo 'test命令
    -e file	文件存在则返回真
    -r file	文件存在并且可读则返回真
    -w file	文件存在并且可写则返回真
    -x file	文件存在并且可执行则返回真
    -s file	文件存在并且内容不为空则返回真
    -d file	文件目录存在则返回真'
test -e test.sh
test $[num1] -eq $[num2]  #判断两个变量是否相等
test num1=num2  #判断两个数字是否相等

cd ../echart
if test -e ./data2.js
then
    echo '文件已存在!'
else
    echo '文件不存在!'
fi












































