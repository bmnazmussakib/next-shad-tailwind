'use client'
import React from "react";
import Container from "../layout/Container";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className="sticky top-0 z-50 py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="">
                            <Image
                            width={120}
                            height={10}
                            objectFit="cover"
                            priority
                             src="/images/logo-black.png"/>
                        </Link>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-6">
                            {NAV_LINKS.map(({ label, href }) => {
                                // Check if the link is a hash link (like /#features)
                                const isHashLink = href.includes("#");
                                return (
                                    <NavigationMenuItem key={href}>
                                        <NavigationMenuLink >
                                            <Link href={href}
                                                className="capitalize text-[16px] font-semibold hover:text-nexcent-shade-1  transition duration-200"
                                            >
                                                {label}
                                            </Link>
                                        </NavigationMenuLink>
                                        {/* If you want submenu content, add NavigationMenuContent here */}
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                        <NavigationMenuIndicator />
                        <NavigationMenuViewport />
                    </NavigationMenu>
                    <div className="flex space-x-4">
                        <Link href="/login" className="btn-nexcent btn-nexcent-white btn-nexcent-sm font-medium text-[16px] font-semibold">Login</Link>
                        <Link href="/login" className="btn-nexcent btn-nexcent-primary btn-nexcent-sm font-medium text-[16px] font-semibold">Sign up</Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
