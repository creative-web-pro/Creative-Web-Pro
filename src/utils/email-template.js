/**
 * Email template rendering utility
 * Handles template loading and variable substitution
 */
import { readFileSync } from 'fs';
import { join } from 'path';

// Constants
const COMPANY_NAME = process.env.COMPANY_NAME || 'Creative Web Pro';
const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
const TIME_FORMAT_OPTIONS = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
};

/**
 * Format a date object to a readable date string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', DATE_FORMAT_OPTIONS);
};

/**
 * Format a date object to a readable time string
 * @param {Date} date - The date to format
 * @returns {string} Formatted time string
 */
const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', TIME_FORMAT_OPTIONS);
};

/**
 * Render an email template with provided data
 * @param {Object} data - Data to inject into the template
 * @returns {string} Rendered HTML template
 */
const renderTemplate = (data) => {
  try {
    // Load template file
    const templatePath = join(__dirname, '../templates/email-template.html');
    let template = readFileSync(templatePath, 'utf8');
    
    // Prepare replacement data
    const now = new Date();
    const replacements = {
      ...data,
      date: formatDate(now),
      time: formatTime(now),
      year: now.getFullYear(),
      companyName: COMPANY_NAME
    };
    
    // Replace all template variables
    Object.entries(replacements).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, value || '');
    });
    
    return template;
  } catch (error) {
    console.error('Error rendering email template:', error);
    throw new Error('Failed to render email template');
  }
};

export default renderTemplate;