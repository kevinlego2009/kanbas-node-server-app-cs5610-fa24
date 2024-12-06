import model from "./model.js"; // Your Attempt Mongoose model

export async function createAttempt(attemptData) {
  try {
    return await model.create(attemptData);
  } catch (error) {
    console.error("Error creating attempt:", error);
    throw new Error("Failed to create attempt");
  }
}

export async function findAttemptById(attemptId) {
  try {
    return await model.findById(attemptId);
  } catch (error) {
    console.error("Error finding attempt by ID:", error);
    throw new Error("Failed to find attempt by ID");
  }
}

export async function findAttemptsByQuiz(quizId) {
  try {
    return await model.find({ quizId });
  } catch (error) {
    console.error("Error finding attempts for quiz:", error);
    throw new Error("Failed to find attempts for the quiz");
  }
}

export async function findAttemptsByUser(userId) {
  try {
    return await model.find({ userId });
  } catch (error) {
    console.error("Error finding attempts for user:", error);
    throw new Error("Failed to find attempts for the user");
  }
}

export async function findAttemptsByUserAndQuiz(userId, quizId) {
  try {
    return await model.find({ userId, quizId });
  } catch (error) {
    console.error("Error finding attempts for user and quiz:", error);
    throw new Error("Failed to find attempts for the user and quiz");
  }
}

export async function deleteAttemptsByQuiz(quizId) {
  try {
    return await model.deleteMany({ quizId });
  } catch (error) {
    console.error("Error deleting attempts by quizId:", error);
    throw new Error("Failed to delete attempts for the quiz");
  }
}
