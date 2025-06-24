import { INodeProperties, INodePropertyCollection, INodePropertyOptions } from 'n8n-workflow';

export const paginationOptions: Array<
	INodePropertyOptions | INodeProperties | INodePropertyCollection
> = [
	{
		displayName: 'Page Number',
		name: 'page',
		default: 1,
		description: 'Page number to fetch',
		routing: {
			send: {
				property: 'page',
				type: 'query',
			},
		},
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
	},
	{
		displayName: 'Number of Items per Page',
		name: 'limit',
		default: 50,
		routing: {
			send: {
				property: 'limit',
				type: 'query',
			},
		},
		type: 'number',
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
	},
];

export const paginationProperty: INodeProperties = {
	displayName: 'Pagination',
	name: 'pagination',
	type: 'collection',
	placeholder: 'Add Pagination',
	default: {},
	displayOptions: {
		show: {
			resource: [],
			operation: [],
		},
	},
	options: [...paginationOptions],
};
