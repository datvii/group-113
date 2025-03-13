'use client';

import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormData, SubscriberSchema } from './types';
import { baseUrl } from '@/app/[locales]/services';

type SubscriberSchemaType = z.infer<typeof SubscriberSchema>;

const saveSubscriberFormData = async (data: FormData) => {
	console.log(data);
	const response = await fetch(`${baseUrl}/api/subscribers/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data: data }),
	});
	const content = await response.json();
	console.log(content);
};

const onSubmit: SubmitHandler<SubscriberSchemaType> = (data) => {
	saveSubscriberFormData(data);
};

function JoinUsForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// setError,
	} = useForm<FormData>({
		resolver: zodResolver(SubscriberSchema), // Apply the zodResolver
	});
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

	// const { data, error, isLoading, isValidating, mutate } = useSWR('/api/form', fetcher); // Make a POST request
	// const {
	// 	data,
	// 	trigger: createTodo,
	// 	isMutating: isCreating,
	// } = useSWRMutation('/api/todo', postRequest);

	// const onSubmit = async (data: FormData) => {
	// 	try {
	// 		const response = await axios.post('/api/form', data); // Make a POST request
	// 		const { errors = {} } = response.data; // Destructure the 'errors' property from the response data

	// 		// Define a mapping between server-side field names and their corresponding client-side names
	// 		const fieldErrorMapping: Record<string, ValidFieldNames> = {
	// 			email: 'email',
	// 			name: 'name',
	// 		};

	// 		// Find the first field with an error in the response data
	// 		const fieldWithError = Object.keys(fieldErrorMapping).find((field) => errors[field]);

	// 		// If a field with an error is found, update the form error state using setError
	// 		if (fieldWithError) {
	// 			// Use the ValidFieldNames type to ensure the correct field names
	// 			setError(fieldErrorMapping[fieldWithError] as any, {
	// 				type: 'server',
	// 				message: errors[fieldWithError],
	// 			});
	// 		}
	// 		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// 	} catch (error) {
	// 		console.error('Submitting form failed!');
	// 	}
	// };

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>React-Hook-Form & Zod</h1>
			<InputField
				type="email"
				placeholder="Email"
				name="email"
				register={register}
				error={errors.email}
			/>
			<InputField
				type="text"
				placeholder="Surename"
				name="surename"
				register={register}
				error={errors.surename}
			/>

			<InputField
				type="text"
				placeholder="Name"
				name="name"
				register={register}
				error={errors.name}
			/>

			<InputField
				type="number"
				placeholder="phone"
				name="phone"
				register={register}
				error={errors.phone}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default JoinUsForm;
