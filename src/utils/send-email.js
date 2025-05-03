/**
 * Email sending utility
 * Handles form validation and API communication
 */

// Constants
const API_ENDPOINT = "/api/contact";
const REQUIRED_FIELDS = ['name', 'email', 'message'];

/**
 * Validates that all required fields are present in the data
 * @param {Object} data - Form data to validate
 * @throws {Error} If any required field is missing
 */
const validateFormData = (data) => {
  const missingFields = REQUIRED_FIELDS.filter(field => !data[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }
};

/**
 * Sends email data to the API endpoint
 * @param {Object} data - Form data to send
 * @returns {Promise<Object>} Response data from the server
 * @throws {Error} If the request fails
 */
async function handleSendEmail(data) {
  try {
    // Validate form data
    validateFormData(data);
    
    // Send the request
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Handle non-OK responses
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    // Parse and return the response
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Log and rethrow with a user-friendly message
    console.error("Error sending email:", error);
    throw new Error(`Failed to send email: ${error.message || "Please try again later."}`);
  }
}

export default handleSendEmail;
