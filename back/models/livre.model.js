// Je recup ma connexion dans la variable sequilize
// et mes types de champs SQL dans DataTypes
export default (connection, DataTypes) => {
    connection.define(
        'Livre',
        {
            titre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dateparution: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: true }
    );
}