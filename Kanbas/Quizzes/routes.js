import * as dao from "./dao.js";

export default function QuizzesRoutes(app) {
  // Create a new quiz
  app.post("/api/quizzes", async (req, res) => {
    console.log("Request received at /api/quizzes", req.body);

    try {
      const quizData = req.body;
      const createdQuiz = await dao.createQuiz(quizData);
      res.status(201).json(createdQuiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get a quiz by ID
  app.get("/api/quizzes/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const quiz = await dao.findQuizById(quizId);
      if (!quiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.status(200).json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get quizzes by course ID
  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    try {
      const { courseId } = req.params;
      const quizzes = await dao.findQuizzesByCourse(courseId);
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update a quiz
  app.put("/api/quizzes/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const quizData = req.body;
      const updatedQuiz = await dao.updateQuiz(quizId, quizData);
      if (!updatedQuiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.status(200).json(updatedQuiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete a quiz
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const deletedQuiz = await dao.deleteQuiz(quizId);
      if (!deletedQuiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.status(200).json({ message: "Quiz deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete quizzes by course ID
  app.delete("/api/courses/:courseId/quizzes", async (req, res) => {
    try {
      const { courseId } = req.params;
      await dao.deleteQuizzesByCourse(courseId);
      res.status(200).json({ message: "Quizzes deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
