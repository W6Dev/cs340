db.inspections.updateMany(
    {"address.city" : "ROSEDALE"},{$set :{"address.zip" : 76114}}
    )