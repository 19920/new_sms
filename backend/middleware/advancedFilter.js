const advancedfilter=(model,populate)=>async (req,res,next)=>{
    //console.log("req",req)
    let query;
    const rqQuery = {...req.query}
    //console.log("model and populate",model,populate)
    //fields to exclude
    const removeFfields = ['select','sort','page','limit'];
    removeFfields.forEach(Element=>delete rqQuery[Element])

    let queryStr = JSON.stringify(rqQuery)
    if(model === "User"){ 
        query =  model.find(JSON.parse(queryStr)).select('-password')
    }else{
        query =  model.find(JSON.parse(queryStr))
    }
   
    if(req.query.select){
        const fields = req.query.select.split(',').join(' ');
        query = query.select(fields)
    }
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ')
        query = query.sort(sortBy)
    }else{
        query = query.sort('-createdAt')
    }
    //pagination
    const page = parseInt(req.query.page,10)||1;
    const limit = parseInt(req.query.limit,10) ||50;
    const startIndex = (page-1)*limit;
    const endIndex = page*limit
    const total = await model.countDocuments()
    query = query.skip(startIndex).limit(limit)
    if(populate){
        query = query.populate(populate)
    }
    
    const results = await query
    // results of pagination
    const pagination = {}
    if(endIndex<total){
        pagination.next ={
            page:page+1,
            limit
        }
    }
    if(startIndex>0){
        pagination.prev = {
            page:page-1,
            limit
        }
    }
    res.advancedfilter={
        success:true,
        count:results.length,
        pagination,
        data:results
    }
    next()
}

export default advancedfilter