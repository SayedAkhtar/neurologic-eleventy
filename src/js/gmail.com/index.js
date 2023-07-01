const nodemailer = require('nodemailer');

// Create a transporter using SMTP settings for Gmail
async function emailsend(){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sender@example.com', //senderaccount
          pass: 'bgrwigysmhcbyqps' //gmail password of nodemailer .Its is different for different useraccounts
        }
      });
      
      const message = {
          from: 'sender@example.com', //senderaccount
          to: 'receiver@example.com',//receiveraccount  [Recipient's Name], Here's the information you requested'
          subject: '[Recipient\'\s Name] ,Here\'s\ the infomation you requested ',
          text: "Dear [First Name],\nThank you for reaching out to us. We appreciate your interest in our company and would be happy to assist you. Please find below a summary of the information you provided through our form:\nFirst Name: [First Name] \nLast Name: [Last Name] \nEmail: [Email] \nTelephone: [Telephone] \nCompany: [Company] \nHow did you hear about us? [How did you hear about us?] \n\nWe are excited to connect with you and provide the assistance you need. Whether you have questions, require specific information, or need support with our products or services, we are here to help.  \n\nPlease let us know the best way and time to reach you, so we can further discuss your requirements and address any inquiries you may have. You can expect to hear from us shortly.\n\nThank you again for considering our company. We look forward to assisting you.\n\nBest regards,\n\n[Your Name]\n[Your Position]\n[Your Company Name]\n[Your Contact Information]"
        };
      
        transporter.sendMail(message, (err, info) => {
          if (err) {
            console.error('Error sending email:', err);
          } else {
            console.log('Email sent:', info.response);
          }
        });

}

async function main(){
    await emailsend();
}
main();
