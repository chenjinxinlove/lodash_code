import * as fs from  'fs';
import * as http from 'http';
import path from 'path';
import * as Url from 'url';

class Download {
    static File = (url: string, dir: string, filename: string) => {
        return new Promise( (resolve, reject) => {
            if(Url.parse(url).protocol != 'http:') {
                throw new Error("Can only be http! Do not use Https");
            }
            if(!dir) {
                throw new Error('Please enter a file path');
            }
            if(typeof filename != 'string') {
                filename = path.basename(url);
            }
            http.get(url, res => {
                let chunk = '';
                res.setEncoding('bunary');
                res.on('data', data => {
                    chunk += data;
                })
                .on('error', err => {
                    throw new Error(err);
                })
                .on('end', () => {
                  fs.writeFile(dir + filename, chunk, { encoding: 'binary'}, (err) => {
                        if(err) throw new Error(err);
                        resolve({status: 200})
                    })  
                })
            })
        })
    }
    static FileStream = (url: string, dir: string, filename: string) => {
        return new Promise( (resolve, reject) => {
            if(Url.parse(url).protocol != 'http:') {
                throw new Error("Can only be http! Do not use Https");
            }
            if(!dir) {
                throw new Error('Please enter a file path');
            }
            if(typeof filename != 'string') {
                filename = path.basename(url);
            }
            http.get(url, res => {
                let writeStream = fs.createWriteStream(dir + filename);
                res.on('data', data => {
                    writeStream.write(data);
                })
                .on('error', err => {
                    throw new Error(err);
                })
                .on('end', () => {
                    writeStream.end();
                    writeStream.on('close', () => {
                        resolve({status: 200})
                    })
                })
            })
        })
    }
}

export default Download;
