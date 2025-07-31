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

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 py-3">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-xl font-bold">
                            MyApp
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
                                                className="capitalize text-body-2 hover:text-nexcent-shade-1 font-semibold transition duration-200"
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
                        <Link href="/login" className="btn-nexcent btn-nexcent-white btn-nexcent-sm font-medium text-body-2">Login</Link>
                        <Link href="/login" className="btn-nexcent btn-nexcent-primary btn-nexcent-sm font-medium text-body-2">Sign up</Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
