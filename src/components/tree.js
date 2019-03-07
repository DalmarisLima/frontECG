import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Row, Col } from 'antd';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: 500,
  },
};

function PositionedTooltips(props) {
  const { classes } = props;
  return (
    <div>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Progress
            type="circle"
            percent={100} format={() => 'Nível 1'}
            width='100px'
            strokeWidth='10' />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
      </Row>


      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Progress
            type="circle"
            percent={20} format={() => 'Nível 2'}
            width='100px'
            strokeColor='#6CB6C9'
            strokeWidth='10' />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Progress
            type="circle"
            percent={0} format={() => 'Nível 3'}
            width='100px'
            strokeWidth='10' />
        </Col>
      </Row>

      <Row type="flex" justify="space-around">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
      </Row>

      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 2, offset: 1 }}></Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}></Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}></Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Progress
            type="circle"
            percent={0} format={() => 'Módulo 1'}
            width='80px'
            strokeWidth='5' />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 2, offset: 2 }}>
          <Progress
            type="circle"
            percent={0} format={() => 'Módulo 2'}
            width='80px'
            strokeWidth='5' />
        </Col>
      </Row>


      <Row type="flex" justify="space-around">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Progress
            type="circle"
            percent={0} format={() => 'Nível 4'}
            width='100px'
            strokeWidth='10' />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
      </Row>




    </div>

  );
}

PositionedTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedTooltips);