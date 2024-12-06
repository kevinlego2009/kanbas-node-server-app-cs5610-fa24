import mongoose from "mongoose";

const previewSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    facultyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
    lastAttemptedAt: {
      type: Date,
      default: Date.now,
    },
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedChoices: [
          {
            type: String, // For Multiple Choice questions
          },
        ],
        textAnswer: {
          type: String, // For Fill in the Blank questions
        },
        trueFalseAnswer: {
          type: Boolean, // For True/False questions
        },
        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    collection: "previews", // Explicitly sets the collection name
  }
);

export default previewSchema;
