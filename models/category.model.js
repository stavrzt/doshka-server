module.exports = (sequelize, Sequelize) => {
    // Define the Sequelize Model
    // represents category table in PostgreSQL database
    // These columns will be generated automatically: name + description
    return sequelize.define("category", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });
};