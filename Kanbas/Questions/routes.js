import * as dao from "./dao.js";

export default function QuestionsRoutes(app) {
  // Create a new question
  app.post("/api/questions", async (req, res) => {
    try {
      const questionData = req.body;
      const createdQuestion = await dao.createQuestion(questionData);
      res.status(201).json(createdQuestion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get a question by ID
  app.get("/api/questions/:questionId", async (req, res) => {
    try {
      const { questionId } = req.params;
      const question = await dao.findQuestionById(questionId);
      if (!question) {
        return res.status(404).json({ error: "Question not found" });
      }
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get questions by quiz ID
  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    try {
      const { quizId } = req.params;
      const questions = await dao.findQuestionsByQuiz(quizId);
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update a question
  app.put("/api/questions/:questionId", async (req, res) => {
    try {
      const { questionId } = req.params;
      const questionData = req.body;
      const updatedQuestion = await dao.updateQuestion(
        questionId,
        questionData
      );
      if (!updatedQuestion) {
        return res.status(404).json({ error: "Question not found" });
      }
      res.status(200).json(updatedQuestion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete a question
  app.delete("/api/questions/:questionId", async (req, res) => {
    try {
      const { questionId } = req.params;
      const deletedQuestion = await dao.deleteQuestion(questionId);
      if (!deletedQuestion) {
        return res.status(404).json({ error: "Question not found" });
      }
      res.status(200).json({ message: "Question deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete questions by quiz ID
  app.delete("/api/quizzes/:quizId/questions", async (req, res) => {
    try {
      const { quizId } = req.params;
      await dao.deleteQuestionsByQuiz(quizId);
      res.status(200).json({ message: "Questions deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
