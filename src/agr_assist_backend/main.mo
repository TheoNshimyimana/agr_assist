import Debug "mo:base/Debug";
import Array "mo:base/Array";

actor {

    // System prompt message
    transient let system_prompt : Text = "You are a helpful assistant.";

    // Must be transient (not persisted between upgrades)
    transient var conversation_history : [Text] = [];

    // Public function to receive user prompts
    public shared func chat(prompt: Text) : async Text {
        Debug.print("Received prompt: " # prompt);

        // Add user prompt to conversation history
        conversation_history := Array.append(conversation_history, [prompt]);

        // Create full prompt (system prompt + history)
        let full_prompt = system_prompt # "\n" # concat(conversation_history, "\n");

        // Simulated AI response
        let response : Text = await simulateAIResponse(full_prompt);

        Debug.print("AI Response: " # response);

        // Save AI response in history
        conversation_history := Array.append(conversation_history, [response]);

        return response;
    };

    // Simulated AI function
    func simulateAIResponse(full_prompt: Text) : async Text {
        return "Simulated AI response for: " # full_prompt;
    };

    // Join array of text values with a separator
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
