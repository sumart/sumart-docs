/**
 * [다큐먼트 정의] 알림
 * [Collection] notifications
 * 
 * 모든 문의에 대한 알림(PUSH)내역은 이 Document 형식으로 저장된다.
 * 성능을 위해 Redis 에 넣고 주기적으로 DBMS 에 넣어야 하겠다
 */

{
	_id:<ObjectId>
	,type:String //* 알림의 타입 (INQ - 문의알림, ANS - 답변알림, NEWS - 소식알림,
	,alertDateTime:DateTime
	,message:String
}