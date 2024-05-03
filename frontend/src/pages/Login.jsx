import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { Button, Label, TextInput } from 'flowbite-react';

const Login = () => {
	return (
		<>
			<div>
				<Navbar />
				<main className='bg-emerald-800 min-h-screen pt-20 '>
					<div className='lg:flex items-center justify-center '>
						<div className='form-container'>
							<form className='flex flex-col items-center justify-center gap-4 signupbg '>
								<div>
									<h2 className='text-3xl'>HelperBirdy</h2>
									<h3 className='text-center'>LOG IN</h3>
								</div>
								<div>
									<div className='mb-2 block'>
										<Label
											htmlFor='email'
											className='font-bold'
											value='Email'
										/>
									</div>
									<TextInput
										id='email'
										type='email'
										className='rounded-lg w-64 lg:w-96'
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
										className='rounded-lg w-64 lg:w-96'
										type='password'
										required
									/>
								</div>
								<div>
									<Button type='submit' className='signupBtn'>
										Login
									</Button>
								</div>
							</form>
							<div className='logo-container'>
								<img src='../../public/HelperBirdy.png' alt='logo' />
							</div>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Login;
