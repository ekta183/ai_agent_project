import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "ai_assistant" , eventKey: process.env.INNGEST_EVENT_KEY});

// Create an empty array where we'll export future Inngest functions
export const functions = [];