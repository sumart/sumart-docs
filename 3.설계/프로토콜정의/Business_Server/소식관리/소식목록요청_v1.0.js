/**
 * Protocol 이름 : 소식목록요청
 * Sequence Diagram(SD) : 소식목록요청
 * 화면 번호 : 003
 * method: GET
 * URI: /news/:userId
 * 
 * [설명]
 * 사용자에게 해당하는 소식을 가져오는 API.
 * userId 에 해당하는 사용자의 소식 중 queryParam 들에 해당하는 조건에 일치하는 소식을 가져온다
 */

// REQUEST
{
	header:{
		uri:"/news" //+ :userId - 조회를 원하는 사용자의 ID.
		,queryParam:{
			afterDateTime:String //+ 지정시간 이후(지정시간미포함)에 발행된 소식만을 가져온다
			,favoriteIndex:Number //+ 관심포인트 번호에 해당하는 소식만 가져온다 (미지정 시 전체 가져옴). 위도/경도 지정과 동시사용 불가
			,lat:Number //+ 지정 위도/경도 이내에 발행된 소식을 가져온다
			,long:Number //+ 지정 위도/경도 이내에 발행된 소식을 가져온다
			,range:Number //+ 검색 반경(미터. 미지정 시 1,000m 기본)
			,category:String //+ 지정 카테고리 코드에 속하는 소식만을 가져온다 (기본 전체)
			,includeBlocked:Boolean //+ 차단된 소식을 포함하여 가져온다 (기본 false - 차단된건 안가져옴)
			,limit:Number //+ 최대 목록 개수 (기본 무한대)
		}
		,method:"GET"
		,contentType:"application/json"
		,apiKey:String
		,userId:String // 사용자의 ID
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:[{
		content:{
			id:String //* 소식의 ID
			,message:String //* 소식 내용
			,sentDateTime:DateTime //* 소식 보낸 YYYYMMDD 24H:mm:ss
			,imageUri:String //+ 이미지가 존재하는 경우, 첫번째 이미지의 URI
			,read:Boolean //+ 소식을 읽은 여부 (서버 기준임)
			,readDateTime:DateTime //+ 소식을 읽은 일시 (안읽었으면 키 없음)
		}
		//* 소식을 보낸 상점의 정보
		,shop:{
			id:String //* 상점 ID
			,name:String //* 상점 이름
			,favoritePoint:Number //* 상점이 해당하는 사용자의 관심포인트의 번호 (관심포인트 해당 없으면 -1)
			,location:{
				long:Number
				,lat:Number
			}
		}
		//+ 쿠폰이 있는 경우, 쿠폰 정보
		,coupon:{
			id:String //* 쿠폰 ID
			,type:String //* 쿠폰 종류 ("SALE": 세일(디스카운트), "1+1", "2+1", "FREE", "ETC") - 종류에 따라 쿠폰 이미지(아이콘) 달라짐
			,saleAmount:Number //+ 쿠폰 종류가 SALE 일 때, 세일의 할인율
			,message:String //* 쿠폰 내용
			,dueDateTime:DateTime //* 만료 일/시
		}
	}]
}