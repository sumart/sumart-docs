/**
 * Protocol 이름 : 문의목록조회
 * Sequence Diagram(SD) : 문의목록조회
 * 화면 번호 : 21
 * method: GET
 * URI: /inquiries
 * 
 * [설명]
 * 문의한 내용에 대한 상황을 조회
 */

// REQUEST
{
	header:{
		uri:"/inquiries"
		,method:"GET"
		,contentType:"application/json"
		,userId:String //*
		,apiKey:String
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:[{
		inquiryId:String //* 문의 ID
		,message:String //* 문의 내용
		,inquiryDateTime:DateTime //* 문의 일시
		,target:String //* 문의 대상 관심포인트/지역/상점 이름
		,responseCount:Number //* 응답 개수
		,lastResponseDateTime:DateTime //* 마지막 답변 시간
	}]
}