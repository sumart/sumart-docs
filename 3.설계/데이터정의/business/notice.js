/**
 * [다큐먼트 정의] 공지사항
 * [Collection] notice
 * 
 */


{
	_id:<ObjectId>
	,message:String //* 공지사항 내용
	,enable:Boolean //* 사용중인지 여부
	,createDateTime:DateTime //* 공지 올린 일시
	,endDateTime:DateTime //* 공지 종료일시
	,sendPush:Boolean //* PUSH 로 알림 보낼지 여부
}