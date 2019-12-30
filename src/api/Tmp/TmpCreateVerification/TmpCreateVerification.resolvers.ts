import { createTransport, SendMailOptions } from "nodemailer";
import { Resolvers } from "../../../types/resolvers";

const mailOptions: SendMailOptions = {
    from: "Admin@pillink.com",
    to: "rhkdgns95@naver.com",
    subject: "Hello, I`m Gmail",
    html: `Hello, your key: 7777, <a href="https://www.naver.com">Click</a>`
};

/**
 *  Nodemailer
 * 
 *  그리고 자신이 사용할 구글 아이디로 구글에 접속 후
  * https://myaccount.google.com/lesssecureapps 에 들어가서 활성화,
 *  https://accounts.google.com/DisplayUnlockCaptcha 에 들어가서도 활성화를 한다.
 */
const resolvers: Resolvers = {
    Mutation: {
        TmpCreateVerification: async (_, __, { req }): Promise<any> => {
            const { dailyMailCnt, handleDailyMailCnt } = req;
            console.log("HELLO");
            try{ 
                if(dailyMailCnt < 3) {
                    const transporter = createTransport({
                        service: process.env.MAIL_SERVICE || "",
                        auth: {
                            user: process.env.MAIL_USER || "",
                            pass: process.env.MAIL_PASS || "",
                        }
                    });
                    await transporter.sendMail(mailOptions);
                    handleDailyMailCnt();
                    return {
                        ok: true
                    };
                } else {
                    console.log("this is FULL !", dailyMailCnt);
                    return {
                        ok: false
                    };
                }
                
            } catch(error) {
                console.log("error: ", error.message);
                return {
                    ok: false
                }
            }
            
        }
    }
};

export default resolvers;