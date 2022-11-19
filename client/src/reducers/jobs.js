export default (jobs=[],actions) => {
	switch (actions.type) {
		case 'GET':
			return actions.payload;
		case 'SEARCH':
			return actions.payload;
		case 'ADD':
			return [...jobs,actions.payload];
		case 'DELETE':
			return jobs.filter((job)=>job.id !== actions.payload)
		case 'SEND':
			return actions.payload
		default:
			return jobs;
	}
}