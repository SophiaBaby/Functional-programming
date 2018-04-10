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


echo '关系运算符
        -eq	两个数相等返回true
        -ne	两个数不相等返回true
        -gt	左侧数大于右侧数返回true
        -It	左侧数小于右侧数返回true
        -ge	左侧数大于等于右侧数返回true
        -le	左侧数小于等于右侧数返回true'

echo '字符串运算符
           =	两个字符串相等返回true
          !=	两个字符串不相等返回true
          -z	字符串长度为0返回true
          -n	字符串长度不为0返回true'

echo '文件相关运算
        -d file	检测文件是否是目录，如果是，则返回 true
        -r file	检测文件是否可读，如果是，则返回 true
        -w file	检测文件是否可写，如果是，则返回 true
        -x file	检测文件是否可执行，如果是，则返回 true
        -s file	检测文件是否为空（文件大小是否大于0，不为空返回 true
        -e file	检测文件（包括目录）是否存在，如果是，则返回 true'

echo '数组： 空格间隔
        ${array[1]} 获取下标为1的元素
        ${#array2[*]} 获取数组的长度'
array=(1 2 3 4 5)
array2=(aa bb cc dd ee)
value=${array[1]}
echo "array[1]的值为 $value"
length=${#array2[*]}
echo "array2的长度为 $length"














































