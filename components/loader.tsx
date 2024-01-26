import Image from "next/image";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <Image
                    src="/logo.png"
                    fill
                    alt="logo" />
            </div>
            <p className="text-sm text-muted-foreground">
                Genius is thinking ...
            </p>
        </div>
    );
}