import {
	IAuthenticateGeneric,
	// ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BeeAIApi implements ICredentialType {
	name = 'beeaiApi';
	displayName = 'BeeAI API';
	documentationUrl = 'https://developer.bee.computer';
	properties: INodeProperties[] = [
		{
			displayName: 'API key',
			name: 'apiKey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			}
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				"x-api-key": '={{$credentials.apiKey}}',
			},
		},
	};

	// // The block below tells how this credential can be tested
	// test: ICredentialTestRequest = {
	// 	request: {
	// 		baseURL: 'https://developer.bee.computer',
	// 		url: '/v1/me',
	// 	},
	// };
}
