'use strict'
//なぜ添字として 2 番を使っているかというと、
//console.log(process.argv); と入れると、
//[ '/home/vagrant/.nvm/versions/node/v10.14.2/bin/node',
//'/home/vagrant/workspace/my-first-node-js/app.js' ]
//と入る。0 番には node コマンドのファイルのパスが入り、
//1 番には、実行しているプログラムのファイルのパスが入る、という決まりがあるためです。
//コマンドの後ろに書いた最初の引数は process.argv[2] なのです。
const number = process.argv[2] || 0;
//      ↑が指定されたコマンドライン引数の値を読む
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i; // sum = 0,1,3,6,10...
    //↑sum += i;と同じ意味。「sumにiを足してから、代入」
}
console.log(sum);