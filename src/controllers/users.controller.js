const userService = require('../services/user.service');

const getAll = async (req, res) => {
    const { page = 1 } = req.params; // example of object destructuring with default value


    res.send(userService.getAllByPage(page));
}


module.exports = {
    getAll
};