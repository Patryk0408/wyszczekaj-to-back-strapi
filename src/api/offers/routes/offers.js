'use strict';

/**
 * offers router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::offers.offers');
