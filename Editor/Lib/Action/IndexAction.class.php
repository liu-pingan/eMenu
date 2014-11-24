<?php

class IndexAction extends Action {
    public function index(){
		//判断用户是否登录过
		if((isset($_SESSION['username'])) && ($_SESSION[username] != ''))
		{
			$this->display();
		}
		else
		{
			$this->redirect('Login/login');
		}
    }
	
	public function TopTitleFr(){
		$this->display();
	}
	
	public function LeftTabStructEditFr(){
		$this->display();
	}
	
	public function RightTabPageEditFr(){
		$this->display();
	}
}