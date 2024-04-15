import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
    return (
        <>
            <h1>Welcome to My page!</h1>
            <Image src="/hylion.png"
                width={200}
                height={200}
            />
            <h2>Hello, My name is Hyeon-Min Shin.
                <br /> I'm 18 years old, and I live in Seoul, Korea.
                <br /> I'm really happy to enter Hanyang University.
                <br /> Let's get along well! Thanks!
            </h2>
            <h1>
                <Link href="/">Back to home</Link>
            </h1>
        </>
    );
}