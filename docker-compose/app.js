const express = require('express');
const redis = require('redis');
// Redis 클라이언트 생성
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
const app = express();

// 숫자를 0부터 시작합니다
client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        client.set("number", parseInt(number) + 1);
        res.send("숫자가 1씩 증가합니다. 숫자 : " + number);
    })
})
app.listen(8080);
