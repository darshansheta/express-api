
const { User } = require('../models');

const getAllByPage = async (page = 1, perPage = 15) => {
   
    const offset = (page - 1) * perPage;
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

const getUser = async (id) => {
    return await User.findByPk(id);
}

module.exports = {
    getAllByPage,
    getUser
}