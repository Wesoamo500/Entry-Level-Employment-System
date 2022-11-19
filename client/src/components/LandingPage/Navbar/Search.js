import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchJobs,fetchJobs } from '../../../actions/jobs';


export default function Search() {
    const [word,setWord] = React.useState(" ")
    const dispatch = useDispatch()
    const handleClick = (e) =>{
        e.preventDefault()
        console.log(word)
        e.preventDefault()
        dispatch(searchJobs(word))

    }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: 400,marginRight:'20px',backgroundColor:'whitesmoke'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 ,backgroundColor:'whitesmoke'}}
        placeholder="search available jobs"
        value={word}
        onChange={(e)=>setWord(e.target.value)}
      />
      <IconButton onClick={handleClick} type="button" sx={{ p: '10px',backgroundColor:'whitesmoke'}} aria-label="search">
        <SearchIcon color='whitesmoke' sx={{backgroundColor:'whitesmoke'}}/>
      </IconButton>
    </Paper>
  );
}
