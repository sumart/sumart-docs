/**
 * Protocol 이름 : 쿠폰사용
 * Sequence Diagram(SD) : 쿠폰사용
 * 화면 번호 : 011,012
 * method: POST
 * URI: /coupons/use
 * 
 * [설명]
 * 사용자가 쿠폰을 다운로드 받아 보관하면, 서버에 쿠폰 보관 사실이 알려짐
 */

// REQUEST
{
	header:{
		uri:"/coupons/use" //* couponId - 쿠폰 ID
		,method:"POST"
		,contentType:"application/json"
		,userId:String //* 상인/직원의 ID
		,apiKey:String
	}
	,body:{ //!! 아래의 정보들은 QR 코드 내에 포함되어 있다
		couponId:String //* 사용한 쿠폰 ID
		,userId:String //* 쿠폰을 사용한 유저 ID
		,appGenId:String //* 쿠폰을 사용한 유저 앱의 appGenId
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		feedbackId:String //* 쿠폰 사용에 대한 추적 ID
		,couponUseTotalCount:Number //* 쿠폰을 사용한 총 사용자 수
		,alias:String //* 쿠폰을 사용한 사용자의 별명
	}
}