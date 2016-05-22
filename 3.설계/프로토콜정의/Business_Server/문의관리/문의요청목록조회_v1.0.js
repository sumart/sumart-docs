/**
 * Protocol 이름 : 문의요청목록조회
 * Sequence Diagram(SD) : 문의요청목록조회
 * 화면 번호 : 27
 * method: GET
 * URI: /inquiries/asked
 * 
 * [설명]
 * 상점에게 온 문의목록을 조회함
 */

// REQUEST
{
	header:{
		uri:"/inquiries/asked"
		,method:"GET"
		,contentType:"application/json"
		,queryParams:{
			afterDateTime:DateTime //+ 특정일시 이후의 것만 가져옴(지정시간 미포함)
			,notAnsweredOnly:Boolean //+ 응답 안한것들만 가져옴(기본:false - 전체 다 가져옴)
		}
		,userId:String //*
		,shopId:String //*
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
		inquiryId:String
		,status:String //* DONE: 문의 요청 완료. PEND: 문의 요청 중임 (연산중)
		,type:String //* FAV:관심포인트 문의, POS: 위치지정 문의 , SHOP: 상점지정 문의
		//* 문의를 보낸 사람
		,from:{
			userId:<user._id> //* 문의한 사용자 ID
			,message:String //* 문의 내용
			,inquiryDateTime:DateTime //* 문의 일시
		}
		,to:{
			shopId:shop._id //+ 만약 샵을 지정하여 문의하였으면, shopId 를 저장 함
			//+ 문의 위치
			,location:{
				long:Number //*
				,lat:Number //*
			}
			,favoriteIndex:Number //+ 관심포인트 index. 이게 없었으면 현재 위치나 특정 위치에서 보냈다는 의미임
		}
		,answered:Boolean //* 답변했는지 여부
	}]
}