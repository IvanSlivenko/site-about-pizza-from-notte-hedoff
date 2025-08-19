import { FC, PropsWithChildren } from "react"

interface FooterLinkProps {
    href:string,

}

export const FooterLink:FC<FooterLinkProps & PropsWithChildren> = ({ href, children }) =>{
    return (
        <li className="text-2xl text-white hover:text-black hover:text-3xl list-none">
            <a href={href}>
                {children}
            </a>
        </li>
    )
}