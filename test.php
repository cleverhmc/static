<?php
    header('Content-Type: text/html;charset=utf-8');
    header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
    header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
    header('Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin'); // 设置允许自定义请求头的字段

error_reporting(0);
$data = array('age' => $_GET["age"],"name"=> $_GET["name"]);  
$response = array('code'  => 200,'message' => '请求成功','data'  => $data,); 
header('Content-Type:application/json');//这个类型声明非常关键

//不跨域时使用
echo json_encode($response); 

//跨域时使用，并且ajax请求时使用dataType:'jsonp'
//$callback=$_GET['callback'];
//printf("%s(%s);", $callback, json_encode($response));
?>