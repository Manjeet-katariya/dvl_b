const express = require('express');
const router = express.Router();
const WebsiteContent = require('../models/WebsiteContent');

// GET /api/website-content - Get website content
router.get('/', async (req, res) => {
  try {
    let content = await WebsiteContent.findOne();
    
    // If no content exists, create a default one
    if (!content) {
      content = new WebsiteContent();
      await content.save();
    }
    
    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Error fetching website content:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching website content',
      error: error.message
    });
  }
});

// PUT /api/website-content - Update website content
router.put('/', async (req, res) => {
  try {
    let content = await WebsiteContent.findOne();
    
    if (!content) {
      content = new WebsiteContent(req.body);
    } else {
      // Update individual page sections
      if (req.body.home) {
        content.home = { ...content.home, ...req.body.home };
      }
      if (req.body.about) {
        content.about = { ...content.about, ...req.body.about };
      }
      if (req.body.services) {
        content.services = { ...content.services, ...req.body.services };
      }
      if (req.body.portfolio) {
        content.portfolio = { ...content.portfolio, ...req.body.portfolio };
      }
      if (req.body.calculator) {
        content.calculator = { ...content.calculator, ...req.body.calculator };
      }
      if (req.body.contact) {
        content.contact = { ...content.contact, ...req.body.contact };
      }
      content.updatedAt = Date.now();
    }
    
    const savedContent = await content.save();
    
    res.json({
      success: true,
      message: 'Website content updated successfully',
      data: savedContent
    });
  } catch (error) {
    console.error('Error updating website content:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating website content',
      error: error.message
    });
  }
});

module.exports = router;
