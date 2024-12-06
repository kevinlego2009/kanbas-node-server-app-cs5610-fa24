import model from "./model.js"; // Your Question Mongoose model

export async function createQuestion(questionData) {
  try {
    return await model.create(questionData);
  } catch (error) {
    console.error("Error creating question:", error);
    throw new Error("Failed to create question");
  }
}

export async function findQuestionById(questionId) {
  try {
    return await model.findById(questionId);
  } catch (error) {
    console.error("Error finding question by ID:", error);
    throw new Error("Failed to find question by ID");
  }
}

export async function findQuestionsByQuiz(quizId) {
  try {
    return await model.find({ quizId });
  } catch (error) {
    console.error("Error finding questions for quiz:", error);
    throw new Error("Failed to find questions for the quiz");
  }
}

export async function updateQuestion(questionId, questionData) {
  try {
    return await model.findByIdAndUpdate(questionId, questionData, {
      new: true,
    });
  } catch (error) {
    console.error("Error updating question:", error);
    throw new Error("Failed to update question");
  }
}

export async function deleteQuestion(questionId) {
  try {
    return await model.findByIdAndDelete(questionId);
  } catch (error) {
    console.error("Error deleting question:", error);
    throw new Error("Failed to delete question");
  }
}

export async function deleteQuestionsByQuiz(quizId) {
  try {
    return await model.deleteMany({ quizId });
  } catch (error) {
    console.error("Error deleting questions by quizId:", error);
    throw new Error("Failed to delete questions for the quiz");
  }
}
