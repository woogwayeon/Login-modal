const enjoy = document.querySelector('.enjoy');

	const userLogin = document.querySelector('#user-login');
	const userId = document.querySelector('.login-id');
	const userPw = document.querySelector('.login-pw');

	const closeAlert = document.querySelector('.close-alert');
	const submitUserKey = document.querySelector('.okokok');

	const signOn = document.querySelector('.sign-on');
	const signOnUser = document.querySelector('.sign-on h2');

	userLogin.style.display='none';

	enjoy.addEventListener('click', ()=>{
		userLogin.style.display='block';
	});

	closeAlert.addEventListener('click', ()=>{
		userLogin.style.display='none';
	})


function enjoyLogin(){

	submitUserKey.addEventListener('click', (e)=>{

		e.preventDefault();
		
		if(userId.value==''){
			
			alert('아이디를 입력하세요');
			return;
		}

		if(userPw.value==''){
			alert('비밀번호를 입력하세요');
			return;
		}

		if(userPw.value.length<8){
			alert('비밀번호는 8글자 이상 입력하세요');
			return;
		}
	
		userLogin.style.display='none';
		enjoy.style.display='none';
		signOn.style.display='block';
		signOnUser.innerText=`${userId.value}님 로그인 되었습니당`
		alert(`환영합니다 ${userId.value}님 만나서 반가워요`);


	})



}; 

enjoyLogin();