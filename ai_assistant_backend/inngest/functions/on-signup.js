import { Inngest, NonRetriableError } from "inngest";
import  User  from "../../models/user.js";
import { sendEmail } from "../../utils/mailer.js";
import { inngest } from "../client.js";
export const onUserSignup = inngest.createFunction(
    {
        id:"on-user-signup",
        retries : 2
    },
    {
        event:"user/signup",
    },
    async ({event,step})=>{
        try{
            const {email} = event.data;
            const user = await step.run("get-user-email",async()=>{
                const userObject = User.findOne({email})
                if(!userObject){
                    throw new NonRetriableError( "User no longer exists in our database");
                }
                return userObject
            })

            await step.run("send-welcome-email",async()=>{
                const subject = `Welcome to our platform!`;
                const message =  `Hi, 
                \n\n
                Thank you for signing up on our platform. We are excited to have you on board!
                \n\n
                `

                await sendEmail(user.email,subject,message);

            }); 

            return {success:true, message:"Welcome email sent successfully"};
        }catch(error){
            console.error("Error running step",error.message);
            return {success:false, message:error.message};
        }
    }
);