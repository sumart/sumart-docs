/**
 * Protocol 이름 : 소식상세요청
 * Sequence Diagram(SD) : 소식상세요청
 * 화면 번호 : 009
 * method: POST
 * URI: /news
 * 
 * [설명]
 * 소식의 상세정보를 요청.
 */

// REQUEST
{
	header:{
		uri:"/news/:newsId"
		,method:"GET"
		,contentType:"application/json"
		,userId:String //* 사용자 ID
		,apiKey:String //* 서버에서 발급한 API KEY
	}
}

// REPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		//* 소식 상세정보
		news:{
			newsId:String //* 소식의 ID
			,message:String //* 소식 내용
			,sentDateTime:DateTime //* 소식 보낸 YYYYMMDD 24H:mm:ss
			,read:Boolean //+ 소식을 읽은 여부 (서버 기준임)
			,readDateTime:DateTime //+ 소식을 읽은 일시 (안읽었으면 키 없음)
			,images:[{
				imageUri:String // 이미지의 URI
				,label:String //+ 이미지의 설명부에 보여질 간단한 라벨
				,use:String //+ 이미지의 사용 용도 (D: 대표이미지(상점이미지)). 없으면 기타이미지임.
			}]
		}
		,shop:{
			id:String //* 상점 ID
			,name:String //* 상점 이름
			,favoritePoint:Number //* 상점이 해당하는 사용자의 관심포인트의 번호 (관심포인트 해당 없으면 -1)
			,phones:[{
				countryNumber:String //* +를 제외한 국가번호
				,number:String //* -를 제외한 전화번호
				,use:String //+ D: 대표번호, 없으면 나머지는 순서대로 사용됨
				,useName:String //+ 전화번호의 이름(용도)
			}]
			,location:{
				long:Number //*
				,lat:Number //*
				,address:{
					country:String //* 국가
					,state:String //* 시,도
					,prov:String //* 구/군
					,address1:String //* 동/읍/면/리
					,address2:String //* 세부주소
				}
			}
		}
		,coupon:{
			id:String //* 쿠폰 ID
			,type:String //* 쿠폰 종류 ("SALE": 세일(디스카운트), "1+1", "2+1", "FREE", "ETC") - 종류에 따라 쿠폰 이미지(아이콘) 달라짐
			,saleAmount:Number //+ 쿠폰 종류가 SALE 일 때, 세일의 할인율
			,message:String //* 쿠폰 내용
			,dueDateTime:DateTime //* 만료 일/시
		}
	}
}