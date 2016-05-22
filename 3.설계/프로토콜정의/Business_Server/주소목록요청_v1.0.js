/**
 * Protocol 이름 : 주소목록요청
 * Sequence Diagram(SD) : 주소목록요청
 * 화면 번호 : 공통
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
		 * :appGenId - 앱에서 자동 생성한 UUID. 앱 설치 후 최초 실행 시 앱 내에서 Generate 되어야 한다.
		 */
		uri:"/init/:appGenId"
		,method:"PUT"
		,contentType:"application/json"
	}
	,body:{
		appVersion:String //* 현재 앱의 버전
		,dataVersion:String //* 현재 데이터의 버전
		//+ 사용자 정보 (로그인 정보)
		,loginInfo:{
			userId:String //* 등록된 사용자의 ID (서버가 Gen 해준 것)
			,alias:String //* 사용자의 별명
		}
		,runByPush:Boolean //* Push 를 눌러서 앱 실행했는지 여부 (향후 어떤 푸시를 선택했는지 까지 되게 하기)
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

