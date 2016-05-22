/**
 * [다큐먼트 정의] 주소
 * [Collection] master
 * 
 */

{
	_id:<ObjectId>
	,masterName:String //* 마스터 코드의 이름. "address"
	,version:String //+ 주소코드 데이터의 버전
	,locale:{
		lang:String //* 언어(ko)
		,country:String //* 국가(kr)
		,extra:String //+ 기타(확장용)
	}
	,storeInClient:Boolean //* 클라이언트에 저장되어야 하는지 여부
	//* 주소코드정보
	address:{
		country:{
			name:String
			,location:{
				long:Number
				,lat:Number
			}
			,postCode:String
			// sub 구조로 계속 이어짐. 3레벨 이하가 적당함
			sub:[{
				name:String
				,location:{
					long:Number
					,lat:Number
				}
				,postCode:String
				sub:[{
					name:String
					,location:{
						long:Number
						,lat:Number
					}
					,postCode:String
				}]
			}]
		}
	}
}