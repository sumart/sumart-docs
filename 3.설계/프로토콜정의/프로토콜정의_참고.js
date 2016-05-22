/**
 * 프로토콜 을 정의하는 규칙에 대하여 설명함
 * 
 * [설명]
 * 서버의 API 는 RESTful API 형태로 HTTP 기반으로 통신하며,
 * Client 의 요청 (REQUEST)과 Server 의 응답 (RESPONSE) 부분으로 나누어 정의한다.
 * 
 *  [중요] 모든 REQUEST 에 대한 에러상황은 error.js 에 정의 된 형태의 응답으로 전달된다.
 *  [중요] 서버는 Client 의 Login 처리를 위해 Session 을 사용한다. Client 는 Session(JSESSIONID)을 처리해야 한다.(쿠키)
**/

// REQUEST
/**
 * Client 에서 요청을 보낼 때 사용되는 API 의 프로토콜을 정의함
 */

{
	/**
	 * header: HTTP 요청의 Header 에 지정해야 하는 값들을 나타냄.
	 * 
	 * [설명]
	 * header Object 는 HTTP 요청 시 body 로 전달되는 데이터가 아니라, 
	 * HTTP 요청 프로토콜의 header 정보에 설정되어야 하는 값이다.
	 * 
	 * Client 는 header 정보를 HTTP 요청의 body 에 전달하여서는 안된다.
	 * 요청 시 HTTP Header 에 아래 header 정보를 설정하여 보내야 한다. 
	 */
	header:{
		/** 
		 * uri: 사용하는 API 의 URI 를 나타냄.
		 * 
		 * [설명]
		 * 값은 URI 의 경로이며, URI Parameter (:param), query Parameter(query-param=value&query-param2=value2)형식임.
		 * 서버의 Context 이름은 유동적이므로, 향후 서버의 Context 가 결정되면,
		 * https://<domain/host>:<port>/<content>/<uri> 형태로 요청하도록 한다.
		 * 
		 * 표현 예시) "/user/:userId?reqImage&reqDetail"
		 * 		:userId : URL-Encoded 된 userId 를 URI 파라미터로 지정함
		 * 		reqImage : query param 으로, URL-Encoded 된 값을 reqImage=값 의 형식으로 지정 함
		 */
		uri:String 
		/**
		 * method: HTTP 요청의 method 를 지정
		 * 
		 * [설명]
		 * 값은 "POST", "GET", "PUT", "DELETE" 중 1개임
		 * POST : 주로 등록, 생성 등의 요청에 사용
		 * GET : 주로 조회와 관련된 요청에 사용
		 * PUT : 주로 기존 데이터의 수정 요청에 사용
		 * DELETE : 주로 데이터의 삭제 요청에 사용
		 */
		,method:String
		/**
		 * 서버로 전송하는 컨텐츠의 타입 지정
		 * 
		 * [설명]
		 * 프로토콜은 대부분 JSON 데이터 기반의 RESTful API 형태이므로,
		 * 대부분의 contentType (HTTP 헤더의 "content-type")은 "application/json" 형태로 요청하면 된다. 
		 */
		,contentType:String
	}
	/**
	 * HTTP 요청의 body 부분에 전달되어야 하는 데이터
	 * 
	 * [설명]
	 * HTTP 요청 중, POST, PUT 의 경우, body 에 데이터를 주로 보내게 된다.
	 * 이때, HTTP 요청의 body 에 전달되어야 하는 데이터를 body:{} 로 정의한다.
	 * 
	 * body Object 를 내용으로 그대로 전달하도록 한다. (body 키워드를 제외한 body Object 의 내용만을 전송)
	 */
	,body: {
		key:Type // JSON 의 key:value 쌍으로 이루어진 값들을 전달한다
		,keys:[Type] // 여러개의 값을 가질 수 있는 경우, key 의 이름을 "복수형"으로 보내며, "여러개의 Type 을 지정할 수 있다" 
	}
}
