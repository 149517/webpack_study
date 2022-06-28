import $ from 'jquery'
// 使用es6的包导入

import '../css/index.css'
import '../css/index.less'

// 导入图片
import logo from '../images/logo.png'
$('.box').attr('src',logo)

$(function(){
    $('li:odd').css('background-color','#3bbeba');
    $('li:even').css('background-color','#afe668');
})


// 定义装饰器函数
function info(target){
	target.info = 'Person info.';
}
console.log(a);
// 定义一个普通的类
@info
class Person{}

console.log(Person.info);