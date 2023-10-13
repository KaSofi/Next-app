import Link from "next/link"

const TheHeader = () => {
    return(
        <header>
            <Link href='/' className="padding">HOME</Link>
            <Link href='/about' className="padding">ABOUT</Link>
            <Link href='/blog' className="padding">BLOG</Link>
        </header>
    )
}

export {TheHeader}