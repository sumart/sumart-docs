/**
 * Protocol 이름 : 소식작성
 * Sequence Diagram(SD) : 소식작성
 * 화면 번호 : 36
 * method: POST
 * URI: /news
 * 
 * [설명]
 * 소식 작성하기
 */

// REQUEST
{
	header:{
		uri:"/news"
		,method:"POST"
		,contentType:"application/json"
		,userId:String //*
		,shopId:String //*
		,apiKey:String
	}
	,body:{
		message:String //+ 소식 내용. UI 상에서 100자 제한
		,images:[{
			imageId:String //* 
			,use:String //+ D - 대표이미지
		}]
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
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		newsId:String //*
		,couponId:String //*
		,totalReceiver:Number //* 소식 전달 대상 사용자 수
	}
}