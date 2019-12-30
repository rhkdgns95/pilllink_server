import { createTransport, SendMailOptions } from "nodemailer";

const nodeMailerOptions = (fullName: string, email: string, newPassword: string): SendMailOptions => {
    return {
        from: "Admin@pillink.com",
        to: email,
        subject: `Hello ${fullName}, Pil+Link's account has been reset.`,
        html: `
        <div style="font-weight: bold; background-color: #f4f8ff; padding: 20px; border: 1px solid #dfdfdf;">
            <h3 style="margin-left: 10px; letter-spacing: 5px; color: #009688; margin-bottom: 50px;">Pil+Link</h3>

            <p style="margin: 10px;">Hi there,</p>

            <p style="margin: 10px;">This notification is on behalf of 'Pil+Link' to let you know that your password has been successfully reset.</p>

            <p style="margin: 10px;">The temporary password for your account is <span style="color: #264bb4;font-weight: bold;">${newPassword}</span></p>

            <p style="margin: 10px;">Thanks</p>

            <p style="margin-left: 10px; margin-top: 50px;">
                <a href="https://pillink.com">Go Pil+Link</a>
            </p>
        </div>
        `
    };
}


/**
 *  Nodemailer
 * 
 *  주의점!
 *  callbackFn: handleDailyMailCnt함수로 콜백함수를 리턴한다.
 *  예를들어) 동시에 사용자가 메일 요청을 할때,
 *  다르게말하면, 초과되지 않은 유저들의 숫자로 메일 요청이 가능하다면,
 *  먼저 실행한 유저가 MAX값이 되버린다면, 그다음 유저는 실행되면 안되므로
 *  이전 실행 환료한 유저가 MAX값이 되었을때만 작업을 수행해야한다.
 * 
 *  [계정 설정]
 *  https://myaccount.google.com/lesssecureapps 에 들어가서 활성화,
 *  https://accounts.google.com/DisplayUnlockCaptcha 에 들어가서도 활성화를 한다.
 *  
 */
export const sendEmail = async (fullName: string, email: string, newPassword: string, callbackFn: any) => {
    try {
        const mailOptions: SendMailOptions = nodeMailerOptions(fullName, email, newPassword);

        const transporter = createTransport({
            service: process.env.MAIL_SERVICE || "",
            auth: {
                user: process.env.MAIL_USER || "",
                pass: process.env.MAIL_PASS || "",
            }
        });
        await transporter.sendMail(mailOptions);
        callbackFn();
        return {
            ok: true,
            error: null
        };
    } catch(error) {
        return {
            ok: false,
            error: error.message
        };
    }
}