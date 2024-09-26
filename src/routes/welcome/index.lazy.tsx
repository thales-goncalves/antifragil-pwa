import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"

function WelcomeScreen() {
  const handleSignUp = () => {
    console.log("Sign up clicked")
  }

  return (
    <div className=" text-white min-h-[90dvh] w-full max-w-md mx-auto flex flex-col">
      {/* Image Grid */}
      <div
        className="h-[40dvh] bg-cover bg-center relative"
        style={{ backgroundImage: "url(https://workoutbrands.com/cdn/shop/articles/crossfit-together.png)" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Welcome Text */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to XXX</h1>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button 
          className="w-full bg-green-500 text-black hover:bg-green-600" 
          size="lg"
          onClick={handleSignUp}
        >
          Sign up with Email
        </Button>
      </div>

      {/* Sign In Link */}
      <div className="text-center mb-8">
        <p className="text-gray-400">
          Already have an account?{" "}
          <Link href="/signin" className="text-green-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
export const Route = createLazyFileRoute('/welcome/')({
  component: WelcomeScreen
})