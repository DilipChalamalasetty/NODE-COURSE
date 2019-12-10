const User = require('./user_model.js');

//Insert a user
exports.create = (req, res) => {
    // Validate request
    if(!req.body.email) {
        console.log(req.body.email)
        return res.status(400).send({
            message: "user email can not be empty"
        });
    }

    // Create a user
    const user = new User({
        username: req.body.username, 
        email: req.body.email,
        password:req.body.password
    });

    // Save user in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while inserting the user."
        });
    });
};




// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};


// Find a single user with a userId
exports.findOne = (req, res) => {
    User.find({email:req.params.email})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.email
            });            
        }
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving user with id " + req.params.email
        });               
    });
};


// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.password || !req.body.username ||!req.body.email) {
        return res.status(400).send({
            message: "username or password or email can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findOneAndUpdate({"email":req.body.email},{
        $set:{"username": req.body.username,
        "password" : req.body.password
    }}, {new: true,useFindAndModify:true}).then(doc=>{
        res.send(doc)
    }).catch(err=>{
        res.status(500).send(err)
    })
    // User.findOneAndUpdate({email:req.body.email},{useFindAndModify:true}, {
    //         $set:{username: req.body.username,
    //         password : req.body.password
    //     }}, {new: true})
    // .then(note => {
    //     if(!note) {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.email
    //         });
    //     }
    //     res.send(note);
    // }).catch(err => {
    //     if(err.kind === 'ObjectId') {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.email
    //         });                
    //     }
    //     return res.status(500).send({
    //         message: "Error updating note with id " + req.params.noteId
    //   });
    }


// // Delete a user with the specified userId in the request
// exports.delete = (req, res) => {
//     user.findByIdAndRemove(req.params.userId)
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: "user not found with id " + req.params.userId
//             });
//         }
//         res.send({message: "user deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "user not found with id " + req.params.userId
//             });                
//         }
//         return res.status(500).send({
//             message: "Could not delete user with id " + req.params.userId
//         });
//     });
// };