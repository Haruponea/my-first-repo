const e = require("express");
const express = require("express");
const { runQuery } = require("./database");
const app = express();
const port = 3000;

const getFare = async (id) => {
    const sql = `select users.name as username, sum(round(((types.fare_rate)/100)*trains.distance*0.1,-2)) as fare from trains
    inner join tickets on tickets.train = trains.id
    inner join types on trains.type=types.id
    inner join users on users.id = ?
    where tickets.user = ?`;
    const results = await runQuery(sql, [id, id]);
    return results[0];
};

const getTrainSeat = async (id) => {
    const sql = `select count(tickets.id) as occupied, types.max_seats as maximum from trains
    inner join types  on types.id = trains.type
    left outer join tickets on tickets.train = trains.id
    where trains.id = ? group by trains.id;`;
    const results = await runQuery(sql, [id]);
    return results[0];
};

app.get("/fare", async (req, res) => {
    const uid = req.query["uid"];
    const costs = await getFare(uid);
    const { username, fare } = costs;
    return res.send(`Total fare of ${username} is ${fare} KRW.`);
});

app.get("/train/status", async (req, res) => {
    const tid = req.query["tid"];
    const seats = await getTrainSeat(tid);
    const { occupied, maximum } = seats;
    if (parseInt(occupied) < parseInt(maximum))
        return res.send(`Train ${tid} is not sold out`);
    else return res.send(`Train ${tid} is sold out`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
