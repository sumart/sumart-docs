/**
 * [다큐먼트 정의] 데이터 버전
 * [Collection] master
 * 
 * [앱버전], [데이터버전]에 맞는 마스터 코드 다큐먼트들의 조합을 묶어놓음
 * 앱이나 데이터 버전이 갱신된 때 마다 이 다큐먼트가 새로 생성되어야 함 
 * 
 */

{
	_id:<ObjectId>
	,appVersion:String //* 앱버전
	,dataVersion:String //* 데이터 버전
	,shopCategoryId:<shopCategory._id> //* 적합한 샵 카테고리 ID
	,addressCodeId:<addressCode._id> //* 적합한 주소코드 ID
}