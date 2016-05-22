/**
 * Protocol 이름 : 관심포인트등록
 * Sequence Diagram(SD) : 관심포인트등록
 * 화면 번호 : 008
 * method: POST
 * URI: /favorites/locations
 * 
 * [설명]
 * 관심포인트를 등록하는 요청. 관심포인트를 지정하면 서버로 지정하였음을 보고해야 한다.
 */

// REQUEST
{
	header:{
		uri:"/favorites/locations" //+ :userId - 조회를 원하는 사용자의 ID.
		,method:"POST"
		,contentType:"application/json"
		,userId:String //*
		,apiKey:String //*
	}
	,body:{
		long:Number //*
		,lat:Number //*
		,index:Number //* 관심포인트 번호 (0~2)
		,alias:String //+ 관심포인트 이름
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		success:String //* OK: 등록 됨 / MOD: 기존 정보가 있어 변경됨
	}
}