/**
 * Protocol 이름 : 쿠폰보관등록
 * Sequence Diagram(SD) : 쿠폰보관등록
 * 화면 번호 : 010
 * method: POST
 * URI: /coupons/download/:couponId
 * 
 * [설명]
 * 사용자가 쿠폰을 다운로드 받아 보관하면, 서버에 쿠폰 보관 사실이 알려짐
 */

// REQUEST
{
	header:{
		uri:"/coupons/download/:couponId" //* couponId - 쿠폰 ID
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
	,body:{
		couponId:String
		,shopId:String
		,senderId:String //* 쿠폰을 발행한 상인(직원) ID
		,type:String //* 쿠폰 종류 ("SALE": 세일(디스카운트), "1+1", "2+1", "FREE", "ETC") - 종류에 따라 쿠폰 이미지(아이콘) 달라짐
		,saleAmount:Number //+ 쿠폰 종류가 SALE 일 때, 세일의 할인율
		,message:String //* 쿠폰 내용
		,dueDateTime:DateTime //* 만료 일/시
		//* 쿠폰을 발송한 대상 정보
		,target: {
			applyTo:String //* 쿠폰 적용 대상 ("ALL":전체, "USER":특정 유저)
			,targetUserId:<user._id> //+ target 이 USER 이면, 이때 해당 유저의 ID
		}
	}
}