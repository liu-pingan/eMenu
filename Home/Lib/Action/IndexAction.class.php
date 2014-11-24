<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
		//echo 'Hello World!!!';
		$TestData = "Liu Pingan";
		$this->assign('TplTestData',$TestData);
		$this->display();
    }
	
	public function show(){
		//echo 'Your age is '.$_GET['age'];
		$TestData = "Liu Ruijia";
		$this->assign('TplTestData',$TestData);
		$this->display(index);
	}
}