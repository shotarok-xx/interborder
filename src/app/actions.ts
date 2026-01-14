"use server";

export async function submitContact(formData: FormData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");

    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer here.
    // The recipient email is s@interborder.net

    console.log("Contact Form Submission Received:");
    console.log(`From: ${firstName} ${lastName} <${email}>`);
    console.log(`Message: ${message}`);
    console.log(`Recipient: s@interborder.net`);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
}
