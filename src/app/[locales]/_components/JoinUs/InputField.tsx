import { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = ({
	type,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
}) => (
	<>
		<input type={type} placeholder={placeholder} {...register(name, { valueAsNumber })} />
		{error && <span className="error-message">{error.message}</span>}
	</>
);
export default InputField;
