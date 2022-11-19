export const auth = ( state = {}, actions) => {
	switch (actions.type) {
		case 'AUTH_REQUEST':
			return {loading:true}
		case 'AUTH':
			return {loading:false,authData:actions.payload, success:true}
		case 'AUTH_FAIL':
			return {loading:false,error:actions.payload,success:false}
		case 'LOGOUT':
			localStorage.clear()
			
			return {}
		default:
			return state;
	}
}

export const userUpdate = (state = {}, actions) =>{
	switch(actions.type){
		case 'USER_UPDATE_REQUEST':
			return {loading:true};
		case 'USER_UPDATE_SUCCESS':
			return {loading:false, authData: actions.payload,success:true}
		case 'USER_UPDATE_FAIL':
			return {loading:false, error: actions.payload, success:false}
		default:
			return state;
	}
}

export const applications = (state = {}, actions)=>{
	switch(actions.type){
		case 'APPLICATION_REQUEST':
			return {loading:true};
		case 'APPLICATION_SUCCESS':
			return {loading:false, applicants: actions.payload,success:true}
		case 'APPLICATION_FAIL':
			return {loading:false, error: actions.payload, success:false}
		default:
			return state;
	}
}
