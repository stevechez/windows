import type { NextPage } from 'next';
import Image from 'next/image';

const Services: NextPage = () => {
	return (
		<div className="container w-4/5 mx-auto py-10">
			<h1 className="text-4xl font-black text-blue-950 text-center mb-18">
				Our Services
			</h1>
			<div className="mt-12 w-full">
				<div className="mr-12">
					<p className="text-lg">
						<span className="float-right m-6">
							<div className="flex flex-col"></div>
							<div
								className="
              "
							>
								<Image
									className="rounded mb-12 inline"
									src="/images/hero-image.jpg"
									width={400}
									height={500}
									alt=""
								/>
							</div>
							<div className="">
								<Image
									className="rounded mb-12 inline"
									src="/images/powerwash.jpg"
									width={400}
									height={500}
									alt=""
								/>
							</div>
						</span>
						At A Shine On Windows, we offer a range of window washing services
						to meet the needs of our customers in the Santa Cruz/Capitola/Aptos
						area. Our services are designed to provide you with sparkling clean
						windows that enhance the appearance and value of your property. Here
						are some of the services we offer:
					</p>
				</div>
			</div>
			<ol className="list-disc ml-6 mt-4">
				<li className="text-lg mb-4">
					Residential Window Washing: We offer residential window washing
					services for homes of all sizes. Our team of professionals will clean
					your windows inside and out, removing dirt, grime, and streaks to
					leave them crystal clear.
				</li>
				<li className="text-lg mb-4">
					Commercial Window Washing: We provide commercial window washing
					services for businesses and commercial properties of all types and
					sizes. We use the latest equipment and techniques to clean storefronts
					and more, ensuring that your windows look their best.
				</li>
				<li className="text-lg mb-4">
					Pressure Washing: In addition to window washing, we offer pressure
					washing services for concrete, brick, driveways, sidewalks, steps​,
					decks for your home or business. We can clean sidewalks, driveways,
					and more, removing dirt, grime, and stains to give your property a
					fresh, clean look.
				</li>
				<li className="text-lg mb-4">
					Screen Cleaning: We provide screen cleaning services for your windows
					and doors, removing dirt and dust to improve visibility and air flow.
				</li>
				<li className="text-lg mb-4">
					Screen Cleaning: We provide screen cleaning services for your windows
					and doors, removing dirt and dust to improve visibility and air flow.
				</li>
			</ol>

			<p className="text-lg md:mb-72 mt-6">
				At A Shine On Windows, we pride ourselves on providing exceptional
				customer service and high-quality workmanship. We use only the best
				equipment and materials to ensure that your windows are cleaned to the
				highest standards. Contact us today to schedule your window washing
				service and experience the difference of Shine On Window Washing!
			</p>
		</div>
	);
};

export default Services;
