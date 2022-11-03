select users.id, users.name, tickets.seat_number from tickets inner join users on users.id = tickets.user and tickets.train=11 order by tickets.seat_number;

select users.id, users.name, count(*) as train_count, sum(trains.distance) as total_distance from users inner join tickets on users.id = tickets.user inner join trains on trains.id = tickets.train group by users.id order by total_distance desc limit 0, 6;

select trains.id as id, types.name as `type`, `start`.name as src_stn, 
`end`.name as dst_stn, Timediff(trains.arrival, trains.departure) as travel_time from trains 
inner join stations as `start` on trains.source = `start`.id 
inner join stations as `end`on trains.destination = `end`.id
inner join types on types.id = trains.type
order by travel_time desc limit 0, 6;

select types.name as `type`,
 `src`.name as src_stn,
`dst`.name as dst_stn,
trains.departure as departure,
trains.arrival as arrival,
round(((types.fare_rate)/100)*trains.distance*0.1,-2) as fare from trains
inner join stations as `src` on `src`.id = trains.source
inner join stations as `dst` on `dst`.id = trains.destination
inner join types on trains.type = types.id
order by departure;

select trains.id as id, types.name as type, `src`.name as `src_stn`, `dst`.name as `dst_stn`,
count(*) as occupied, types.max_seats as maximum from trains
inner join stations as `src` on `src`.id = trains.source
inner join stations as `dst` on `dst`.id = trains.destination
inner join types  on types.id = trains.type
inner join tickets on tickets.train = trains.id
group by trains.id order by trains.id;

select trains.id as id, types.name as type, `src`.name as `src_stn`, `dst`.name as `dst_stn`,
count(tickets.id) as occupied, types.max_seats as maximum from trains
inner join stations as `src` on `src`.id = trains.source
inner join stations as `dst` on `dst`.id = trains.destination
inner join types  on types.id = trains.type
left outer join tickets on tickets.train = trains.id
group by trains.id order by trains.id;