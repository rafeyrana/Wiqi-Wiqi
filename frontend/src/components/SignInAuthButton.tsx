import { useSignIn } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'

function SignInAuthButton() {
    const {signIn, isLoaded} = useSignIn()
    if (!isLoaded) return null
    const signinWithGoogle  = () => {
        signIn.authenticateWithRedirect({
            strategy: 'oauth_google',
            redirectUrl: '/sso-callback',
            redirectUrlComplete: '/auth-callback',
        })
    }

  return (
    <Button onClick={signinWithGoogle} variant={"secondary"} className="w-full text-white border-zinc-200 h-11">
        Sign In with Google
    </Button>
    
  )
}

export default SignInAuthButton