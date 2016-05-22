/**
 * Protocol 이름 : 쿠폰보관삭제
 * Sequence Diagram(SD) : 쿠폰보관삭제
 * 화면 번호 : 010
 * method: DELETE
 * URI: /keeps/coupons
 * 
 * [설명]
 * 보관함에서 사용자가 특정 쿠폰을 삭제(보관취소) 함.
 */

// REQUEST
{
	header:{
		uri:"/keeps/coupons"
		,method:"DELETE"
		,contentType:"application/json"
		,userId:String //*
		,apiKey:String
	}
	,body:{
		couponId:String //* 삭제할 쿠폰의 ID
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		success:String //* OK - 삭제 완료
	}
}