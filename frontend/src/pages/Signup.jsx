import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { Button, Label, TextInput } from 'flowbite-react';

const Signup = () => {
	return (
		<div>
			<Navbar />
			<main className='bg-emerald-800 p-6'>
				<div className='flex items-center justify-center'>
					<form className='flex flex-col items-center justify-center gap-4 signupbg w-80'>
						<div>
							<h2 className='text-3xl'>HelpBirdy</h2>
							<h3 className='text-center'>Signup</h3>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='name' className='font-bold' value='FullName' />
							</div>
							<TextInput
								id='name'
								type='text'
								className='rounded-lg p-2 w-72'
								placeholder='Jon Doe'
								required
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='email' className='font-bold' value='Email' />
							</div>
							<TextInput
								id='email'
								type='email'
								className='rounded-lg p-2 w-72'
								placeholder='Jon@gmail.com'
								required
							/>
						</div>

						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='password1'
									className='font-bold'
									value='Your password'
								/>
							</div>
							<TextInput
								id='password1'
								className='rounded-lg p-2 w-72'
								type='password'
								required
							/>
						</div>
						<div>
							<Button type='submit' className='signupBtn'>
								Signup
							</Button>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Signup;
