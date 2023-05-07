

load("/home/ubuntu/ab.js")
load("/home/ubuntu/update.js")

typeof db.inspections.findOne({"business_name" : "AUSTIN 2012"}).business_name
typeof db.inspections.findOne({"business_name" : "ACME Explosives"}).business_name


db.inspections.find({result : "Violation Issued"})

db.inspections.find({"address.city" : "ROSEDALE"})

db.inspections.find({"id" : "20032-2020-ACME"})
db.inspections.remove({"id" : "20032-2020-ACME"})

db.inspections.deleteOne({"result" : "Violation Issued"})

db.inspections.distinct("sector").length
