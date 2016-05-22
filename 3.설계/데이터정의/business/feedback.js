/**
 * [다큐먼트 정의] 사용자 피드백
 * [Collection] feedback
 * 
 * 1개의 피드백 마다 1개의 Document 생성된다.
 * (나중에 INDEXING 고려하면, 하나의 KEY 에 여러값의 배열보다는
 *  여러개의 Document 가 들어있는게 더 빠를듯해서임. 아니면 변경될 수 있음)
 * 
 */

{
	_id:<ObjectId>
	,userId:<user._id>
	,shopId:<shop._id> //* 관련 상점의 ID
	//+ 소식을 읽은 사실을 저장함
	,newsReads:{
		newsId:<news._id>
		,readDateTime:DateTime
	}
	//+ 쿠폰 사용
	,couponUse:{
		,couponId:<coupon._id>
		,useDateTime:DateTime
	}
}