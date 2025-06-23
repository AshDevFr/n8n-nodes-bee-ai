import { INodeProperties } from 'n8n-workflow';
import { paginationProperty } from './BeeAIAPISharedFilelds';

// When the resource `locations` is selected, this `operation` parameter will be shown.
export const locationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['locations'],
			},
		},
		options: [
			{
				name: 'List Locations',
				value: 'list',
				description: 'List all locations',
				action: 'List all locations',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/me/locations',
					},
				},
			},
		],
		default: 'list',
	},
];

//
const listLocations: INodeProperties[] = [
	{
		...paginationProperty,
		displayOptions: {
			show: {
				resource: ['locations'],
				operation: ['list'],
			},
		},
	},
];

export const locationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                             locations:list                             */
	/* -------------------------------------------------------------------------- */
	...listLocations,
];
