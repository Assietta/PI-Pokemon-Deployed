const { getTypes } = require('../../controllers/controllers')

const getTypesHandler = async (req, res) => {
    try {
        const response = await getTypes();
        return res.status(200).json(response);
      } catch (err) {
        return res.status(500).send(err.message);
      }
};

module.exports = {
    getTypesHandler,
}