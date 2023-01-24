// use `utils` folder to create static helper function , where as for class base helper create insider `helpers` class
const paginate = (query, { page, pageSize }) => {
    const offset = page * pageSize;
    const limit = pageSize;
  
    return {
      ...query,
      offset,
      limit,
    };
  };


  module.exports = paginate;