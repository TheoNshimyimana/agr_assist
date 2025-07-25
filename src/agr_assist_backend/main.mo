import Debug "mo:base/Debug";
import Array "mo:base/Array";

actor {
    // System prompt message
    let system_prompt : Text = "You are a helpful assistant.";

    // Stores conversation history: user prompts + AI responses
    var conversation_history : [Text] = [];

    // Public shared function to receive prompts and return responses
    public shared func chat(prompt: Text) : async Text {
        Debug.print("Received prompt: " # prompt);

        // Add user prompt to conversation history
        conversation_history := Array.append(conversation_history, [prompt]);

        // Create a full prompt by combining system prompt + history
        let full_prompt = system_prompt # "\n" # concat(conversation_history, "\n");

        // Get simulated AI response
        let response : Text = await simulateAIResponse(full_prompt);

        Debug.print("AI Response: " # response);

        // Add response to history
        conversation_history := Array.append(conversation_history, [response]);

        return response;
    };

    // Simulated AI function (replace this with actual API logic if needed)
    func simulateAIResponse(full_prompt: Text) : async Text {
        return "Simulated AI response for: " # full_prompt;
    };

    // Utility to join array of messages with a separator (like "\n")
    func concat(messages: [Text], separator: Text) : Text {
        var result : Text = "";
        var i = 0;
        let total = messages.size();

        while (i < total) {
            result := result # messages[i];
            if (i < total - 1) {
                result := result # separator;
            };
            i += 1;
        };
        return result;
    };
}
