window.onload=function(){
	// let aNavLi=document.querySelectorAll('header .nav li ul li')
	// for( let i=0; i<aNavLi.length;i++){
	// 	aNavLi[i].onmousemove=function(){
	// 		this.style.background='rgba(2,2,2,1)'
	// 	}
	// }
	//顶部留言 个人信息按钮
	let aA=document.querySelectorAll('#click a')
	let aIm=document.querySelectorAll('#click a img')
	for(let i=0;i<aA.length;i++){
		aA[i].index=i
		aA[i].onmousemove=function(){
			this.style.background='rgb(50,50,50)';
			aIm[this.index].src=`images/0${this.index+2}.jpg`
		}
		aA[i].onmouseout=function(){
			this.style.background='';
			aIm[this.index].src=`images/0${this.index}.jpg`
		}
	}
	//banner-输入框
	let oInput=document.querySelector('.search input')
	let oIm=document.querySelector('.search a img')
	let oldPlaceholder=oInput.placeholder
	oInput.onclick=function(ev){
		this.style.background='#323232';
		this.style.border='none';
		this.style.color='white'
		oIm.style.top='-94px';
		var oEvent=ev||event;
        oEvent.cancelBubble=true;
        oInput.placeholder=''
	}
	document.onclick=function(){
		oInput.style.background='white';
		oIm.style.top='0';
		oInput.style.border='1px solid #323232';
		oInput.style.color='black';
		oInput.placeholder=oldPlaceholder
	}
	//选项卡
	let aLi=document.querySelectorAll('.section .top ul li')
	let aDiv=document.querySelectorAll('.section .box-content')
	for(let i=0; i<aLi.length;i++){
		aLi[i].index=i
		aLi[i].onclick=function(){
			for(let i=0;i<aLi.length;i++){
				aLi[i].id=''
				aDiv[i].style.display='none'
			}
			this.id='active';
			this.style.background='white';
			this.style.color='black';
			aDiv[this.index].style.display='block'
		}
	}
	for(let i=0; i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			if(!this.id){
				this.style.background='#323232';
				this.style.color='white'
			}
		}
		aLi[i].onmouseout=function(){
			this.style.background='white';
			this.style.color='black'
		}
	}
}
