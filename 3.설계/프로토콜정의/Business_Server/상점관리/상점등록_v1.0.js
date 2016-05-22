/**
 * Protocol 이름 : 상점등록
 * Sequence Diagram(SD) : 상점등록
 * 화면 번호 : 033
 * method: POST
 * URI: /shops
 * 
 * [설명]
 * 상점 등록
 */

// REQUEST
{
	header:{
		uri:"/shops"
		,method:"POST"
		,contentType:"application/json"
		,userId:String
		,apiKey:String
	}
	,body:{
		name:String //* 샵 이름
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
		,imageIds:[{
			imageId:String //* 파일 업로드를 통해 받은 이미지파일의 ID
			,use:String //* D - 대표이미지, 없으면 기타 이미지임
		}]
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		shopId:String //* 상점 ID
		,shopCode:String //* 상점코드 (6자리 패스워드/숫자). 상점 등록 시 발급 됨.
	}
}