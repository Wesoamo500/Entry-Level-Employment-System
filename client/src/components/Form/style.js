import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
	paper:{
		marginTop:'8px',
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		padding:'10px',
		
		height:'80vh',
		rowGap:'30px'
	},
	gutter:{
		marginBottom:'20px',
		marginTop:'20px'
	},
	root:{
		'& .MuiTextField-root':{
			margin:'2px'
		},
	},
	avatar:{
		margin:"1px",
		backgroundColor:"theme.palette.secondary.main",
	},
	form:{
		width:'100%',
		marginTop:"theme.spacing(3)"
	},
	submit:{
		margin:"theme.spacing(3,0,2)",
	},
	googleButton:{
		marginBottom:"theme.spacing(2)"
	},
}))