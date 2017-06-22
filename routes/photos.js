const express = require('express');
const router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './public/images' })
var mime = require('mime');
const path = require('path');
var mongoose = require('mongoose');
var fs = require('fs'); // file system, to save files
// var request = require('request');
var url = require('url');
// var type = upload.single('image');
var Photo = require('../models/photos');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    //console.log(file.mimetype)
    cb(null, file.fieldname + '-' + Date.now() + mime.extension(file.mimetype));
  }
});

var upload = multer({ storage: storage }).single('image')

router.get('/', (req, res) => {

  Photo.find({}, function(err, photos){
    console.log("length of photos ", photos.length)
    if (err) return next(err);
    console.log(photos)
    console.log(typeof(photos))

    // console.log(photos)

    res.render('photos', {
      title: 'Photos',
      photos: photos
    });

  });
});

router.get('/upload', (req, res) => {
  res.render('photos/create');
});

router.post('/upload', function(req, res, next) {
  upload(req, res, function(err){
    if(err){

    }
    Photo.create({
      name: req.body.title,
      path: req.file.path,
      filename: req.file.filename,
      //CHANGE THE PATH NAME TO THE FILE NAME AND SEARCH FOR THE PIC IN THE PUBLIC FOLDER USING ITS NAME

    }, function(err) {
      if (err) return next(err);
      res.redirect('/photos');
    });

  });


});

router.get('/todo', function(req, res){

  res.render('photos/todo')

});

router.get('/:id', function(req, res){
  console.log(req.params.id)
  Photo.findOne({
    '_id':req.params.id
  }, function(err, photo){
    if(err){
      return err
    } else {
      res.render('photos/show', {
        photo: photo
      });
    }

  })
});






module.exports = router
