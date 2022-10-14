create table `student`(
 `name` varchar(20) not null,
 `year` int not null,
 `major` int not null,
 `personal_num` int not null,
 `phone_num` varchar(13) not null,
 `address` varchar(30) not null,
 `total_credit` int not null default 0,
 `average_score` double not null default 0.0,
 `is_attend` tinyint(1) not null default 1
)ENGINE=InnoDB DEFAULT CHARSET=utf8;