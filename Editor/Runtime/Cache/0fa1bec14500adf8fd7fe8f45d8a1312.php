<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=BIG5">
		<title>Login</title>
		<link rel="stylesheet" type="text/css" href="__PUBLIC__/Css/basic.css" />
		<link rel="stylesheet" type="text/css" href="__PUBLIC__/Css/Editor/login.css" />
		<script type="text/javascript" src="__PUBLIC__/Js/jquery.js"></script>
		<script>
			$(function(){
				$("#Submit").click(function(){
					$('form[name="myForm"]').submit();
					
				});
			});
		</script>
	</head>
	<body>
		<form action='__URL__/doLogin' method='post' name='myForm'>
			UserName:<input type='text' name='username'/><br/>
			Password:<input type='password' name='password'/><br/><hr/>
			VCode   :<input type='text' name='code'/><img src='__APP__/Public/code' onclick="this.src=this.src+'?'+Math.random()"/><br/><hr/>
			<input type='button' Id='Submit' value='Submit' class='button'>
			<input type='button' value='Clear' class='button'>
		</form>
	</body>
</html>