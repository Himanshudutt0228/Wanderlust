const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const listingController = require('../controller/listings.js');
const multer = require('multer');
const {storage} = require('../cloudConfig.js')
const upload = multer({storage});



const {isLoggedin, isOwner,validateListing}= require('../middleware.js');

router
    .route('/')
    .get(wrapAsync(listingController.index))
    .post(isLoggedin,upload.single('listing[image]'),wrapAsync(listingController.createListing));
    

router.get('/new',isLoggedin,listingController.renderNewForm);

router
    .route('/:id')
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedin,isOwner, upload.single('listing[image]'),validateListing, wrapAsync(listingController.editListing))
    .delete(isLoggedin,isOwner,wrapAsync(listingController.deleteListing))


router.get('/:id/edit',isLoggedin,isOwner,wrapAsync(listingController.showEditPage));

module.exports = router;