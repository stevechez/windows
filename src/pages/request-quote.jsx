import {
	Button,
	Container,
	FormControl,
	FormErrorMessage,
	p,
	Heading,
	Input,
	Text,
	Textarea,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { sendRequestForm } from '../lib/apiRequest';

const initValues = { name: '', address: '', city: '', state: '', email: '', phone: '', services: '', message: '' };

const initState = { isLoading: false, error: '', values: initValues };

export default function Home() {
	const toast = useToast();
	const [state, setState] = useState(initState);
	const [touched, setTouched] = useState({});

	const { values, isLoading, error } = state;

	const onBlur = ({ target }) =>
		setTouched(prev => ({ ...prev, [target.name]: true }));

	const handleChange = ({ target }) =>
		setState(prev => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}));

	const onSubmit = async () => {
		setState(prev => ({
			...prev,
			isLoading: true,
		}));
		try {
			await sendRequestForm(values);
			setTouched({});
			setState(initState);
			toast({
				title: 'Message sent.',
				status: 'success',
				duration: 2000,
				position: 'top',
			});
		} catch (error) {
			setState(prev => ({
				...prev,
				isLoading: false,
				error: error.message,
			}));
		}
	};

	return (
		<Container maxW="450px" mt={12}>
			<Heading>Request Quote</Heading>
			{error && (
				<Text color="red.300" my={4} fontSize="xl">
					{error}
				</Text>
			)}

			<FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
				<p className="mt-8">Name</p>
				<Input
					type="text"
					name="name"
					errorBorderColor="red.300"
					value={values.name}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
				<p>Address</p>
				<Input
					type="text"
					name="address"
					errorBorderColor="red.300"
					value={values.address}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				mb={5}
				isRequired
				isInvalid={touched.subject && !values.subject}
			>
				<p>City</p>
				<Input
					type="text"
					name="city"
					errorBorderColor="red.300"
					value={values.city}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>
			<FormControl
				mb={5}
				isRequired
				isInvalid={touched.subject && !values.subject}
			>
				<p>Email</p>
				<Input
					type="text"
					name="email"
					errorBorderColor="red.300"
					value={values.email}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>
			<FormControl
				mb={5}
				isRequired
				isInvalid={touched.subject && !values.subject}
			>
				<p>Phone</p>
				<Input
					type="text"
					name="phone"
					errorBorderColor="red.300"
					value={values.phone}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>
			<FormControl
				mb={5}
				isRequired
				isInvalid={touched.subject && !values.subject}
			>
				<p>Services Desired</p>
				<Input
					type="text"
					name="services"
					errorBorderColor="red.300"
					value={values.services}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.message && !values.message}
				mb={5}
			>
				<p>Message</p>
				<Textarea
					type="text"
					name="message"
					rows={4}
					errorBorderColor="red.300"
					value={values.message}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<Button
				variant="outline"
				colorScheme="blue"
				isLoading={isLoading}
				disabled={
					!values.name || !values.email || !values.subject || !values.message
				}
				onClick={onSubmit}
			>
				Submit
			</Button>
		</Container>
	);
}
