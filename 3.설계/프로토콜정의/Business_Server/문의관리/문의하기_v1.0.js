/**
 * Protocol 이름 : 문의하기
 * Sequence Diagram(SD) : 문의하기
 * 화면 번호 : 공통
 * method: POST
 * URI: /inquiries
 * 
 * [설명]
 * 문의하기 기능
 */

// REQUEST
{
	header:{
		uri:"/inquiries"
		,method:"POST"
		,contentType:"application/json"
		,userId:String //*
		,apiKey:String
	}
	,body:{
		inquiryType:String //* FAV: 관심포인트 문의, LOC: 위치지정문의, SHOP: 상점 지정 문의
		,favoriteIndex:Number //+ 관심포인트 문의의 경우, 해당 관심포인트 Index 0~2
		,shopId:String //+ 샵 지정 문의인 경우 shopId 를 지정한다
		//+ 특정 위치에서 문의한 경우
		,location:{
			lat:Number
			,long:Number
			,range:Number //+ 반경을 지정. 기본 1,000m
		}
		,message:String
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		inquiryId:String //* 문의 ID. 이 ID를 갖고 있다가 나중에 문의 상황을 조회할 수 있음
		,status:String //* DONE - 문의 요청 완료, PEND - 문의 요청 중임 (서버 연산이 3초 이상 걸리는 경우)
		//+ status 가 DONE 인 경우 사용
		,target:{
			totalReceiver:Number //* 문의를 받는 총 상점 수. 상점 지정문의인 경우 1 또는 0 (문의수신 거부한 경우)
		}
	}
}