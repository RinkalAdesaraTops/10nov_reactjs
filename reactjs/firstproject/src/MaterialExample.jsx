import React from "react";
import {Box,Grid,Typography,Stack,Button,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup} from '@mui/material';
import {Delete,DeleteOutlined,DeleteRounded,DeleteTwoTone,DeleteSharp,DeleteForever,FourK,ThreeSixty,ThreeDRotation} from '@mui/icons-material';

const MaterialExample = () => {
  return (
    <>
    <div>
      <h3>Material UI Example</h3>
       <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
    <hr />
     <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ color: 'text.primary' }}>
        <Grid size={4}>
          <Typography>Filled</Typography>
        </Grid>
        <Grid size={8}>
          <Delete />
          <DeleteForever/>
        </Grid>
        <Grid size={4}>
          <Typography>Outlined</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteOutlined />
          
        </Grid>
        <Grid size={4}>
          <Typography>Rounded</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteRounded />
          
        </Grid>
        <Grid size={4}>
          <Typography>Two Tone</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteTwoTone  />
         
        </Grid>
        <Grid size={4}>
          <Typography>Sharp</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteSharp  />
         
        </Grid>
        <Grid size={4}>
          <Typography>Edge-cases</Typography>
        </Grid>
        <Grid size={8}>
          <ThreeDRotation  />
          <FourK  />
          <ThreeSixty  />
        </Grid>
      </Grid>
    </Box>

    </>
  );
};

export default MaterialExample;
