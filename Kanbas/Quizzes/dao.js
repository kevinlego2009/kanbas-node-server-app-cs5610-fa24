import model from "./model.js"; // Your Quiz Mongoose model

export async function createQuiz(quizData) {
  try {
    delete quizData._id;
    return await model.create(quizData);
  } catch (error) {
    console.error("Error creating quiz:", error);
    throw new Error("Failed to create quiz");
  }
}

export async function findQuizById(quizId) {
  try {
    return await model.findById(quizId);
  } catch (error) {
    console.error("Error finding quiz by ID:", error);
    throw new Error("Failed to find quiz by ID");
  }
}

export async function findQuizzesByCourse(courseId) {
  try {
    return await model.find({ courseId });
  } catch (error) {
    console.error("Error finding quizzes for course:", error);
    throw new Error("Failed to find quizzes for the course");
  }
}

export async function updateQuiz(quizId, quizData) {
  try {
    return await model.findByIdAndUpdate(quizId, quizData, { new: true });
  } catch (error) {
    console.error("Error updating quiz:", error);
    throw new Error("Failed to update quiz");
  }
}

export async function deleteQuiz(quizId) {
  try {
    return await model.findByIdAndDelete(quizId);
  } catch (error) {
    console.error("Error deleting quiz:", error);
    throw new Error("Failed to delete quiz");
  }
}

export async function deleteQuizzesByCourse(courseId) {
  try {
    return await model.deleteMany({ courseId });
  } catch (error) {
    console.error("Error deleting quizzes by courseId:", error);
    throw new Error("Failed to delete quizzes for the course");
  }
}
