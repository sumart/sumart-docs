/**
 * [다큐먼트 정의] 사용자
 * [Collection] user
 * 
 */

{
	_id:<ObjectId> //* 사용자에게 자동 발급되는 ID (unique)
	,name:String //* 이름
	,alias:String //* 별명(unique)
	,appGenId:String //* 앱 내에서 자동 생성한 UUID. 향후에 앱 재설치 여부나 동일 앱에서의 요청 등을 확인할 때 사용한다.
	//+ Contact 정보
	,contact: { 
		//+ 연락처 정보
		phone: {
			//* 휴대폰 번호
			mobile:{
				countryNumber:string //* 국가번호. 대한민국 82
				,number:string	//* 휴대폰 번호. XXX-XXXX-XXXX 형태로, Dash 포함
			}
		}
	}
	//+ 상인과 관련한 정보
	,business: {
		//* 사용자와 관계한 샵 관련 정보
		shops: [{
			shopId:<shop._id> //* 관련 Shop 의 _id
			,position:String //* 해당 샵의 직위 (M:Manager / C:Crew)
		}]
	}
	//* 관심 데이터
	,favorites: {
		locations:[{
			long:Number
			,lat:Number
			,index:Number //* 몇번째 관심포인트인지 표시 (0~2)
			,alias:String //+ 관심포인트의 이름
		}]
	}
	//+ 보관함
	,keeping:{
		//+ 보관중인 쿠폰
		coupons:[{
			couponId:<coupon._id> //* 보관중인 쿠폰의 ID
			,keepDateTime:DateTime //* 보관 일시
			//+ 쿠폰의 상태
			,useStatus:{
				used:Boolean //* 쿠폰의 사용 여부
				,usedDateTime:DateTime //* 쿠폰의 사용 일시
			}
		}]
	}
	//+ 사용자의 변경에 대한 로그 정보
	,logs:[{
		event:String	//* N:신규등록, TS:Transform to Seller, TC: Transform to Crew, Q:탈퇴, BL:BLOCKED, SE:Shop Edit, NN:기존정보로 등록
		,dateTime:DateTime //* 이벤트 일시
		,message:String //+ 사유
	}]
}