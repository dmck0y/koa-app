const { Pool } = require('pg');
const config = require('config');
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../../knexfile');

exports.start = async function () {
  const knex = Knex(knexConfig[process.env.NODE_ENV]);

  Model.knex(knex);

  this.pool = knex;
};

exports.close = async function () {
  await this.pool.end();
};
