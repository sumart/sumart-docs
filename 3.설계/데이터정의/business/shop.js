/**
 * [다큐먼트 정의] 상점
 * [Collection] shop
 * 
 */

{
	_id:<ObjectId> //* 샵의 고유 ID(unique)
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
	        	 originalFileName:String //* 업로드 당시의 파일 이름
	        	 ,serverFileName:String //* 서버에 저장된 파일 이름
	        	 ,serverDirPath:String //* 서버에 저장된 파일의 디렉토리 경로
	        	 ,label:String //+ 이미지의 설명부에 보여질 간단한 라벨
	        	 ,use:String //+ 이미지의 사용 용도 (D: 대표이미지(상점이미지)). 없으면 기타이미지임.
	        	 //+ 아이콘 파일 : 아이콘 만드는 작업은 서버에서 Background 로 실행된다. 단, 대표이미지는 즉시 생성한다.
	        	 icon:{
	        		 serverFileName:String //* 서버에 저장된 아이콘 파일 이름
	        		 ,serverDirPath:String //* 서버에 저장된 아이콘 파일 Path
	        	 }
	         }]
	,crews:[{
		crewId:<user._id> //* 직원의 ID
		,status:String //* 직원의 상태 (R:등록요청상태, A:승인, C:취소/삭제)
	}]
	
}

