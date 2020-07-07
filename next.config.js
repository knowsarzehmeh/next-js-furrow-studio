// const path = require("path");
const withFonts = require("next-fonts");
const withImages = require('next-images')
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const path = require("path");
require("dotenv").config();

// const withPlugins = require("next-compose-plugins");

// const dev = process.env.NODE_ENV !== "production";
// const sitemap = require('nextjs-sitemap-generator');


// sitemap({
//     baseUrl: 'https://domainname',
//     pagesDirectory: __dirname + "/pages",
//     targetDirectory: 'static/'
// });
module.exports = withFonts(
    // withImages(
    // withCSS(
    // withSass(
    {
        target: 'serverless',
        exportPathMap: function () {
            return {
                '/': { page: '/' }
            }
        },
        publicRuntimeConfig: {
            API_URL: process.env.API_URL
        },
        env: {
            API_URL: process.API_URL
        },
        webpack(config, options) {
            (config.resolve.alias["~"] = path.resolve(__dirname)),
                config.module.rules.push({
                    issuer: {
                        test: /\.\w+(?<!(s?c|sa)ss)$/i,
                    },
                    test: /\.(png|jpg|gif|svg|eot|otf|ttf|woff|woff2)$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 100000
                        }
                    }
                });

            return config;
        },
        env: {
            APPROVAL_KEY: process.env.APPROVAL_KEY
        },
    }
    // )
    // )
    // )
);