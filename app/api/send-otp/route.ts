// app/api/send-otp/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    // Create email transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
      },
    });

    // Email HTML template
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Login</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #059669 0%, #10b981 100%); border-radius: 16px 16px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">🔐 Verify Your Login</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 24px; color: #374151;">
                Hello,
              </p>
              
              <p style="margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #374151;">
                We received a login request for your EmpowerDreamz account. Use the code below to verify your identity:
              </p>
              
              <!-- OTP Code Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0 0 32px;">
                <tr>
                  <td align="center" style="padding: 24px; background-color: #f9fafb; border-radius: 12px; border: 2px dashed #d1d5db;">
                    <p style="margin: 0 0 8px; font-size: 14px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Your Verification Code</p>
                    <p style="margin: 0; font-size: 48px; font-weight: bold; color: #059669; letter-spacing: 8px; font-family: 'Courier New', monospace;">${otp}</p>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 16px; font-size: 14px; line-height: 20px; color: #6b7280;">
                <strong>⏱️ This code expires in 10 minutes.</strong>
              </p>
              
              <p style="margin: 0 0 32px; font-size: 14px; line-height: 20px; color: #6b7280;">
                If you didn't request this code, you can safely ignore this email. Someone might have entered your email address by mistake.
              </p>
              
              <!-- Divider -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 32px 0;">
                <tr>
                  <td style="border-top: 1px solid #e5e7eb;"></td>
                </tr>
              </table>
              
              <!-- Security Tips -->
              <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #92400e;">
                  🛡️ Security Tips
                </p>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; line-height: 20px; color: #78350f;">
                  <li style="margin-bottom: 4px;">Never share this code with anyone</li>
                  <li style="margin-bottom: 4px;">EmpowerDreamz will never ask for this code via phone or email</li>
                  <li>If you suspect unauthorized access, change your password immediately</li>
                </ul>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; text-align: center; background-color: #f9fafb; border-radius: 0 0 16px 16px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #6b7280;">
                <strong>EmpowerDreamz</strong>
              </p>
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                Building dreams, empowering communities
              </p>
            </td>
          </tr>
          
        </table>
        
        <!-- Footer Message -->
        <p style="margin: 24px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
          This is an automated message. Please do not reply to this email.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"EmpowerDreamz Security" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your Login Code: ${otp}`,
      html: emailHtml,
      text: `Your EmpowerDreamz verification code is: ${otp}\n\nThis code expires in 10 minutes.\n\nIf you didn't request this code, please ignore this email.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP email' },
      { status: 500 }
    );
  }
}