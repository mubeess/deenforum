import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Cancel, PhoneAndroid, Email, VerifiedUser } from '@material-ui/icons';
import './Form.css'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

 function SignUp(props) {
  const classes = useStyles();
  const Change=()=>{
     props.history.push('/')
  }

  return (
    <div className="formContainer">
        <div className="head">
        <Cancel onClick={Change}></Cancel >
          <h2 className="label">Sign Up</h2>
        </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
        <AccountCircle></AccountCircle>
        <TextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder=""
          helperText="Enter Your Full Name Above"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
       <VerifiedUser></VerifiedUser>
       <TextField
          id="standard-full-width"
          label="User Name"
          style={{ margin: 8 }}
          placeholder=""
          helperText="Enter Your Username"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Email></Email>
        <TextField
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder=""
          helperText="Enter a valid email address"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <PhoneAndroid></PhoneAndroid>
        <TextField
          id="standard-full-width"
          label="Phone"
          style={{ margin: 8 }}
          placeholder=""
          helperText="Enter a valid phone number"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <button>Submit</button>
      </div>
    </div>
  );
}
export default withRouter(SignUp);