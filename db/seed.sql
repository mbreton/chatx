CREATE TABLE messages (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"content" text,
    "username" text,
    "createdAt" timestamp,
    "updatedAt" timestamp
);



INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('Hi !', 'Foo', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('Hello', 'Bar', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('How are you ?', 'Foo', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('I am fine, I am working on chatx app', 'Bar', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('I am wondering why use SSR for a chat app ...', 'Bar', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('I do not like the ORM too, what strange idea to add updatedAt et createdAr everywhere', 'Bar', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('All this tools... it is look like build a rocket to move over one meter ', 'Foo', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('Absolutly, and it does not test my capabilities to choose the right tool at the right place', 'Bar', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('It does test the data structure or algorithms ?', 'Foo', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('No, It is the worth !', 'Bar', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('Dude, how they suppose your are a good developper then ?', 'Foo', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('good question !', 'Foo', now(), now());
INSERT INTO messages ("content", "username", "createdAt", "updatedAt") VALUES ('For sure, developpers who success this test are good to use the last hypster lib', 'Foo', now(), now());