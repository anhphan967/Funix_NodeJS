
exports.error=(req,res,next)=>{
    res.status(404).render('404',{pageType:'Page not found', path:''})
 }