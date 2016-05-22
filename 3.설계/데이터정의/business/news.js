/**
 * [다큐먼트 정의] 소식
 * [Collection] news
 * 
 */

{
	_id:<ObjectId>
	,shopId:<shop._id> //* 소식을 발송한 샵의 ID
	,senderId:<user._id> //* 소식 발송한 상인(직원) ID
	,message:String //+ 소식 내용. UI 상에서 100자 제한
	,sentDateTime:DateTime //* 소식 보낸 YYYYMMDD 24H:mm:ss
	,images:[{
		originalFileName:String //+ 업로드 당시의 파일 이름
		,serverFileName:String //* 서버에 저장된 파일 이름
		,serverDirPath:String //* 서버에 저장된 파일의 디렉토리 경로
		,label:String //+ 이미지의 설명부에 보여질 간단한 라벨
		,use:String //+ 이미지의 사용 용도 (D: 대표이미지(상점이미지)). 없으면 기타이미지임.
		}]
	,coupon:{
		couponId:<coupon._id>
	}
	,target:{
		totalReceiver:Number
	}
	,readers:[{
		userId:<user._id>
		,readDateTime:DateTime
	}]
}

