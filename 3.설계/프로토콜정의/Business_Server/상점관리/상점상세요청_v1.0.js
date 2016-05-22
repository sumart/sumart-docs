/**
 * Protocol 이름 : 상점상세요청
 * Sequence Diagram(SD) : 상점상세요청
 * 화면 번호 : 29
 * method: GET
 * URI: /shops/:shopId
 * 
 * [설명]
 * 상점의 목록을 가져오는 API로, 각종 조건으로 상점을 검색할 수 있음
 */

// REQUEST
{
	header:{
		uri:"/shops/:shopId" //+ :shopId - 상점 ID
		,method:"GET"
		,contentType:"application/json"
		,apiKey:String
		,userId:String //+ 사용자의 ID
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	//* 상점 상세정보
	,body:{
		shopId:String //* 샵의 고유 ID(unique)
		,name:String //* 샵 이름
		,code:String //* 상점코드 (6자리 패스워드/숫자). 상점 등록 시 발급 됨.
		,message:String //* 상점 소개 메시지
		products:[String] //* 주로 취급하는 상품 정보. 최대 5개
		,phones:[{
			countryNumber:String //* +를 제외한 국가번호
			,number:String //* -를 제외한 전화번호
			,use:String //+ D: 대표번호, 없으면 나머지는 순서대로 사용됨
			,useName:String //+ 전화번호의 이름(용도)
		}]
		,availServices:{
			creditCard:Boolean
			,delivery:Boolean
			,parking:Boolean
			,takeOut:Boolean
		}
		//+ 오픈 시간
		,openHours:{
			fromTime:String //* 오전/오후 HH:mm
			,toTime:String //* 오전/오후 HH:mm
		}
		,keywords:[String] //* 관심 키워드. 공백 허용
		//+ 샵의 위치정보
		,location:{
			long:Number
			,lat:Number
			,rangeInMeter:Number //* 소식을 전달할 관심포인트들의 반경(미터단위). 기본 1,000m
			//* 주소
			,address:{
				country:String //* 국가
				,state:String //* 시,도
				,prov:String //* 구/군
				,address1:String //* 동/읍/면/리
				,address2:String //* 세부주소
			}
		}
		//+ 이미지들
		,images:[{
		        	 imageUri:String //* 이미지 URI
		        	 ,icon:Uri:String //* 아이콘 URI
		         }]
		//+ 최근 소식들
		,news:[{
			content:{
				id:String //* 소식의 ID
				,message:String //* 소식 내용
				,sentDateTime:DateTime //* 소식 보낸 YYYYMMDD 24H:mm:ss
				,imageUri:String //+ 이미지가 존재하는 경우, 첫번째 이미지의 URI
				,read:Boolean //+ 소식을 읽은 여부 (서버 기준임)
				,readDateTime:DateTime //+ 소식을 읽은 일시 (안읽었으면 키 없음)
			}
			,coupon:{
				id:String //* 쿠폰 ID
				,type:String //* 쿠폰 종류 ("SALE": 세일(디스카운트), "1+1", "2+1", "FREE", "ETC") - 종류에 따라 쿠폰 이미지(아이콘) 달라짐
				,saleAmount:Number //+ 쿠폰 종류가 SALE 일 때, 세일의 할인율
				,message:String //* 쿠폰 내용
				,dueDateTime:DateTime //* 만료 일/시
			}
		}]
	}
}