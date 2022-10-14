create table `users`(
    `id` int not null auto_increment,
    `userid` varchar(20) not null,
    `userpw` varchar(20) not null,
    `username` varchar(20) not null,
    `profile_image` varchar(30) not null,
    `profile_msg` varchar(30) not null,
    `is_delete` tinyint(1) not null default 0,
    `signup_date` datetime not null,
    primary key(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table `channels`(
    `id` int not null auto_increment,
    `channel_name` varchar(20) not null,
    `channel_creater` int not null,
    `channel_link` varchar(30) not null,
    `max_channel_participants` int not null,
    `is_delete` tinyint(1) not null default 0,
    `channel_create_date` datetime not null,
    primary key(`id`),
    foreign key(`channel_creater`)
    references `users`(`id`) on delete cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table `chats`(
    `id` int not null auto_increment,
    `chat_content` varchar(100) not null,
    `chat_writer` int not null,
    `chat_channel` varchar(20) not null,
    `chat_create_date` datetime not null,
    primary key(`id`),
    foreign key(`chat_writer`)
    references `users`(`id`) on delete cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table `follows`(
    `id` int not null auto_increment,
    `follower` int not null,
    `followee` int not null,
    `follow_date` datetime not null,
    primary key(`id`),
    foreign key(`follower`)
    references `users`(`id`) on delete cascade,
    foreign key(`followee`)
    references `users`(`id`) on delete cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table `blocks`(
    `id` int not null auto_increment,
    `blocker` int not null,
    `blockee` int not null,
    `block_date` datetime not null,
    primary key(`id`),
    foreign key(`blocker`)
    references `users`(`id`) on delete cascade,
    foreign key(`blockee`)
    references `users`(`id`) on delete cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8;