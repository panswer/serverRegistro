const express = require('express');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

module.exports = {
    express,
    cors,
    colors,
    mongoose,
    bcrypt,
    uniqueValidator
}