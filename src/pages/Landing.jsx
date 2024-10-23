import { Autocomplete, TextField } from '@mui/material';

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];


function Landing() {
  return (
    <div>
      Landing
      <h1 className="text-3xl font-bold underline bg-blue-400">
        Hello world!
      </h1>
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  )
}

export default Landing;