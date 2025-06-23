/* eslint-disable n8n-nodes-base/node-filename-against-convention */

import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { conversationFields, conversationOperations } from './BeeAIConversationDescription';
import { todoFields, todoOperations } from './BeeAITodoDescription';
import { factFields, factOperations } from './BeeAIFactDescription';
import { locationFields, locationOperations } from './BeeAILocationDescription';

export class BeeAI implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'BeeAI',
		name: 'beeai',
		icon: { light: 'file:BeeAI.svg', dark: 'file:BeeAI.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with BeeAI API',
		defaults: {
			name: 'BeeAI',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'beeaiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.bee.computer',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (BeeAIConversationDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Conversation',
						value: 'conversations',
					},
					{
						name: 'Todo',
						value: 'todos',
					},
					{
						name: 'Fact',
						value: 'facts',
					},
					{
						name: 'Location',
						value: 'locations',
					},
				],
				default: 'conversations',
			},

			...conversationOperations,
			...conversationFields,

			...todoOperations,
			...todoFields,

			...factOperations,
			...factFields,

			...locationOperations,
			...locationFields,
		],
	};
}
