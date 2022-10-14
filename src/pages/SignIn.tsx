import { FormEvent, useState } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";


export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    
    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        await axios.post('/sessions', {
            email: 'Bruno.bergoli@gmail.com',
            password: '12345'
        })
        
        setIsUserSignedIn(true);
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
        <header className='flex flex-col gap-1 items-center'>
           <Logo />
  
           <Heading size='lg' className="mt-4">Ignite Lab</Heading>
  
           <Text className="text-gray-400 mt-1" size='lg'>Login and start using</Text>
        </header>
        
        <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
          { isUserSignedIn && <Text>Sucessfull Login!</Text>}
          
          <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className='semi-bold'>E-mail address</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type="email" id="email" placeholder='johndoe@exemple.com'/>
            </TextInput.Root>
          </label>
  
          <label htmlFor='password' className='flex flex-col gap-3'>
            <Text className='semi-bold'>Password</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type="password" id="password" placeholder='****************'/>
            </TextInput.Root>
          </label>
  
          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember"/>
            <Text size='sm' className="text-gray-200">Remind me for 30 days</Text>
          </label>
  
          <Button type="submit" className="mt-4">Enter Platform</Button>
  
          <footer className='flex flex-col items-center gap-4 mt-8'>
            <Text asChild className='text-gray-400 hover:text-gray-200' size="sm">
              <a href="">Forgot your password?</a>
            </Text>
            <Text asChild className='text-gray-400 hover:text-gray-200' size="sm">
              <a href="">{'Doesn’t have an account? Create one right now'}</a>
            </Text>
          </footer>
        </form>
      </div>
    )
}