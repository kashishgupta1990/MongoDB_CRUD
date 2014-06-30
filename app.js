var mongoose = require("mongoose");

var URLString = "mongodb://localhost/test";

//Connecting to DB
mongoose.connect(URLString, function (err) {
    if (err) {
        console.log("DB Connection Error : " + err);
    }
    else {
        console.log("DB Successfully Created.");
    }
});

//Saving Data Into Database
var userCollection = mongoose.Schema({
    name: {type: String, unique: true},
    age: Number
});

//Inserting into Database
var modelClass = mongoose.model("person", userCollection);

var user1 = new modelClass({name: "Kashish Kumar", age: 45});

//Save Data Object
user1.save(function (err) {
    if (err) {
        console.log("Saving Data: " + err);
    }
    else {
        console.log("User Added Successfully ");

        //Select Data Object
        modelClass.find({name: "Kashish Kumar"}).exec(function (err, result) {
            if (err) {
                console.log("Error in Selecting DB " + err);
            }
            else {
                console.log("Data: " + result);
            }
        });
    }
});

//Update Data Object
modelClass.update({name: "Kashish Kumar"}, {age: 40}, function (err, result) {
    if (err) {
        console.log("Error Update Record: " + err);
    } else {
        console.log(result);
    }
});

//Delete Data From Collection
modelClass.remove({name: "Kashish Kumar"}, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Deleted Successfully");
    }
});



