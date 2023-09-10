# Server Endpoints

* FILE UPLOAD ON SERVER `POST` >> https://click-fit-server.taqiy.com/file ( .jpg or .png )

* ALL USER >> `GET` https://click-fit-server.taqiy.com/user
* ADD USER >> `POST` https://click-fit-server.taqiy.com/user/addUser (`email`, `password`, `type`, `active`)
* GET A SINGLE USER >>  `GET` https://click-fit-server.taqiy.com/user/getUser/:ID (Get a single User)
* UPDATE USER >> `PATCH` https://click-fit-server.taqiy.com/user/updateUser/:ID   (`email`, `password`, `type`, `active`)
* DELETE USER >> `DELETE` https://click-fit-server.taqiy.com/user/deleteUser/:ID
