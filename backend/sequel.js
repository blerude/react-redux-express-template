// const mysql = require('mysql');
//
// // First you need to create a connection to the db
// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Ymsd2017',
//   port: '3000'
// });
//
// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db', err);
//     return;
//   }
//   console.log('Connection established');
// });
//
// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });

const Sequelize = require('sequelize');
// console.log(process.env)
// const sequelize = new Sequelize('process.env.SQL_DATABASE', 'admin', 'f2ae502e0cc82f7ab2e7e954e180fff8d5830b13356640e6', {
//   host: '165.227.248.122',
//   port: '3306',
//   dialect: 'mysql'
//   // pool: {
//   //   max: 5,
//   //   min: 0,
//   //   idle: 10000
//   // },
//   // storage: './dataminer.sqlite'
// });

const sequelize = new Sequelize('mysql://admin:f2ae502e0cc82f7ab2e7e954e180fff8d5830b13356640e6@165.227.248.122:3306/test');


sequelize.authenticate()
.then(() => {
  console.log('CONNECTION: Sequelize connection has been established successfully')
})
.catch(err => {
  console.error('ERROR: Unable to connect to the database:', err);
})

const User = sequelize.define('user', {
  country: Sequelize.STRING,
  display_name: Sequelize.STRING,
  external_urls: Sequelize.JSON,
  followers: Sequelize.JSON,
  href: Sequelize.STRING,
  username: Sequelize.STRING,
  images: Sequelize.JSON,
  product: Sequelize.STRING,
  type: Sequelize.STRING,
  uri: Sequelize.STRING,
  access: Sequelize.STRING,
  refresh: Sequelize.STRING
})

const Playlist = sequelize.define('playlist', {
  href: Sequelize.STRING,
  key: Sequelize.STRING,
  name: Sequelize.STRING,
  owner: Sequelize.JSON,
  tracks_string: Sequelize.STRING,
  tracks_number: Sequelize.INTEGER,
  uri: Sequelize.STRING,
});

const Song = sequelize.define('song', {
  added: Sequelize.STRING,
  album_type: Sequelize.STRING,
  album_name: Sequelize.STRING,
  album_name_lower: Sequelize.STRING,
  album_artist: Sequelize.JSON,
  album_artist_lower: Sequelize.JSON,
  artists: Sequelize.JSON,
  artists_lower: Sequelize.JSON,
  href: Sequelize.STRING,
  key: Sequelize.STRING,
  markets: Sequelize.JSON,
  name: Sequelize.STRING,
  name_lower: Sequelize.STRING,
  playlist: Sequelize.STRING,
  popularity: Sequelize.INTEGER,
  position: Sequelize.INTEGER,
})

module.exports = {
  sequelize,
  User,
  Playlist,
  Song
}
