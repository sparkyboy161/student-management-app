const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

//get all the users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json(`Error : ${error}`))
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.json(`Error: ${err}`))
})

//delete an exist user with its id
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((user) => res.json(`${user.firstName} ${user.lastName} is deleted`))
        .catch(err => res.json(`Error: ${err}`))
})

//Sign up api
router.post('/signup', (req, res, next) => {
    const { body } = req;
    const { firstName, lastName, password } = body;
    let { email } = body;

    if (!firstName) {
        return res.json({
            success: false,
            message: 'Error: Firstname can not be blank'
        })
    }
    if (!lastName) {
        return res.json({
            success: false,
            message: 'Error: Lastname can not be blank'
        })
    }
    if (!email) {
        return res.json({
            success: false,
            message: 'Error: Email can not be blank'
        })
    }
    if (!password) {
        return res.json({
            success: false,
            message: 'Error: Password can not be blank'
        })
    }

    email = email.toLowerCase();

    User.find({
        email
    }, (err, previousUsers) => {
        if (err) {
            return res.json({
                success: false,
                message: 'Error: Server error'
            })
        }
        else if (previousUsers.length > 0) {
            return res.json({
                success: false,
                message: 'Error: Account already exists.'
            });
        }
        else {
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);

            newUser.save()
                .then(() => res.json({
                    success: true,
                    userId: newUser._id,
                    message: `Signed success`
                }))
                .catch(err => res.json(`Error: ${err} `));
        }
    });
});

//log in api
router.post('/signin', (req, res, next) => {
    const { password } = req.body;
    let { email } = req.body;
    email = email.toLowerCase();

    if (!email) {
        res.json({
            success: false,
            message: 'Error: Email can not be blank'
        })
    }
    if (!password) {
        res.json({
            success: false,
            message: 'Error: Password can not be blank'
        })
    }

    User.find({
        email
    }, (err, users) => {
        if (err) {
            return res.json({
                success: false,
                message: `Error: ${err}`
            })
        }
        if (users.length != 1) {
            return res.json({
                success: false,
                message: `Error: Invalid user`
            })
        }

        const user = users[0];
        if (!user.validPassword(password)) {
            return res.json({
                success: false,
                message: `Error: Invalid password`
            })
        }

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                return res.json({
                    success: false,
                    message: `Error: ${err}`
                })
            }

            return res.json({
                success: true,
                token: doc._id,
                userId: user._id,
                message: `Login success`
            })
        })
    });
});

//verify log in
router.get('/verify', (req, res) => {
    const { query } = req;
    const { token } = query;

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            res.json(`Error: ${err}`);
        }
        if (sessions.length != 1) {
            res.json('Invalid');
        } else {
            res.json('OK Token')
        }


    })
})

//log out with checking the token
router.get('/logout', (req, res) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate({
        _id: token
    }, {
        isDeleted: true
    }, null, (err, sessions) => {
        if (err) {
            res.json(`Error: ${err}`);
        }
        if (!sessions) {
            res.json('Invalid');
        } else {
            res.json('Logout')
        }


    })
})

module.exports = router;
