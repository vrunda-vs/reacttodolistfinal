import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { addTodo } from '../reduxstore/actions';


class Addtodo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { input: "" };
    }
   
    updateInput = input => {
        this.setState({ input });
      };
      handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
      };
      render(){
        return(
            <div>
                 <Container maxWidth="sm" >
                <Grid container alignItems="center">
                    <Grid item md={12}>
                        <TextField value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})} 
                        id="outlined-basic" fullWidth label="Enter Task" multiline variant="outlined" />
                    </Grid>
                    <Grid item md={12}>
                        <Button  variant="contained" color="primary" onClick={this.handleAddTodo}>
                           Add
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            </div>
        )
      }
   
}

export default connect(null,{addTodo})(Addtodo);