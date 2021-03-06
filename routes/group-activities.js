const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const {GridFSBucket} = require('mongo');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require("path");
const bcrypt = require('bcryptjs');

const {
  ensureAuthenticated
} = require('../config/auth');



// DB Config
const db = require('../config/keys').MongoURI;
mongoose.set('useFindAndModify', false);


//vacancyItem model
const model = require('../models/Item');
const GroupActivitiesItem = model.groupActivitiesItem;
const Item = GroupActivitiesItem;

require("./get/generic")({router:router,Item:Item,renderedPage:'group-activities'});

require("./post/generic")({router:router,Item:Item});

require("./post/delete")({router:router,Item:Item});

require("./post/edit")({router:router,Item:Item});


module.exports = router;
