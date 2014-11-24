<?php

class LoginAction extends Action {
    public function login(){
		$this->display();
    }
	
	public function doLogin(){
		//接收提交的数据
		$UserName = $_POST['username'];
		$Password = $_POST['password'];
		$Code = $_POST['code'];
		
		//验证码检查
		if(md5($Code) != $_SESSION['code'])
		{
			$this->error("验证码错误！");
		}
		
		//判断用户在数据库中是否存在
		$User = M('User');
		$Where['UserName'] = $UserName;
		$Where['Password'] = $Password;
		$Arr = $User->field('id')->where($Where)->count();
		if($Arr)
		{
			$_SESSION['username'] = $UserName;
			$_SESSION['id'] = $Arr['id'];
			$this->success('用户登录成功！', U('Index/index'));
		}
		else
		{
			$this->error('该用户不存在！');
		}
		
		//如果存在，则允许用户登录
		
		//否则（不存在），显示错误信息
		
	}
}