create database email_sender;

\c email_sender

create table emails (
    id serial not null,
    date TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    subject VARCHAR(100) NOT NULL,
    message VARCHAR(250) NOT NULL
);