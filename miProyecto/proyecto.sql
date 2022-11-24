create schema proyectoIntegrador;
use proyectoIntegrador;



CREATE TABLE usuario(
id INT unsigned primary key auto_increment,
nombre varchar (50) not null,
apellido varchar(50),
email varchar (50) not null,
usuario varchar (50) not null,
contrasenia varchar (300) not null,
fecha_nacimiento date not null,
numero_documento INT UNSIGNED,
foto varchar (100) not null,
createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);


CREATE TABLE posteo(
id INT unsigned primary key auto_increment,
id_usuarios INT UNSIGNED NOT NULL,
image_name varchar (300) not null,
pie_post varchar (50) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuarios) REFERENCES usuario(id)
);



CREATE TABLE comentario(
id INT UNSIGNED NOT NULL primary key auto_increment,
id_usuarios INT UNSIGNED NOT NULL,
id_posteos INT UNSIGNED NOT NULL,
texto_comentario varchar (50) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuarios) REFERENCES usuario(id),
FOREIGN KEY (id_posteos) REFERENCES posteo(id)
);


INSERT INTO usuario values (default, 'Zendaya', 'Coleman', 'zendayac75@gmail.com', 	'zendayac75', 	'1888','1998-08-02',	44232556, '/images/users/fotoPerfilZendaya.jpg', default, default);
INSERT INTO usuario values (default, 'Noah', 	'Schnapp', 'nschnapp@gmail.com',	'nchnapp',   	'2514','1999-10-05',	35676553, '/images/users/posteo2Noah.jpeg', default, default);
INSERT INTO usuario values (default, 'Lady', 	'Gaga',    'ladygaga56@gmail.com',	'ladygaga56',   '25689','1988-06-07',	33367114, '/images/users/ladygagaFotoperfil.jpg', default, default);
INSERT INTO usuario values (default, 'Miley', 	'Cyrus',    'mcyrus@gmail.com',      'mcyrus',  	'2875','1990-05-08',	34534555, '/images/users/mileyfotoPerfil.jpg', default, default);
INSERT INTO usuario values (default, 'Adele', 	'Blue', 	'ablue@gmail.com',		 'ablue',       '4563','1988-05-05',	35674663, '/images/users/adeleFotoPerfil.jpg', default, default);

INSERT INTO posteo values (default, 1 , '/images/users/posteoZendaya.jpg', 'Zendaya', default, default);
INSERT INTO posteo values (default, 2 , '/images/users/posteo1Noah.jpg', 'Noah', default, default);
INSERT INTO posteo values (default, 3 , '/images/users/ladygagaposteo1.jpeg', 'LadyGaga', default, default);
INSERT INTO posteo values (default, 4 , '/images/users/mileyposteo1.jpg', 'Miley', default, default);
INSERT INTO posteo values (default, 5 , '/images/users/adeleposteo1.jpg', 'Adele', default, default);
INSERT INTO posteo values (default, 1 , '/images/users/posteo2Zendaya.jpg', 'Zendaya', default, default);
INSERT INTO posteo values (default, 2 , '/images/users/poseteNoah.jpg', 'Noah', default, default);
INSERT INTO posteo values (default, 3 , '/images/users/ladygagaposteo2.jpg', 'LadyGaga', default, default);
INSERT INTO posteo values (default, 4 , '/images/users/mileyposteo2.jpg', 'Miley', default, default);
INSERT INTO posteo values (default, 5, '/images/users/adeleposteo2.jpg', 'Adele', default, default);


INSERT INTO comentario values (default, 1, 9, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 2, 3, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 5, 6, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 3, 4, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 1, 2, 'Me gusta tu foto', default, default);
INSERT INTO comentario values (default, 4, 8, 'Me gusta tu foto', default, default);

