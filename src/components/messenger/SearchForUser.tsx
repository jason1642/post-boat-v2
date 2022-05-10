import * as React from 'react';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete/index.js';
import TextField from '@mui/material/TextField/index.js';
import CircularProgress from '@mui/material/CircularProgress/index.js';
import {queryUsers } from '../api-helpers/user-api.ts'
import Grid from '@mui/material/Grid/index.js';
import Typography from '@mui/material/Typography/index.js'
import Box from '@mui/material/Box/index.js';
import parse from 'autosuggest-highlight/parse';
import PersonIcon from '@mui/icons-material/Person'; 
import {Link} from 'react-router-dom'
import styled from 'styled-components';
interface ISearchForUserProps {
  handleChangeCurrentChat: Function,
} 

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
const ItemLink = styled(Link)`
  text-decoration: none;
  background-color: darkgrey;
  color: black;
  border-bottom: 1px solid white;
  /* &:hover{
    color: green;
  } */
  `;
const SearchForUser: React.FunctionComponent<ISearchForUserProps> = ({handleChangeCurrentChat}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [options, setOptions] = useState([])
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const loading = open && options.length === 0


  
  useEffect(() => {
    console.log(value)
  }, [value]);

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined
    }



    if (active && inputValue !== '') {
      console.log(value)
      console.log(inputValue)
      // searchDatabase(inputValue)
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
    // console.log(open)
  }, [open]);
  return (
    <Autocomplete
      // To style component, see css file at src/app.css
    id={'user-search'}
      style={{
        width: '100%',
        padding: '0px',
        backgroundColor: 'rgba(125, 124, 124, 0.669)',
        borderWidth: '0px',
        borderRadius: '4px',
      }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      options={options}
      clearOnEscape={true}
      clearOnBlur={true}
      loading={loading}
      isOptionEqualToValue={(option, value) => option.username === value.username}
      getOptionLabel={(option) => option.username}
      noOptionsText='No users found'
      onChange={(event, newValue) => {

        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={async (event, newInputValue) => {
          await queryUsers(newInputValue).then(res => {
            console.log(res.data)
            if (!res.data) {
              setOptions([])
            } else {
                  setOptions(res.data)
            }
              },err=>console.log(err))
                }}



      renderOption={(props: any, option) => {
        // console.log(option)
        // console.log(options)
        // console.log(props)
        // const matches = option.username;
        const parts = parse(
          option.username,
          options.map((match) => [match.offset, match.offset + match.length]),
        );

        return option.preferences !== undefined ?  (
          <ItemLink {...props}
            to={`/messenger/${option._id}`}
          >
            <Grid
              onClick={async () => {
              console.log(option._id)
            await handleChangeCurrentChat(option._id)
            }}
              container alignItems="center">
              <Grid item>
                <Box
                  component={PersonIcon}
                  sx={{ color: option.preferences.avatar_color, mr: 2 }}
                />
              </Grid>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}

                <Typography variant="body2" color="text.secondary">
                  {option.username}
                </Typography>
              </Grid>
            </Grid>
          </ItemLink>
        ) : <div style={{ padding: '10px', textAlign: 'center'}}>
            No users found
        </div>
      }}

      // filterOptions={(x) => x}




      renderInput={(params) => (
        <TextField
        style={{backgroundColor: 'grey'}}
          {...params}
          label='Search for user'
          onClick={() => {
            console.log('clicking result')
          }}
          InputProps={{
            ...params.InputProps, endAdornment: (<>
              {console.log(params)}
              {loading ? <CircularProgress color="inherit"  size={20} /> : null}
              {params.InputProps.endAdornment}
            </>)
          }}
          
        />
      )}
    
    />);
};

export default SearchForUser;
