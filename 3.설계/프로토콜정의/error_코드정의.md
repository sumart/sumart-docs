### 프로토콜 에러코드 정의

> 프로토콜에서 발생할 수 있는 에러코드를 정의함.<br/>
> STATUS (Code) 는 HTTP Response 의 status 코드를 말함

#### STATUS (400)
- error.code(`EXCEED_UID_GEN`)
	> **message**: 사용자 ID 생성 요청 한계를 초과함  
	
	> <small> 사용자 ID 의 발급요청은 1일 10회 이상을 초과할 수 없다. </small>
	
- error.code(`DATA_NOT_VALID`)
	> **message**: (Validation 실패로 인한 에러메시지 내용)
	
	><small> 본 메시지 내용은 각 클라이언트 요청값의 Validation 오류 상황마다 다르다. 클라이언트는 서버에서 내려준 Validation 메시지를 사용자에게 표시하면 된다.</small>
	
- error.code(`NOT_EXISTING_DATA`)
	> **message**: (OOOO 데이터가 존재하지 않음)
	
	