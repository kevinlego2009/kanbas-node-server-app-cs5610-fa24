import * as dao from "./dao.js";

export default function PreviewsRoutes(app) {
  // Create a new preview
  app.post("/api/previews", async (req, res) => {
    try {
      const previewData = req.body;
      const createdPreview = await dao.createPreview(previewData);
      res.status(201).json(createdPreview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get a preview by ID
  app.get("/api/previews/:previewId", async (req, res) => {
    try {
      const { previewId } = req.params;
      const preview = await dao.findPreviewById(previewId);
      if (!preview) {
        return res.status(404).json({ error: "Preview not found" });
      }
      res.status(200).json(preview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get previews by quiz ID
  app.get("/api/quizzes/:quizId/previews", async (req, res) => {
    try {
      const { quizId } = req.params;
      const previews = await dao.findPreviewsByQuiz(quizId);
      res.status(200).json(previews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get previews by faculty ID
  app.get("/api/faculties/:facultyId/previews", async (req, res) => {
    try {
      const { facultyId } = req.params;
      const previews = await dao.findPreviewsByFaculty(facultyId);
      res.status(200).json(previews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update a preview
  app.put("/api/previews/:previewId", async (req, res) => {
    try {
      const { previewId } = req.params;
      const previewData = req.body;
      const updatedPreview = await dao.updatePreview(previewId, previewData);
      if (!updatedPreview) {
        return res.status(404).json({ error: "Preview not found" });
      }
      res.status(200).json(updatedPreview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete a preview
  app.delete("/api/previews/:previewId", async (req, res) => {
    try {
      const { previewId } = req.params;
      const deletedPreview = await dao.deletePreview(previewId);
      if (!deletedPreview) {
        return res.status(404).json({ error: "Preview not found" });
      }
      res.status(200).json({ message: "Preview deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete all previews for a quiz
  app.delete("/api/quizzes/:quizId/previews", async (req, res) => {
    try {
      const { quizId } = req.params;
      await dao.deletePreviewsByQuiz(quizId);
      res.status(200).json({ message: "Previews deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
