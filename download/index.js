"use strict";
exports.__esModule = true;
var fs = require("fs");
var http = require("http");
var path_1 = require("path");
var Url = require("url");
var Download = (function () {
    function Download() {
    }
    return Download;
}());
Download.File = function (url, dir, filename) {
    return new Promise(function (resolve, reject) {
        if (Url.parse(url).protocol != 'http:') {
            throw new Error("Can only be http! Do not use Https");
        }
        if (!dir) {
            throw new Error('Please enter a file path');
        }
        if (typeof filename != 'string') {
            filename = path_1.basename(url);
        }
        http.get(url, function (res) {
            var chunk = '';
            res.setEncoding('bunary');
            res.on('data', function (data) {
                chunk += data;
            })
                .on('error', function (err) {
                throw new Error(err);
            })
                .on('end', function () {
                fs.writeFile(dir + filename, chunk, { encoding: 'binary' }, function (err) {
                    if (err)
                        throw new Error(err);
                    resolve({ status: 200 });
                });
            });
        });
    });
};
Download.FileStream = function (url, dir, filename) {
    return new Promise(function (resolve, reject) {
        if (Url.parse(url).protocol != 'http:') {
            throw new Error("Can only be http! Do not use Https");
        }
        if (!dir) {
            throw new Error('Please enter a file path');
        }
        if (typeof filename != 'string') {
            filename = path_1.basename(url);
        }
        http.get(url, function (res) {
            var writeStream = fs.createWriteStream(dir + filename);
            res.on('data', function (data) {
                writeStream.write(data);
            })
                .on('error', function (err) {
                throw new Error(err);
            })
                .on('end', function () {
                writeStream.end();
                writeStream.on('close', function () {
                    resolve({ status: 200 });
                });
            });
        });
    });
};
exports["default"] = Download;
