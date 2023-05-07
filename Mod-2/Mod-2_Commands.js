// 3 -----------------------------------
load("/desktop/Mod-2/Mod-2_Insert.js")
db.inspections.find({"id" : "20032-2020-ACME"})

// 4 -----------------------------------
db.inspections.distinct("sector").length

typeof db.inspections.findOne({"business_name" : "AUSTIN 2012"}).business_name 
typeof db.inspections.findOne({"business_name" : "ACME Explosives"}).business_name

db.inspections.countDocuments({result : "Violation Issued"})

// 5 ------------------------------------
load("/desktop/Mod-2/Mod-2_Update.js")
db.inspections.find({"id" : "20032-2020-ACME"})

// 6 ------------------------------------
load("/desktop/Mod-2/Mod-2_Update_all.js")
db.inspections.deleteOne( {$and: [{"result" : "Violation Issued"}, {"address.city" : "ROSEDALE"}]})







// ---------------------------------------
db.inspections.find({result : "Violation Issued"})

db.inspections.find({"address.city" : "ROSEDALE"})

db.inspections.find({"id" : "20032-2020-ACME"}) db.inspections.remove({"id" : "20032-2020-ACME"})

db.inspections.deleteOne({"result" : "Violation Issued"})

