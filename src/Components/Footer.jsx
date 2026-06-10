import Link from 'next/link';
import React from 'react';

const footerLinks = {
    Product: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/worker-ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salary" },
    ],
    Navigations: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/library" },
        { label: "Contact", href: "/contact" },
    ],
    Resources: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/newsroom" },
    ],
};

const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: "Pinterest",
        href: "https://pinterest.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#0f0f14] border-t border-white/5 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2.5 group w-fit">
                            <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 transition-colors">
                                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className="text-white font-semibold text-sm leading-tight">
                                Hire
                                <br />
                                Loop
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="flex flex-col gap-4">
                            <h3 className="text-white text-sm font-semibold">{category}</h3>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-500 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map((s) => (
                            <Link
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                            >
                                {s.icon}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright + Legal */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-gray-600">
                        <span>Copyright 2024 — Programming Hero</span>
                        <div className="flex items-center gap-4">
                            <Link href="/terms" className="hover:text-gray-300 transition-colors">
                                Terms &amp; Policy
                            </Link>
                            <span className="text-white/10">·</span>
                            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                                Privacy Guideline
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}