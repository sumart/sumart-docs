/**
 * [다큐먼트 정의] 쿠폰
 * [Collection] coupon
 */

{
	_id:<ObjectId>
	,shopId:<shop._id>
	,senderId:<user._id> //* 쿠폰을 발행한 상인(직원) ID
	,type:String //* 쿠폰 종류 ("SALE": 세일(디스카운트), "1+1", "2+1", "FREE", "ETC") - 종류에 따라 쿠폰 이미지(아이콘) 달라짐
	,saleAmount:Number //+ 쿠폰 종류가 SALE 일 때, 세일의 할인율
	,message:String //* 쿠폰 내용
	,dueDateTime:DateTime //* 만료 일/시
	//* 쿠폰을 발송한 대상 정보
	,target: {
		applyTo:String //* 쿠폰 적용 대상 ("ALL":전체, "USER":특정 유저)
		,targetUserId:<user._id> //+ target 이 USER 이면, 이때 해당 유저의 ID
		,totalReceiver:Number //* 총 수신자
		,totalDownload:Number //* 쿠폰을 다운로드(보관)한 사람 수
	}
}
