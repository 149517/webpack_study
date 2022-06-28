import $ from 'jquery'
// 使用es6的包导入

$(function(){
    $('li:odd').css('background-color','green');
    $('li:even').css('background-color','pink');
})