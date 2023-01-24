
const User = require('../models/user.model');

const getAllByPage = async (page = 1, perPage = 15) => {
   
    const offset = page * perPage;
    const { count, rows } = await User.findAndCountAll({offset: offset, limit: perPage});
    
    const lastPage = Math.ceil(count / perPage);

    return {
        total: count,
        perPage,
        page,
        lastPage,
        data: rows
    }
};

module.exports = {
    getAllByPage
}