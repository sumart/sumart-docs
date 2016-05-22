/**
 * Protocol 이름 : 사용자등록
 * Sequence Diagram(SD) : 사용자등록
 * 화면 번호 : 002
 * method: POST
 * URI: /users
 * 
 * [설명]
 * 일반 사용자의 등록 프로토콜 
 */

// REQUEST
{
	header:{
		uri:"/users"
		,method:"POST"
		,contentType:"application/json"
		,apiKey:String
	}
	,body:{
		userId:String //* 사용자의 ID (서버로 부터 발급받음)
		,appGenId:String //* 앱이 자체 생성한 (설치 후 최초 실행 시 1회/UUID) ID 
		,alias:String //* 사용자의 별명. (영문 4자, 한글 2자 이상이어야 함)
		,manualInput:Boolean //* 사용자가 userID 를 직접 입력한것인지 여부.
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		/**
		 * 등록 결과 (OK : 신규 등록됨. AEU: 이미 존재하는 사용자임/변경처리됨)
		 * 
		 * [주의] 변경처리됨(AEU) 결과를 받은 경우, Client 의 설정 및 상인여부등을 알기 위해
		 * 관련된 조회 API 를 호출하여야 함
		 */
		success:String
	}
}