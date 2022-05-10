import * as React from 'react';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete/index.js';
import TextField from '@mui/material/TextField/index.js';
import CircularProgress from '@mui/material/CircularProgress/index.js';
import {queryUsers } from '../api-helpers/user-api.ts'

interface ISearchForUserProps {
}





const SearchForUser: React.FunctionComponent<ISearchForUserProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [options, setOptions] = useState([])
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const loading = open && options.length === 0

  const searchDatabase = async (input: string) => {
    
    await queryUsers(input).then(res => {
      console.log(res.data)
      setOptions(res.data)
    },err=>console.log(err))
  } 
  


  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined
    }



    if (active && inputValue !== '') {
      console.log(value)
      console.log(inputValue)
      searchDatabase(inputValue)
    }

    console.log('querying')
    return () => {
      active = false
    }
  }, [loading, inputValue]);


  useEffect(() => {
    if (!open) {
      
      setOptions([])
    }
    console.log(open)
  }, [open]);
  return (
    <Autocomplete
      id={'user-search'}
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      options={options}
      loading={loading}
      isOptionEqualToValue={(option, value) => option.username === value.username}
      getOptionLabel={(option) => option.username}

      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search for user'
          onClick={() => {
            console.log('clicking result')
          }}
          InputProps={{
            ...params.InputProps, endAdornment: (<>
              {console.log(params)}
              {loading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </>)
          }}
          
        />
      )}
    
    />);
};

export default SearchForUser;
