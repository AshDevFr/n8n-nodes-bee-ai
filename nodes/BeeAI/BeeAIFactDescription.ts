import { INodeProperties } from 'n8n-workflow';
import { paginationProperty } from './BeeAIAPISharedFilelds';

// When the resource `facts` is selected, this `operation` parameter will be shown.
export const factOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['facts'],
			},
		},
		options: [
			{
				name: 'Create Fact',
				value: 'create',
				description: 'Create a new fact',
				action: 'Create a new fact',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/me/facts',
					},
				},
			},
			{
				name: 'Delete Fact',
				value: 'delete',
				description: 'Delete a fact by ID',
				action: 'Delete a fact by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/me/facts/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get Fact',
				value: 'get',
				description: 'Get a fact by ID',
				action: 'Get a fact by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/me/facts/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'List Facts',
				value: 'list',
				description: 'List all facts',
				action: 'List all facts',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/me/facts',
					},
				},
			},
			{
				name: 'Update Fact',
				value: 'update',
				description: 'Update a fact by ID',
				action: 'Update a fact by ID',
				routing: {
					request: {
						method: 'PUT',
						url: '=/v1/me/facts/{{$parameter.id}}',
					},
				},
			},
		],
		default: 'list',
	},
];

//
const listFacts: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['facts'],
				operation: ['list'],
			},
		},
		options: [
			{
				displayName: 'Confirmed',
				name: 'confirmed',
				default: false,
				description: 'Whether the fact is confirmed',
				routing: {
					send: {
						property: 'confirmed',
						type: 'query',
					},
				},
				type: 'boolean',
			},
		],
	},
	{
		...paginationProperty,
		displayOptions: {
			show: {
				resource: ['facts'],
				operation: ['list'],
			},
		},
	},
];

const factIdField: INodeProperties = {
	displayName: 'Fact ID',
	name: 'id',
	default: '',
	description: 'The ID of the todo to get, update or delete',
	displayOptions: {
		show: {
			resource: ['facts'],
			operation: ['get', 'update', 'delete'],
		},
	},
	type: 'string',
	required: true,
};

const createFact: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['facts'],
				operation: ['create', 'update'],
			},
		},
		routing: {
			send: {
				property: 'text',
				type: 'body',
			},
		},
		required: true,
	},
];

const updateFact: INodeProperties[] = [
	{
		displayName: 'Confirmed',
		name: 'confirmed',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['facts'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'confirmed',
				type: 'body',
			},
		},
		required: true,
	},
];

export const factFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                             facts:list                             */
	/* -------------------------------------------------------------------------- */
	...listFacts,

	/* -------------------------------------------------------------------------- */
	/*                             facts:get, update, delete                      */
	/* -------------------------------------------------------------------------- */
	factIdField,

	/* -------------------------------------------------------------------------- */
	/*                             facts:create                                   */
	/* -------------------------------------------------------------------------- */
	...createFact,

	/* -------------------------------------------------------------------------- */
	/*                             facts:update                                   */
	/* -------------------------------------------------------------------------- */
	...updateFact,
];
