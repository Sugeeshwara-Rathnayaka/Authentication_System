import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (to, name) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "SPR App <onboarding@resend.dev>",
      to,
      subject: "Welcome to SPR",
      text: `Hello ${name},

Welcome to SPR! Your account has been successfully created.

Your login email: ${to}

Thank you for joining us!
`,
    });
    if (error) {
      console.error("Resend send error:", error);
      return { success: false, error };
    }

    console.log("Resend email sent, ID:", data.id);
    return { success: true, id: data.id };
  } catch (err) {
    console.error("Unexpected error sending with Resend:", err);
    return { success: false, error: err };
  }
};

// Send OTP Email
// export const sendOtpEmail = async (to, otp) => {
//   await resend.emails.send({
//     from: "SPR App <onboarding@resend.dev>",
//     to,
//     subject: "Your OTP Code",
//     text: `Your OTP is: ${otp}`,
//   });
// };
