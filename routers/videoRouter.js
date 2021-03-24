import express from "express";
import { deleteVideo, getUpload, videoDetail, postUpload, getEditVideo, postEditVideo } from "../controller/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
