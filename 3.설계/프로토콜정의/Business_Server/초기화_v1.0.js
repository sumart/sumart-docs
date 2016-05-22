/**
 * Protocol 이름 : 초기화
 * Sequence Diagram(SD) : 앱실행
 * 화면 번호 : 001
 * method: GET
 * URI: /init
 * 
 * [설명]
 * 서버에 최초로 접속할 때 서버의 변경사항 등을 받아오기 위함 
 */

// REQUEST
{
	header:{
		/**
		 * * :appGenId - 앱에서 자동 생성한 UUID. 앱 설치 후 최초 실행 시 앱 내에서 Generate 되어야 한다.
		 * * :appVersion - 앱의 현재 버전
		 * + :dataVersion - 데이터 버전 (없으면 안보냄)
		 */
		uri:"/init/:appGenId/:appVersion/:dataVersion"
		,queryParam:{
			runByPush:Boolean //* Push 를 눌러서 앱 실행했는지 여부 (향후 어떤 푸시를 선택했는지 까지 되게 하기)
		}
		,method:"GET"
		,contentType:"application/json"
		,userId:String //+ 사용자의 ID
	}
}

// RESPONSE
{
	header:{
		status:200
		,contentType:"application/json"
	}
	,body:{
		apiKey:String //* API 를 사용하기 위한 KEY. 이후 요청 시 필요하므로 반드시 클라이언트에서 저장하여 이후 요청 시 사용.
		//+ 공지사항
		,notice:{
			title:String
			,message:String
		}
		//+ 변경사항 (데이터 업데이트)
		,update:[{
			target:String //* 업데이트 대상 코드 ("SHOP_CATEGORY": 샵 카테고리. -이후 필요에 따라 추가- 
			,message:String //* 업데이트 메시지 (사용자에게 OOOO 업데이트가 있습니다. 와 같이 표시 위함)
			,reqUrl:String //* 업데이트 내용 요청할 URL
			,size:Number //+ 다운로드 데이터 사이즈
		}]
	}
}

