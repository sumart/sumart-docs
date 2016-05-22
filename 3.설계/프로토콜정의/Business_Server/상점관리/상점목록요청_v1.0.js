/**
 * Protocol 이름 : 상점목록요청
 * Sequence Diagram(SD) : 상점목록요청
 * 화면 번호 : 013
 * method: GET
 * URI: /shops
 * 
 * [설명]
 * 상점의 목록을 가져오는 API로, 각종 조건으로 상점을 검색할 수 있음
 */

// REQUEST
{
	header:{
		uri:"/shops" //+ :userId - 조회를 원하는 사용자의 ID.
		,queryParam:{
			type:String //* 목록 검색 방식을 지정 (LOC - 좌표, FAV - 관심포인트)
			,lat:Number //+
			,long:Number //+
			,favoriteIndex:Number //+ 관심포인트 번호 (0~2)
			,range:Number //+ 검색 반경 (미터. 미지정시 1,000m 기본)
			,category:String //+ 카테고리 (기본 전체)
			,limit:Number //+ 최대 목록 개수(기본 무한대)
		}
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
	//* 상점 목록
	,body:[{
		shopId:String
		,name:String
		,message:String
		,products:[String]
		,phone:{
			countryNumber:String //* +를 제외한 국가번호
			,number:String //* -를 제외한 전화번호
		}
		,openHours:{
			fromTime:String //* 오전/오후 HH:mm
			,toTime:String //* 오전/오후 HH:mm
		}
		,location:{
			long:Number
			,lat:Number		
			//* 주소
			,address:{
				country:String //* 국가
				,state:String //* 시,도
				,prov:String //* 구/군
				,address1:String //* 동/읍/면/리
				,address2:String //* 세부주소
			}
		}
		,imageUri:String //* 샵 대표이미지 URI
	}]
}