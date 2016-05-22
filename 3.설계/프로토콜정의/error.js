/**
 * Protocol 이름 : 에러
 * Sequence Diagram(SD) : 에러
 * 화면 번호 : 전 화면 / 기능 공통
 * 
 * [설명]
 * 에러가 발생한 상황에서 서버가 보내는 메시지.
 * 모든 서버와의 통신에 공통으로 사용되는 에러메시지임
 */

// REQUEST
//* ANY PROTOCOL / ANY REQUEST

// RESPONSE
{
	header:{
		status:Number //* 상황에 따라 다름. 400 : 잘못된 요청(클라이언트오류) / 500: 서버오류
		,contentType:"application/json"
	}
	body:{
		error:{	//+ 에러가 있는 경우에 error 객체가 포함 됨. (성공인 경우 없음)
			code:string	//* 에러에 대한 코드 번호
			,message:string	//+ 에러내용 메시지
		}
	}
}


