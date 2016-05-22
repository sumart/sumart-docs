/**
 * Protocol 이름 : 문의상세조회
 * Sequence Diagram(SD) : 문의상세조회
 * 화면 번호 : 22
 * method: GET
 * URI: /inquiries/:inquiryId
 * 
 * [설명]
 * 문의한 내용에 대한 상황을 조회
 */

// REQUEST
{
	header:{
		uri:"/inquiries/:inquiryId" // :inquiryId - 문의 ID
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
	,body:[{
		inquiryId:String
		,status:String //* DONE: 문의 요청 완료. PEND: 문의 요청 중임 (연산중)
		//* 문의를 보낸 사람
		,from:{
			userId:String //* 문의한 사용자 ID
			,message:String //* 문의 내용
			,inquiryDateTime:DateTime //* 문의 일시
		}
		//+ 지정문의의 경우, 지정문의 대상 상점 ID. (지정문의의 경우, 관심키워드 작동 안함)
		,to:{
			shopId:String //+ 만약 샵을 지정하여 문의하였으면, shopId 를 저장 함
			//+ 문의 위치
			,location:{
				long:Number //*
				,lat:Number //*
			}
			,favoriteIndex:Number //+ 관심포인트 index. 이게 없었으면 현재 위치나 특정 위치에서 보냈다는 의미임
		}
		//+ 상인들의 답변
		,responses:[{
			shopId:String //* 답변 한 상점의 ID
			,userId:String //* 답변 한 상인의 ID
			,message:String
			//+ 쿠폰을 첨부한 경우 쿠폰
			,coupon:{
				id:String //* 쿠폰 ID
				,type:String //* 쿠폰 종류 ("SALE": 세일(디스카운트), "1+1", "2+1", "FREE", "ETC") - 종류에 따라 쿠폰 이미지(아이콘) 달라짐
				,saleAmount:Number //+ 쿠폰 종류가 SALE 일 때, 세일의 할인율
				,message:String //* 쿠폰 내용
				,dueDateTime:DateTime //* 만료 일/시
			}
			,imageUris:[String] //+ 첨부한 이미지 경로
			,responseDateTime:DateTime //* 답변 일시
		}]
	}]
}