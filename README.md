"# FullStackProjectTest"

With only the id and description data, Spring Boot was used to develop the REST APIs necessary to carry out CRUD actions (create, read, update, and delete) on this "Task" entity.
These are the four fundamental activities we carry out on persistence storage, and their acronym CRUD stands for Create, Read/Retrieve, Update, and Delete.
Data-oriented CRUD employs common HTTP techniques.
A few HTTP methods function as CRUD processes, and it is important to note that they are crucial from the standpoint of programming development.
They also help us understand web development better and support us while working with databases. Therefore, the usual CRUD operations are as follows.

POST: Creates a new resource GET: Reads/Retrieve a resource PUT: Updates an existing resource DELETE: Deletes a resource
CREATE Operation: Performs the INSERT statement to create a new record.
READ Operation: Reads table records based on the input parameter. 
UPDATE Operation: Executes an update statement on the table. It is based on the input parameter.
DELETE Operation: Deletes a specified row in the table. It is also based on the input parameter.

Built on top of the spring, Spring Boot has all the characteristics of the spring.
And is quickly becoming a favorite among developers these days since it provides a production-ready environment that lets them concentrate on the logic without having to worry about setup and configuration.
It takes extremely little time to create a production-ready application using the microservices-based Spring Boot platform.
The Spring Boot framework has an interface called CrudRepository that has CRUD operation methods.
On a repository, it offers generic Crud operations. It extends the Spring Data Repository interface and is specified in the package org.springframework.data.repository.
Someone must design an interface and extend the CrudRepository interface in order to use CrudRepository in a spring boot application.
Illustration: public interface DescriptionRepo extends JpaRepository<User, Long> { }
etc.
