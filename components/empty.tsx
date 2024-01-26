import Image from "next/image";

interface EmptyProps {
    label: string
};

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center">
            <div className="relative h-72 w-full">
                <Image src="/empty.png" alt="empty" width={300} height={250} />
            </div>
            <p className="text-muted-foreground text-sm ">
                {label}
            </p>
        </div>
    );
};


