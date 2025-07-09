import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, text, html) =>{
    try{
        const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_SMTP_HOST,
  port: process.env.MAILTRAP_SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILTRAP_SMTP_USER, // generated ethereal user
    pass: process.env.MAILTRAP_SMTP_PASS, // generated ethereal password    
  },

  
   });

   const info = await transporter.sendMail({
    from: 'INNGEST TMS',
    to,
    subject,
    text, // plain‑text body
  });

  console.log("Message sent:", info.messageId);
  return info;
    }catch(error){
        console.error("Mail error:",error.message);
        throw error;
    }
}



