# cs340

MONGO_HOST=127.0.0.1
MONGO_PORT=27017
MONGO_USER=root
MONGO_PASS=password

export MONGO_HOST MONGO_PORT MONGO_USER MONGO_PASS

const MONGO_HOST = process.env['127.0.0.1']
const MONGO_PORT = process.env['27017']
const MONGO_USER = process.env['root']
const MONGO_PASS = process.env['password']

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
