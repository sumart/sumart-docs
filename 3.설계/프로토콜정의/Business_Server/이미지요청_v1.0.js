/**
 * Protocol 이름 : 이미지 요청
 * Sequence Diagram(SD) : 쿠폰사용
 * 화면 번호 : 공통
 * method: GET
 * URI: /res/images/:category1/:category2/:id
 * 
 * [설명]
 * 사용자가 쿠폰을 다운로드 받아 보관하면, 서버에 쿠폰 보관 사실이 알려짐
 */

// REQUEST
{
	header:{
		uri:"/res/images/:category1/:category2/:id"
		,method:"GET"
		,contentType:"application/json"
		,queryParam:{
			type:String // icon, full 중 하나
		}
		,userId:String //* 상인/직원의 ID
		,apiKey:String
	}
}

// RESPONSE : 이미지파일