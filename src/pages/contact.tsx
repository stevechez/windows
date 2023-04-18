import type { NextPage } from 'next';

const Contact: NextPage = () => {
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault();

		// Get data from the form.
		const data = {
			first: (e.target as HTMLInputElement).value,
			last: (e.target as HTMLInputElement).value,
			email: (e.target as HTMLInputElement).value,
			subject: (e.target as HTMLInputElement).value,
			message: (e.target as HTMLInputElement).value,
		};

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data);

		// API endpoint where we send form data.
		const endpoint = '/api/form';

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options);

		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json();
	};

	return (
		<div>
			{/* <form action="/api/form" method="post">
        <p htmlFor="first">First name:</p>
        <input type="text" id="first" name="first" />
        <p htmlFor="last">Last name:</p>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form> */}

			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-wide font-extrabold text-center text-gray-900 dark:text-white">
						Contact Us
					</h2>

					<form
						action="/api/form"
						method="post"
						className="space-y-8"
						onSubmit={handleSubmit}
					>
						<div>
							<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								First Name
							</p>
							<input
								type="text"
								id="first"
								name="first"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="name@flowbite.com"
								required
							/>
						</div>
						<div>
							<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Last Name
							</p>
							<input
								type="last"
								id="last"
								name="last"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="name@flowbite.com"
								required
							/>
						</div>
						<div>
							<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Your email
							</p>
							<input
								type="email"
								id="email"
								name="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="name@flowbite.com"
								required
							/>
						</div>
						<div>
							<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Subject
							</p>
							<input
								type="text"
								id="subject"
								name="subject"
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="Let us know how we can help you"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
								Your message
							</p>
							<textarea
								id="message"
								rows={6}
								name="message"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Leave a comment..."
							></textarea>
						</div>
						<button
							type="submit"
							className="h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded shadow-md sm:w-auto sm:mr-4 sm:mb-0 focus:shadow-outline focus:outline-none hover:bg-blue-700"
						>
							Send message
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Contact;
