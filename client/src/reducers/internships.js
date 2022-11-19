export default (internships=[],actions) => {
	switch (actions.type) {
		case 'GET_INTERNSHIPS':
			return actions.payload;
		case 'SEARCH_INTERNSHIPS':
			return actions.payload;
		case 'ADD_INTERNSHIPS':
			return [...internships,actions.payload];
		default:
			return internships;
	}
}