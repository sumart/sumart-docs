/**
 * Protocol 이름 : 답변하기(문의응대하기)
 * Sequence Diagram(SD) : 답변하기
 * 화면 번호 : 28
 * method: POST
 * URI: /inquiries/answer
 * 
 * [설명]
 * 문의하기 기능
 */

// REQUEST
{
	header:{
		uri:"/inquiries/answer"
		,method:"POST"
		,contentType:"application/json"
		,userId:String //*
		,shopId:String //*
		,apiKey:String
	}
	,body:{
		inquiryId:String
		,message:String //* 답변 내용
		// 쿠폰첨부하는 경우 쿠폰
		,coupon:{
			type:String //* 쿠폰 종류 ("SALE": 세일(디스카운트), "1+1", "2+1", "FREE", "ETC") - 종류에 따라 쿠폰 이미지(아이콘) 달라짐
			,saleAmount:Number //+ 쿠폰 종류가 SALE 일 때, 세일의 할인율
			,message:String //* 쿠폰 내용
			,dueDateTime:DateTime //* 만료 일/시
			//* 쿠폰을 발송한 대상 정보
			,target: {
				applyTo:String //* 쿠폰 적용 대상 ("ALL":전체, "USER":특정 유저)
				,targetUserId:<user._id> //+ target 이 USER 이면, 이때 해당 유저의 ID
			}
		}
		,imageIds:[String]
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		inquiryId:String
	}
}