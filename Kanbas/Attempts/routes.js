import * as dao from "./dao.js";

export default function AttemptsRoutes(app) {
  // Create a new attempt
  app.post("/api/attempts", async (req, res) => {
    try {
      const attemptData = req.body;
      const createdAttempt = await dao.createAttempt(attemptData);
      res.status(201).json(createdAttempt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get an attempt by ID
  app.get("/api/attempts/:attemptId", async (req, res) => {
    try {
      const { attemptId } = req.params;
      const attempt = await dao.findAttemptById(attemptId);
      if (!attempt) {
        return res.status(404).json({ error: "Attempt not found" });
      }
      res.status(200).json(attempt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get all attempts for a quiz
  app.get("/api/quizzes/:quizId/attempts", async (req, res) => {
    try {
      const { quizId } = req.params;
      const attempts = await dao.findAttemptsByQuiz(quizId);
      res.status(200).json(attempts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get all attempts for a user
  app.get("/api/users/:userId/attempts", async (req, res) => {
    try {
      const { userId } = req.params;
      const attempts = await dao.findAttemptsByUser(userId);
      res.status(200).json(attempts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get all attempts for a user in a specific quiz
  app.get("/api/users/:userId/quizzes/:quizId/attempts", async (req, res) => {
    try {
      const { userId, quizId } = req.params;
      const attempts = await dao.findAttemptsByUserAndQuiz(userId, quizId);
      res.status(200).json(attempts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete all attempts for a quiz
  app.delete("/api/quizzes/:quizId/attempts", async (req, res) => {
    try {
      const { quizId } = req.params;
      await dao.deleteAttemptsByQuiz(quizId);
      res.status(200).json({ message: "Attempts deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/attempts/:quizId/:courseId", async (req, res) => {
    try {
      const { courseId, quizId } = req.params; // Destructure in one line
      const attempts = await dao.findAttemptsByQuizAndCourse(quizId, courseId);
      res.status(200).json(attempts);
    } catch (error) {
      console.error("Error in /api/attempts/:quizId/:courseId:", error);
      res
        .status(500)
        .json({ error: error.message || "Failed to fetch attempts." });
    }
  });

  app.get("/api/users/:userId/attempts/:quizId",async (req, res)=> {
    try {
      const { userId, quizId } = req.params; 
      const attempts = await dao.findAttemptsByQuizAndUser(quizId, userId);
      res.status(200).json(attempts);
    } catch (error) {
      console.error("Error in /api/attempts/:quizId/:courseId:", error);
      res
        .status(500)
        .json({ error: error.message || "Failed to fetch attempts." });
    }
  })
}
