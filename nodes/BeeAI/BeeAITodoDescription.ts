import { INodeProperties } from 'n8n-workflow';
import { paginationProperty } from './BeeAIAPISharedFields';

// When the resource `todos` is selected, this `operation` parameter will be shown.
export const todoOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['todos'],
			},
		},
		options: [
			{
				name: 'Create Todo',
				value: 'create',
				description: 'Create a new todo',
				action: 'Create a new todo',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/me/todos',
					},
				},
			},
			{
				name: 'Delete Todo',
				value: 'delete',
				description: 'Delete a todo by ID',
				action: 'Delete a todo by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/me/todos/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get Todo',
				value: 'get',
				description: 'Get a todo by ID',
				action: 'Get a todo by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/me/todos/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'List Todos',
				value: 'list',
				description: 'List all todos',
				action: 'List all todos',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/me/todos',
					},
				},
			},
			{
				name: 'Update Todo',
				value: 'update',
				description: 'Update a todo by ID',
				action: 'Update a todo by ID',
				routing: {
					request: {
						method: 'PUT',
						url: '=/v1/me/todos/{{$parameter.id}}',
					},
				},
			},
		],
		default: 'list',
	},
];

//
const listTodos: INodeProperties[] = [
	{
		...paginationProperty,
		displayOptions: {
			show: {
				resource: ['todos'],
				operation: ['list'],
			},
		},
	},
];

const todoIdField: INodeProperties = {
	displayName: 'Todo ID',
	name: 'id',
	default: '',
	description: 'The ID of the todo to get, update or delete',
	displayOptions: {
		show: {
			resource: ['todos'],
			operation: ['get', 'update', 'delete'],
		},
	},
	type: 'string',
	required: true,
};

const createTodo: INodeProperties[] = [
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['todos'],
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
	{
		displayName: 'Alarm At (Optional)',
		name: 'alarm_at',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['todos'],
				operation: ['create', 'update'],
			},
		},
		routing: {
			send: {
				property: 'alarm_at',
				type: 'body',
			},
		},
	},
];

const updateTodo: INodeProperties[] = [
	{
		displayName: 'Completed',
		name: 'completed',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['todos'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				property: 'completed',
				type: 'body',
			},
		},
		required: true,
	},
];

export const todoFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                             todos:list                                     */
	/* -------------------------------------------------------------------------- */
	...listTodos,

	/* -------------------------------------------------------------------------- */
	/*                             todos:get, update, delete                      */
	/* -------------------------------------------------------------------------- */
	todoIdField,

	/* -------------------------------------------------------------------------- */
	/*                             todos:create                                   */
	/* -------------------------------------------------------------------------- */
	...createTodo,

	/* -------------------------------------------------------------------------- */
	/*                             todos:update                                   */
	/* -------------------------------------------------------------------------- */
	...updateTodo,
];
