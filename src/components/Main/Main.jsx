import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider, Button } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ExpenseTracker = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Card className={classes.root}>
        <Button variant="outlined" color='primary' onClick={handleLogout} style={{ margin: "5px" }}>Signout</Button>
        <CardHeader title="Money Tracker" subheader="Made by Smit and Hardish" />
        <CardContent>
          <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
          <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
            <InfoCard />
          </Typography>
          <Divider className={classes.divider} />
          <Form />
        </CardContent>
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ExpenseTracker;
