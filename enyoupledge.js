$(function() {

var array=[0,0,0,0,0,0,0,0,0];
 var post=$("#post"),yes=$("#yes"),no=$("#no");
 var count=0,flag=0;
 var i=0,ff=0;

{ var question=["1. 꿀 같은 쉬는 날! 주로 어떻게 시간을 보내시나요?",
 "2. 대학 생활하면 빠질 수 없는 다양한 활동들! 어느 것에 더 관심있으신가요?",
 "3. 코로나 19로 인해서 누리지 못해 더 아쉬운 것은?",
 "4. 학우님에게 더 익숙한 일감호 풍경은?",
 "5. 매학기마다 새로 사야하는 전공책들...다음 중 더 싫은 것은?",
 "6. 좋아하는 스포츠 경기의 결승전! 어떻게 보는 것을 좋아하시나요?"];
 var pos=["집에서 뒹굴거린다",
"관심분야 동아리 활동!",
"만나지 못한 동기와 선배들, 경험하지 못한 대학생활",
"쨍쨍한 햇빛 받으며 수업들으러 가며 보는 일감호",
"한학기 쓰고 버릴건데 너무 비싸!! 아까운 내 돈...",
"가족들과 혹은 혼자 집에서 편하게 시청한다."];

 var neg=["밖에 나가서 논다",
"공대의 다양한 행사!",
"영화관, 콘서트 등 마음껏 즐기지 못한 문화생활",
"퇴근 후 무거운 몸을 이끌고 가며 보는 운치 있는 일감호",
"책 사러 갈 시간도 없고 사러 나가기 너무 귀찮아!",
"친구들과 다 같이 모여서 떠들며 신나게 응원한다."];}

if(ff==0){
$("#post").text(question[count]);
$("#yes").text(pos[count]);
$("#no").text(neg[count]);


$("#yes").click(function () {
	if(count==6){
	ff=1;
	final();return;}
	switch(count){
		case 0: array[1]+=1; break;
		case 1: array[8]+=3; array[0]+=1; break;
		case 2: array[0]+=2; break;
		case 3: break;
		case 4: array[2]+=2; break;
		case 5: array[3]+=1; break;
	}
	count++;
	$("#post").text(question[count]);
	$("#yes").text(pos[count]);
	$("#no").text(neg[count]);
});

$("#no").click(function () {
	if(count==6){
	ff=1;
	final();return;}
	switch(count){
		case 0: array[0]+=1; array[6]+=1; break;
		case 1: array[6]+=1; array[7]+=1; break;
		case 2: array[1]+=2; break;
		case 3: array[4]+=2; array[5]+=2; array[0]-=1;break;
		case 4: array[5]+=2; array[4]+=1; break;
		case 5: array[6]+=2; break;
	}
	count++;
	$("#post").text(question[count]);
	$("#yes").text(pos[count]);
	$("#no").text(neg[count]);});}

var resultFirst=[//result에 넣기
 "[당신의 2020 찾아드립니다.]",
 "[방구석 문화생활 프로젝트]",
 "[열린 도서관 운영]",
 "[공과대학 공식 유튜브 채널 개설] ",
 "[학과 야식어택] ",
 "[배달의 엔유]",
 "[함께하는 도쿄올림픽 응원] ",
 "[이달의 엔유 시리즈] ",
 "[우리 동아리를 소개합니다.] "
 ];

var result=[
 "코로나 사태로 경험하지 못한 새내기 대학생활! 20학번만을 위한 행사를 개최하여 설렘 가득한 2020을 찾아드리겠습니다."+"\n"+"(대면 : 선배 및 동기들과의 소규모 만남의 장! / 예비대학 개최,"+"\n\n"+"비대면 : 온라인 캠퍼스 투어 이벤트! / 생활백서 발송!)",
 "코로나 사태로 인해 즐기기 힘들었던 문화생활! 저희 엔유가 학우분들이 집에서도 문화생활을 즐길 수 있도록 돕겠습니다."+"\n"+"(대면 : 영화, 전시회나 관람회 티켓을!,"+"\n\n"+"비대면 : 유튜브 영화선물 및 책 or 다양한 나노블럭 배송!)",
 "사물함, 과방 정리로 버려지는 아까운 전공책! 저희 엔유가 주인 없는 전공책들을 활용해 체계적으로 열린 도서관을 운영하겠습니다!"+"\n"+"(대면 : 학기 초 공과대학 학생회실에서 진행!,"+"\n\n"+"비대면 : 카카오톡 플러스 친구로 신청 후 수령 또는 택배배송!)",
 "현 SNS 뿐 아니라, 공과대학만의 공식 유튜브 채널을 개설해 새로운 방식으로 학우분들과 즐겁고 유익한 소통을 추구하겠습니다."+"\n"+"(대면 : 학우분들과 함께한 행사들, 유익한 정보들!,"+"\n\n"+"비대면 : 다양한 제휴업체 먹방 영상, 온라인 행사 진행영상!)",
 "기존 간식어택의 혜택을 누리지 못했던 K뷰티, 신산업융합학과 분들을 위한 야식어택을 진행하겠습니다."+"\n"+"(대면 : 야간 수업 끝나는 시간 or 강의실 방문하여 야식어택!,"+"\n\n"+"비대면 : K뷰티, 신산업 분들만을 위한 야식기프티콘 발송!)",
 "바쁜 일상, 사회적 거리두기로 학교 서점에 오기 힘든 학우분들을 위해 서점과 협업하여 전공서적 구매대행 및 배달을 진행하겠습니다."+"\n"+"(대면 : 카카오톡 플러스 친구로 신청 후 수령 또는 택배배송!,"+"\n\n"+"비대면 : 카카오톡 플러스 친구로 신청 후 택배배송!)",
 "공과대학 학우 여러분들과 함께 도쿄올림픽의 주요 경기들을 응원하는 축제의 장을 열겠습니다."+"\n"+"(대면 : 공대 안뜰에서 무대설치 후 응원!,"+"\n\n"+"비대면 : 응원영상 공모전을 통해 치맥 지원!)",
 "매달 이벤트, 공모전 등 다양한 행사를 개최하여 학우분들께 지루할 틈 없는 대학생활을 저희 엔유가 선물하겠습니다."+"\n"+"(대면 : 공대 야경 공모전, 소확행 이벤트 등 진행!,"+"\n\n"+"비대면 : 방구석 야경 공모전, 방콕 이벤트 등 진행!)",
 "궁금하지만 경험해 보지 못했던 우리 동아리!! 동아리 일일 체험의 날 홍보 행사를 통해 학우분들의 동아리에 대한 궁금증을 해소하겠습니다!"+"\n"+"(대면 : 공대 안뜰 홍보 부스 및 동아리 일일 체험행사!,"+"\n\n"+"비대면 : 동아리별 카드뉴스 및 유튜브 영상 게시!)"
 ];

var timer;
var forFinal=0;
//yes,no에서 count가 6이면 호출할 함수
 function final() {
 	document.getElementById("all").style.display = "none";
 	document.getElementById("gif").style.display = "block";
 	document.getElementById("img").src = "banner2.jpg";
 	document.getElementById("banner").style.backgroundColor="#ffffff";
 	document.getElementById("a").style.backgroundColor="#ffffff";
 	 	//$("header").backgroundColor="white";

 	setTimeout(function () {
 	document.getElementById("a").style.backgroundColor="#ffffff"; 		
 	document.getElementById("all").style.display = "block";
 	document.getElementById("gif").style.display = "none";
 	document.getElementById("img").src = "banner2.png";
 	document.getElementById("banner").style.backgroundColor = "#732379";
 	},3000)  // 5초후 go() 함수를 호출한다

 	document.getElementById("img").style.width = "300px";
 	document.getElementById("text1").style.display = "block";
 	document.getElementById("text2").style.display = "block";
 	document.getElementById("text3").style.display = "block";
 	document.getElementById("text4").style.display = "block";

//$("#text1").style.display='block';
//$("#text2").style.display='block';
//	$("#text1").attr(display,"block");
//	$("#text2").attr(display,"block");
 	var max=0,index=0;
 	for(var i=0;i<5;i++){
 		if(array[i]>max){
 			max=array[i];
 			index=i;}
 	}
 	$("#count").value=index;
	//$("#form").submit();

	$("#question").height="500px";
//	$(".post-wrapper").attr("height","500px");
	$("#content").paddingTop="10px";
	$("#content").fontFamily="Jua";
	$("#content").fontSize="15px";
	$("#content").backgroundColor="#f5e6fd";


	$("#btn1").fontSize="20px";
	$("#btn2").fontSize="20px";
	$("#btn1").width="40px";
	$("#btn2").width="40px";
	//$("").width="40px";
	yes.fontSize="20px";
	no.fontSize="20px";
	yes.text("테스트 다시하기");
	no.text("공약 더 둘러보기 ");

	$("#btn1").css("display","none");
	$("#btn2").css("display","none");
	$("#btn3").css("display","block");
	$("#btn4").css("display","block");	
	$("h1").css("display","block");
	$("#answer").css("padding-bottom","0px");
	$("#text1").text("엔유 공약");
	$("#text2").text("유형 테스트 결과");
	$("#text3").text("----------------------");
	$("#text4").text("당신에게 맞는 엔유의 공약!");
	$("#post").text(resultFirst[index]+"\n\n\n");
	$("#content").text(result[index]);
	//	location.replace('eny	ouresult.html');
}

});