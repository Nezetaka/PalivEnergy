"use strict";

const express = require('express');


module.exports = app => {
  // public directory
  app.use('/assets', express.static('./assets'));

  // main page
  app.get('/', (req, res) => {
    res.render('./components/index.html');
  });

  app.get('/main', (req, res) => {
    res.render('./components/index.html');
  });

  // about page
  app.get('/about', (req, res) => {
    res.render('./components/about.html');
  });

  // contacts page
  app.get('/contacts', (req, res) => {
    res.render('./components/contacts.html');
  });

  // energy deliveries page
  app.get('/energydeliveries', (req, res) => {
    res.render('./components/energydeliveries.html');
  });

  // gas deliveries page
  app.get('/gasdeliveries', (req, res) => {
    res.render('./components/gasdeliveries.html');
  });

  // how to join page
  app.get('/howto', (req, res) => {
    res.render('./components/howto.html');
  });

  // partners page
  app.get('/partners', (req, res) => {
    res.render('./components/partners.html');
  });

  // rendering unknown page
  app.get('*', (req, res) => {
    res.render('./components/notfound.html');
  });
};
