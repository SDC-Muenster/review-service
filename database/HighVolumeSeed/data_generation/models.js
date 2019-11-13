/* eslint-disable camelcase */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'cghiassi5',
  database: 'airbnb',
});

function selectReviews(houseId, callback) {
  pool.query(`SELECT * FROM reviews WHERE house_id=${houseId} limit 10;`, (err, result) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, result);
  });
}


function addReview({
  // eslint-disable-next-line no-unused-vars
  user_id, house_id, user_pic, user_name, review_date, review_text, review_language, communication, location, value, accuracy, cleanliness, check_in,
}, callback) {
  pool.query('INSERT INTO reviews (user_id, house_id, user_pic, user_name, review_date, review_text, review_language, communication, location, value, accuracy, cleanliness, check_in) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [user_id, house_id, user_pic, user_name, review_date, review_text, review_language, communication, location, value, accuracy, cleanliness, check_in], (err, result) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, result);
  });
}

function deleteReview(reviewId, callback) {
  pool.query(`DELETE * FROM reviews WHERE review_id=${reviewId}`, (err,result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result)
  })
}

module.exports = {
  selectReviews,
  addReview,
};
