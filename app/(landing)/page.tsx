import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
    return (
        <div>
            Landing Page(Unprotected)
            <div>
                <Link href="/signin">
                    <Button>
                        Login
                    </Button>
                </Link>
            </div>
            <div>
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
)
};

export default LandingPage;
