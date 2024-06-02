/* DDL (Data Definition Language)
DDL se refiere a las instrucciones SQL que definen la 
estructura de la base de datos. Esto incluye la creación, 
modificación y eliminación de objetos de la base de datos,
como tablas, índices y vistas. */

CREATE DATABASE likeme;

\c likeme

CREATE TABLE posts (
  id            SERIAL,
  titulo        VARCHAR(25)     NOT NULL,
  img           VARCHAR(1000)   NOT NULL,
  descripcion   VARCHAR(255)    NOT NULL,
  likes         INT             NULL,
  PRIMARY KEY (id)
);