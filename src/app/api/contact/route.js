/**
 * Contact form API endpoint
 * Handles form submission and email sending
 */
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const COMPANY_NAME = process.env.COMPANY_NAME || 'Creative Web Pro';

/**
 * Checks if a string is empty or only contains whitespace
 * @param {string} inputString - The string to check
 * @returns {boolean} True if the string is empty or only whitespace
 */
function isEmpty(inputString) {
  return !inputString || inputString.trim().length === 0;
}

/**
 * Creates a configured email transporter
 * @returns {object} Nodemailer transporter
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

/**
 * Validates contact form data
 * @param {object} data - Form data to validate
 * @throws {Error} If validation fails
 */
function validateFormData(data) {
  const { name, email, message } = data;
  
  if (isEmpty(name) || isEmpty(message) || isEmpty(email)) {
    throw new Error("All fields are required.");
  }

  if (!EMAIL_REGEX.test(email)) {
    throw new Error("Please provide a valid email address.");
  }
}

/**
 * Creates admin notification email options
 * @param {object} data - Form data
 * @returns {object} Mail options
 */
function createAdminMailOptions(data) {
  const { name, email, message, phone } = data;
  const currentDate = new Date();
  
  return {
    from: process.env.EMAIL_USER,
    to: process.env.INBOX_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}\n\nReceived on ${currentDate.toLocaleString()}`,
    html: `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #3b82f6; padding: 20px; border-radius: 6px 6px 0 0; color: white; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 20px;">
          <div style="margin-bottom: 15px;">
            <h2 style="color: #3b82f6; margin-bottom: 5px; font-size: 18px;">Contact Details</h2>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            </div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <h2 style="color: #3b82f6; margin-bottom: 5px; font-size: 18px;">Message</h2>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; line-height: 1.6;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 25px;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
          </div>
        </div>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p>This email was sent from your website's contact form.</p>
          <p>© ${currentDate.getFullYear()} ${COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    `
  };
}

/**
 * Creates user confirmation email options
 * @param {object} data - Form data
 * @returns {object} Mail options
 */
function createUserMailOptions(data) {
  const { email } = data;
  
  return {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Received Your Message - A Team Member Will Contact You Shortly`,
    html: `
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2E86C1;">Thank You for Reaching Out!</h2>
          
          <p>Hello,</p>

          <p>We appreciate you contacting us. Your message has been received, and we will contact you as soon as possible.</p>

          <p>If your inquiry is urgent, feel free to reach us directly at +91 9772859772.</p>

          <p>In the meantime, feel free to explore our listings and updates on our <a href="https://www.creativewebpro.in/" style="color: #2E86C1;">Website</a>.</p>

          <p>Best regards, <br>
          <strong>Team ${COMPANY_NAME}</strong><br>
          </p>
          
          <hr style="margin-top: 30px;">
          <small style="color: #888;">This is an automated response. Please do not reply to this email.</small>
        </div>
      </body>
    `
  };
}

/**
 * Sends emails to both admin and user
 * @param {object} data - Form data
 * @throws {Error} If email sending fails
 */
async function sendMail(data) {
  // Validate form data
  validateFormData(data);
  
  // Create transporter
  const transporter = createTransporter();
  
  // Prepare email options
  const adminMailOptions = createAdminMailOptions(data);
  const userMailOptions = createUserMailOptions(data);

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    
    console.log("Emails sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send the email. Please try again later.");
  }
}

/**
 * POST handler for contact form submissions
 * @param {Request} req - The request object
 * @returns {Response} JSON response
 */
export async function POST(req) {
  try {
    // Parse request body
    const body = await req.json();

    // Send emails
    await sendMail(body);
    
    // Return success response
    return new Response(
      JSON.stringify({ message: "Message successfully sent." }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    // Return error response
    return new Response(
      JSON.stringify({ 
        error: err.message || "There was an error sending the message. Please try again later." 
      }), 
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}