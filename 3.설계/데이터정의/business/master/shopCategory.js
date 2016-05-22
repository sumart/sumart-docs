/**
 * [다큐먼트 정의] 카테고리
 * [Collection] master
 * 
 */

{
	_id:<ObjectId>
	,masterName:String //* 마스터 코드의 이름. "category"
	,version:String //* 카테고리 코드의 버전
	,storeInClient:Boolean //* 클라이언트에 저장되어야 하는지 여부
	//* 카테고리 정보
	category:[{
		code:String //* 카테고리 코드. 4자리 String
		,name:String //* 카테고리의 이름
		//+ 서브 카테고리. Tree 형태로 계속 추가 가능하다. 최초 설계시에는 2 레벨 까지만 하도록 함. (분류는 "네이버 지도" 앱의 분류 따름)
		,sub:[{
			code:String
			,name:String
			,sub:[{
			}]
		}]
	}]
}