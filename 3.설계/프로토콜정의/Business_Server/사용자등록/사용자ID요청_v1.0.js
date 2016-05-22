/**
 * Protocol 이름 : 사용자ID요청
 * Sequence Diagram(SD) : 사용자ID요청
 * 화면 번호 : 002
 * method: GET
 * URI: /users/id/:appGenId
 * 
 * [설명]
 * 사용자 등록시 사용될 ID 를 미리 발급받음.
 * 10회 이상 발급요청 불가함. 
 */

// REQUEST
{
	header:{
		uri:"/users/id/:appGenId" //* :appGenId 는 URL Encode 되어야 한다(* 모든 URI 파라미터는 모두 URL 인코딩 되어야 한다)
		,method:"GET"
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		userId:String //* 사용 가능한 자동생성된 user ID
	}
}