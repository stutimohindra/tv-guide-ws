'use strict';

var envName = process.env.NODE_ENV || "development"

const dbConfig = {
    "development": {
        host: 'tv-guide.cmgtzuszqxel.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'root',
        password: '12345678',
        database: 'astro'
    },
    "production": {
        host: 'tv-guide.cmgtzuszqxel.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'root',
        password: '12345678',
        database: 'astro'
    }
}

const hostConfig={
    "development": 'http://localhost:3000',
    "production": ''
}

var config = {
    portHttp: process.env.PORT || 3000,
    portHttps: process.env.SPORT || 8443,
    offline_limit: 10,
    run_level: 1,
    timeout:60000,
    secret:"secret",
    db: [
        dbConfig[envName]
    ]
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

if (envName) {
    switch (envName) {
        case "development":
            config.run_level = 1;
            break;

    }
}
// config.run_level = 1;
module.exports = config;