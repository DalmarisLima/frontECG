import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
    root: { 
        width:500,
    },
};

function PositionedTooltips(props) {
    const { classes } = props;
    return (
      <div className={classes.root} controls style={{ marginLeft: '275px' }}>
        <Grid container justify="center">
          <Grid item>
            
          <Progress type="circle" percent={100} />
            
            
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            
          <Progress type="circle" percent={0} />
           
            <br />
            
              <Button>left</Button>
           
            <br />
           
              <Button>left-end</Button>
            
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column" spacing={0}>
            <Grid item>
              
            <Progress type="circle" percent={0} />
              
            </Grid>
            <Grid item>
              
                <Button>right</Button>
             
            </Grid>
            <Grid item>
              
                <Button>right-end</Button>
              
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            
              <Button>bottom-start</Button>
           
            
              <Button>bottom</Button>
           
            
              <Button>bottom-end</Button>
           
          </Grid>
        </Grid>
      </div>
    );
  }
  
  PositionedTooltips.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PositionedTooltips);