'use server'

import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);
let submissionCount = 0;

export async function sendEmail(data: {
  FirstName: string;
  LastName: string;
  BusinessEmail: string;
  PhoneNumber: string;
}) {
  try {
    const { FirstName, LastName, BusinessEmail, PhoneNumber } = data;
    submissionCount++;


    const { data: emailData, error } = await resend.emails.send({
      from: 'manojkumar<onboarding@resend.dev>',
      to: ['manomk9425@gmail.com'],
      subject: 'New Form Submission',
      html: `
        <p>New form submission received:</p>
        <ul>
          <li><strong>First Name:</strong> ${FirstName}</li>
          <li><strong>Last Name:</strong> ${LastName}</li>
          <li><strong>Business Email:</strong> ${BusinessEmail}</li>
           <li><strong>Phone Number:</strong> ${PhoneNumber}</li>

        </ul>
      `,

    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Form submitted successfully', count: submissionCount };
  } catch (error) {
    return { success: false, error: 'Failed to send email' };
  }
}

