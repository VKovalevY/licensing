const User = require('../models/user')
module.exports.check = function () {
  return User.findOne({ email: "tech@xerox.com" })
    .then((candidate) => {
      if (!candidate) {
        const user = new User({
          email: "tech@xerox.com",
          password: "$2a$10$j4qQ.YOE3FT3ZPHyxq44ou6WE6BaLR0X3qPEhIZYml3gzZVY/0gSa",
        })
        user.save().then(console.log('user', user))
      }
    })
}
