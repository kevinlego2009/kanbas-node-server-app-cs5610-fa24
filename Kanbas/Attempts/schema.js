import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attemptNumber: {
      type: Number,
      required: true,
      default: 1,
    },
    score: {
      type: Number,
      default: 0,
    },
    submittedAt: {
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
            type: String, // For Multiple Choice
          },
        ],
        textAnswer: {
          type: String, // For Fill in the Blank
        },
        trueFalseAnswer: {
          type: Boolean, // For True/False
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
    collection: "attempts", // Explicitly sets the collection name
  }
);
export default attemptSchema;
