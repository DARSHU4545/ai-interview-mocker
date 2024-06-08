import mongoose from "mongoose";

const mockSchema = mongoose.Schema({
  jobPosition: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  jobExperince: {
    type: Number,
    default: 0,
    required: true,
  },
});

export const mockInterview = mongoose.model("mockInterview", mockSchema);
