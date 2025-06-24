import { INodeProperties } from 'n8n-workflow';
import { paginationProperty } from './BeeAIAPISharedFields';

// When the resource `conversations` is selected, this `operation` parameter will be shown.
export const conversationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['conversations'],
			},
		},
		options: [
			{
				name: 'Delete Conversation',
				value: 'delete',
				description: 'Delete a conversation by ID',
				action: 'Delete a conversation by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/me/conversations/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'End Conversation',
				value: 'end',
				description: 'End a conversation by ID',
				action: 'End a conversation by ID',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/me/conversations/{{$parameter.id}}/end',
					},
				},
			},
			{
				name: 'Get Conversation',
				value: 'get',
				description: 'Get a conversation by ID',
				action: 'Get a conversation by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/me/conversations/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'List Conversations',
				value: 'list',
				description: 'List all conversations',
				action: 'List all conversations',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/me/conversations',
					},
				},
			},
			{
				name: 'Retry Conversation',
				value: 'retry',
				description: 'Retry a conversation by ID',
				action: 'Retry a conversation by ID',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/me/conversations/{{$parameter.id}}/retry',
					},
				},
			},
		],
		default: 'list',
	},
];

//
const listConversations: INodeProperties[] = [
	{
		...paginationProperty,
		displayOptions: {
			show: {
				resource: ['conversations'],
				operation: ['list'],
			},
		},
	},
];

const conversationIdField: INodeProperties = {
	displayName: 'Conversation ID',
	name: 'id',
	default: '',
	description: 'The ID of the conversation to get, delete, end or retry',
	displayOptions: {
		show: {
			resource: ['conversations'],
			operation: ['get', 'delete', 'end', 'retry'],
		},
	},
	type: 'string',
	required: true,
};

export const conversationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                             conversations:list                             */
	/* -------------------------------------------------------------------------- */
	...listConversations,

	/* -------------------------------------------------------------------------- */
	/*                             conversations:get, delete, end, retry          */
	/* -------------------------------------------------------------------------- */
	conversationIdField,
];
