import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PostData from './data/qoutes.json'
import './index';

const styles = theme => ({
  root: {
    background: 'white',   
   
  },
  tableHead:{
    background: 'white',
       
  },
  });

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>      
            <TableCell>Наименование</TableCell>           
            <TableCell>Доходность</TableCell>
            <TableCell>Цена</TableCell>
            <TableCell>Частота выплат, в год</TableCell>
            <TableCell>Стоимость купона</TableCell>
            <TableCell>Дата купона</TableCell>
            <TableCell>НКД</TableCell>
            <TableCell>Рейтинг</TableCell>
            <TableCell>Прогноз</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PostData.map(postDetail => (
            <TableRow  >
              <TableCell >{postDetail.D}</TableCell>
              <TableCell >{postDetail.I}</TableCell>
              <TableCell >{postDetail.L}</TableCell>
              <TableCell >{postDetail.O}</TableCell>
              <TableCell >{postDetail.N}</TableCell>
              <TableCell >{postDetail.R}</TableCell>
              <TableCell >{postDetail.P}</TableCell>
              <TableCell >{postDetail.U}</TableCell>
              <TableCell >{postDetail.V}</TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);