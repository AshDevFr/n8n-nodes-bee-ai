# n8n-nodes-bee-ai

This is an n8n community node. It lets you use Bee AI in your n8n workflows.

Bee is a personal AI that transforms your conversations, tasks, places and more into summaries, personal insights and timely reminders.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials) <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage) <!-- delete if not using this section -->  
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Conversations

- **List conversations**  
  Retrieve summaries of all conversations for a user, with paging support.
- **Get a conversation**  
  Retrieve details of a specific conversation by its ID.
- **Delete a conversation**  
  Delete a specific conversation by its ID.
- **End a conversation**  
  Mark a specific conversation as ended.
- **Retry a conversation**  
  Retry a specific conversation.

### Todos

- **List todos**  
  Retrieve all todos for a user, with paging support.
- **Get a todo**  
  Retrieve details of a specific todo by its ID.
- **Create a todo**  
  Add a new todo for a user (optionally with an alarm time).
- **Update a todo**  
  Update the text, completion status, or alarm time of a specific todo.
- **Delete a todo**  
  Delete a specific todo by its ID.

### Facts

- **List facts**  
  Retrieve all facts for a user, with paging and optional filtering by confirmation status.
- **Get a fact**  
  Retrieve details of a specific fact by its ID.
- **Create a fact**  
  Add a new fact for a user.
- **Update a fact**  
  Update the text or confirmation status of a specific fact.
- **Delete a fact**  
  Delete a specific fact by its ID.

### Locations

- **List locations**  
  Retrieve all locations for a user, with paging and optional filtering by conversation ID.

## Credentials

BeeAI API

The BeeAI API is the only authentication method available for this node. You can find your API key in the [Bee AI Developer Dashboard](https://developer.bee.computer/keys).

## Compatibility

This node has been tested with the following versions of N8N.

- N8N 1.99.1

## Usage

- Install the BeeAI node
- Enter your BeeAI API key
- Choose the operation you want to perform

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Bee AI Developer Documentation](https://developer.bee.computer/)
