import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { Button, Label, TextInput } from 'flowbite-react';

const Signup = () => {
	return (
		<div>
			<Navbar />
			<main className='bg-emerald-800 p-6'>
				<div className='flex items-center justify-center'>
					<form className='flex flex-col gap-4 signupbg'>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='name' value='FullName' />
							</div>
							<TextInput
								id='name'
								type='text'
								className='rounded-lg p-2'
								placeholder='Jon Doe'
								required
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='email' value='Email' />
							</div>
							<TextInput
								id='email'
								type='email'
								className='rounded-lg p-2'
								placeholder='Jon@gmail.com'
								required
							/>
						</div>

						<div>
							<div className='mb-2 block'>
								<Label htmlFor='password1' value='Your password' />
							</div>
							<TextInput
								id='password1'
								className='rounded-lg p-2'
								type='password'
								required
							/>
						</div>

						<Button type='submit' className='signBtn'>
							Signup
						</Button>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Signup;
