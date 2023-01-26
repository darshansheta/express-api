const userService = require('../services/user.service');

const getAll = async  (req, res) => {
    const { page = 1 } = req.query; // example of object destructuring with default value
    const paginatedResponse = await userService.getAllByPage(page);
    res.send(paginatedResponse);
}

const showUser = async (req, res) => {
    const { id } = req.params;
    res.send(await userService.getUser(id));
}

module.exports = {
    getAll,
    showUser
};