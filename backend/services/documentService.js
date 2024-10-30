const Document = require('../models/Document');
const DocumentVersion = require('../models/DocumentVersion');

class DocumentService {
  static async createVersion(documentId, content, userId) {
    try {
      const document = await Document.findById(documentId);
      if (!document) {
        throw new Error('Document not found');
      }

      // Get the latest version number
      const latestVersion = await DocumentVersion.findOne({ document: documentId })
        .sort({ versionNumber: -1 });
      
      const versionNumber = latestVersion ? latestVersion.versionNumber + 1 : 1;

      // Create new version
      const version = new DocumentVersion({
        document: documentId,
        content,
        versionNumber,
        createdBy: userId,
      });

      await version.save();
      return version;
    } catch (error) {
      throw error;
    }
  }

  static async getVersionHistory(documentId) {
    return DocumentVersion.find({ document: documentId })
      .sort({ versionNumber: -1 })
      .populate('createdBy', 'username');
  }

  static async restoreVersion(documentId, versionNumber) {
    const version = await DocumentVersion.findOne({
      document: documentId,
      versionNumber
    });

    if (!version) {
      throw new Error('Version not found');
    }

    await Document.findByIdAndUpdate(documentId, {
      content: version.content,
      updatedAt: Date.now()
    });

    return Document.findById(documentId);
  }
}

module.exports = DocumentService;