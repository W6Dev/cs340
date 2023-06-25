from pymongo import MongoClient

class AnimalShelter(object):
    def __init__(self, userid, password):
        USER = userid
        PASS = password
        HOST = "nv-desktop-services.apporto.com"
        PORT = 32403
        DB = "AAC"
        COL = "animals"

        self.client = MongoClient("mongodb://%s:%s@%s:%d" % (USER,PASS,HOST,PORT))
        self.database = self.client["%s" % (DB)]
        self.collection = self.database["%s" % (COL)]

    # Create Class ----------------
    def Create(self, data):
        if data is not None:
            createstatus = self.database.animals.insert_one(data)
            return True if createstatus.acknowledged else False
        else:
            raise Exception("Nothing to save, because data parameter is empty")

# Read Class ----------------
    def Read(self, search):
        data = ""
        # Create object of search results.
        items = list(self.database.animals.find(search, {"_id": False}))

        return items



# Update Class ----------------
    def Update(self, search, update):
        update = {"$set": update}
        # update database
        x = self.database.animals.update_many(search, update)
        # return integer quantity of records modified
        return x.modified_count

# Delete Class ----------------
    def Delete(self, search):
        # Delete items from database
        x = self.database.animals.delete_many(search)
        # return integer quantity of records deleted
        return x.deleted_count
