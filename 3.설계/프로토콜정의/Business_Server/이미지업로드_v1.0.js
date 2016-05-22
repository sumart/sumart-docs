/**
 * Protocol 이름 : 파일업로드
 * Sequence Diagram(SD) : 파일업로드
 * 화면 번호 : 공통
 * method: POST
 * URI: /upload/files
 * 
 * [설명]
 * 파일을 업로드하는 API.
 * 1. 파일을 업로드 한다.
 * 2. 서버는 업로드 된 파일을 임시 디렉토리에 저장한다.
 * 3. Response 로 받은 ID 를 Client 에서 저장한다.
 * 4. Client는 데이터 요청 시에 Response 로 받은 ID 를 File ID 로써 전달한다
 * 5. 서버는 임시디렉토리에 있는 이미지 중 확인된 파일(데이터와 관련된)을 저장소로 옮긴다.
 * 6. 서버는 주기적으로 (1시간 간격 정도) 임시디렉토리 내에 1시간 보다 오래된 파일을 삭제한다.
 */

// REQUEST
{
	header:{
		uri:"/upload/files"
		,contentType:"multipart/form-data"
		,method:"POST"
		,userId:String
	}
	body:{
		fileName:String //* 파일이름
		//## 이하 멀티파트 데이터 ##//
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		fileId:String //* 업로드된 파일의 임시디렉토리 내의 파일명 = 파일 ID
	}
}
