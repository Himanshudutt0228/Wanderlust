const Review = require('../models/review.js');
const Listing = require('../models/listing.js');



module.exports.postReview = async(req,res)=>{
    
    let{id} = req.params;
    let listing = await Listing.findById(id);
    let review = new Review(req.body.review);
    review.author = req.user._id;
    console.log(review);
    

    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash('success','New review created!');
    res.redirect(`/listings/${id}`);
    
};

module.exports.deleteReview = async(req,res)=>{
    let{id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Review deleted!!');
    res.redirect(`/listings/${id}`);
    
};

module.exports.logout = (req,res)=>{
      req.logout((err)=>{
        if(err){
            return next(err);

        }
        req.flash('success','logged you out!');
        console.log('logged out');
        
        res.redirect('/listings');
      })
}