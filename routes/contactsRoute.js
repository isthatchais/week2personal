const express = require('express');
const router = express.Router();
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId

router.get("/", async (req, res) => {
    let collection = await mongodb.getDb().db().collection("contacts");
    let results = await collection.find({})
      .toArray();
    res.send(results).status(200);
});


router.get("/:id", async (req, res) => {
  let collection = await mongodb.getDb().db().collection("contacts");
  let id = new ObjectId(req.params.id);
  let result = await collection.find({_id: id}).toArray();
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});


/*
router.get("/:id", async (req, res) => {
    let collection = await mongodb.getDb().db().collection("contacts");
    let results = await collection.find({_id: ObjectId(req.params.id)}).toArray();
    res.send(results).status(200);
});


db.vehicle.find(
{
    "_id": {
        $in: [
            ObjectId("62d01d17cdd1b7c8a5f945b9"),
            ObjectId("62d01d17cdd1b7c8a5f945ba"),
            ObjectId("62d01d17cdd1b7c8a5f945bb")
        ]
    }
});


*/

  module.exports = router;