import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod';

export type FormData = {
	email: string;
	name: string;
	surename?: string;
	phone?: string;
};

export const SubscriberSchema: ZodType<FormData> = z.object({
	email: z.string().email(),
	name: z.string(),
	surename: z.string(),
	phone: z.string(),
});

export type InputFieldProps = {
	type: string;
	placeholder: string;
	name: ValidFieldNames;
	register: UseFormRegister<FormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export type ValidFieldNames = 'email' | 'name' | 'surename' | 'phone';
