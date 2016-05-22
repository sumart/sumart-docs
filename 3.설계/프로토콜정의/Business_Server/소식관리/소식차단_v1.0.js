/**
 * Protocol 이름 : 소식차단
 * Sequence Diagram(SD) : 소식차단
 * 화면 번호 : 003
 * method: POST
 * URI: /news/block
 * 
 * [설명]
 * 상점의 소식을 차단한다
 */

// REQUEST
{
	header:{
		uri:"/news/block" 
		,method:"POST"
		,contentType:"application/json"
		,apiKey:String
		,userId:String // 사용자의 ID
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		shopId:String //* 차단하고자 하는 상점의 ID
	}
}