import model from "./model.js"; // Your Preview Mongoose model

export async function createPreview(previewData) {
  try {
    return await model.create(previewData);
  } catch (error) {
    console.error("Error creating preview:", error);
    throw new Error("Failed to create preview");
  }
}

export async function findPreviewById(previewId) {
  try {
    return await model.findById(previewId);
  } catch (error) {
    console.error("Error finding preview by ID:", error);
    throw new Error("Failed to find preview by ID");
  }
}

export async function findPreviewsByQuiz(quizId) {
  try {
    return await model.find({ quizId });
  } catch (error) {
    console.error("Error finding previews for quiz:", error);
    throw new Error("Failed to find previews for the quiz");
  }
}

export async function findPreviewsByFaculty(facultyId) {
  try {
    return await model.find({ facultyId });
  } catch (error) {
    console.error("Error finding previews for faculty:", error);
    throw new Error("Failed to find previews for the faculty");
  }
}

export async function updatePreview(previewId, previewData) {
  try {
    return await model.findByIdAndUpdate(previewId, previewData, { new: true });
  } catch (error) {
    console.error("Error updating preview:", error);
    throw new Error("Failed to update preview");
  }
}

export async function deletePreview(previewId) {
  try {
    return await model.findByIdAndDelete(previewId);
  } catch (error) {
    console.error("Error deleting preview:", error);
    throw new Error("Failed to delete preview");
  }
}

export async function deletePreviewsByQuiz(quizId) {
  try {
    return await model.deleteMany({ quizId });
  } catch (error) {
    console.error("Error deleting previews by quizId:", error);
    throw new Error("Failed to delete previews for the quiz");
  }
}
