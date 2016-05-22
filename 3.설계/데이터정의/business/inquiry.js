/**
 * [다큐먼트 정의] 문의
 * [Collection] inquiry
 * 
 */

{
	_id:<ObjectId>
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
	//+ 문의 대상 상인들의 목록. 
	,targetShops:[{
		shopId:<shop._id> //* 답변 한 상점의 ID
		,userId:<user._id> //* 답변 한 상인의 ID
		,matchKeyword:String //* 매치하는 샵의 키워드
		//+ 답변이 있는 경우에 답변한내용이 추가됨
		response:{
			,message:String
			,couponId:<coupon._id>
			,images:[{
				originalFileName:String //+ 업로드 당시의 파일 이름
				,serverFileName:String //* 서버에 저장된 파일 이름
				,serverDirPath:String //* 서버에 저장된 파일의 디렉토리 경로
				,label:String //+ 이미지의 설명부에 보여질 간단한 라벨
				,use:String //+ 이미지의 사용 용도 (D: 대표이미지(상점이미지)). 없으면 기타이미지임.
				}]
			,responseDateTime:DateTime //* 답변 일시
		}
	}]
}
