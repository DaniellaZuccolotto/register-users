module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    adress: DataTypes.STRING,
    number: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  return User;
};