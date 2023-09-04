import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const PORT = env.PORT;

mongoose
	.connect(env.MONGO_URI)
	.then(() => {
		console.log("Mongoose is connected!!");

		app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
	})
	.catch(err => console.error(err));
