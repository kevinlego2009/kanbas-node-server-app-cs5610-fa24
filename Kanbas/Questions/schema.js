import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    type: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
    points: {
      type: Number,
      required: true,
    },
    choices: [
      {
        choiceText: {
          type: String,
          required: function () {
            return this.type === "Multiple Choice";
          },
        },
        isCorrect: {
          type: Boolean,
          required: function () {
            return this.type === "Multiple Choice";
          },
        },
      },
    ],
    correctAnswers: [
      {
        type: String,
        required: function () {
          return this.type === "Fill in the Blank";
        },
      },
    ],
    trueFalseAnswer: {
      type: Boolean,
      required: function () {
        return this.type === "True/False";
      },
    },
  },
  {
    timestamps: true,
    collection: "questions",
  }
);

export default questionSchema;
