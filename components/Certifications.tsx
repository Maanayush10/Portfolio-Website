"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Certifications = () => {
    const certificates = [
        {
            title: "Coursera",
            icon: <AceternityIcon order="Cloud & Cybersecurity" />,
            bg: "bg-pink-900",
            description: [
                { name: "Introduction to Microsoft Azure Cloud Services", url: "https://www.coursera.org/account/accomplishments/verify/U2XES35GHQG9" },
                { name: "Crash Course on Python", url: "https://www.coursera.org/account/accomplishments/verify/S2ML3ML67XLX" }
            ],
            colors: [
                [255, 166, 158],
                [221, 255, 247],
            ]
        },
        {
            title: "Coursera",
            icon: <AceternityIcon order="Data-Science" />,
            bg: "bg-emerald-900",
            description: [
                { name: "What is Data Science?", url: "https://www.coursera.org/account/accomplishments/verify/T6XY9PABKVQM" },
                { name: "Data Science Methodology", url: "https://www.coursera.org/account/accomplishments/verify/X3HXMSRQRSF8" },
                { name: "Python for Data Science, AI & Development", url: "https://www.coursera.org/account/accomplishments/verify/49HNKPN359BN" },
                { name: "Tools for Data Science", url: "https://www.coursera.org/account/accomplishments/verify/PXKXN4DMNCM4" },
            ],
            colors: [
                [64, 199, 166]
            ]
        },
        {
            title: "Coursera",
            icon: <AceternityIcon order="Digital Marketing" />,
            bg: "bg-sky-600",
            description: [
                { name: "Marketing in a Digital World", url: "https://www.coursera.org/account/accomplishments/verify/Q4FFG4L6X9NA" },
                { name: "Digital Marketing Analytics in Practice", url: "https://www.coursera.org/account/accomplishments/verify/ATXXTJ3ZJ76A" },
                { name: "Digital Media and Marketing Strategies", url: "https://www.coursera.org/account/accomplishments/verify/ZFDSVCULWNKW" },
                { name: "Digital Media and Marketing Principles", url: "https://www.coursera.org/account/accomplishments/verify/LELEZ7QQ9G9U" },
                { name: "The Digital Marketing Revolution", url: "https://www.coursera.org/account/accomplishments/verify/JGTNCHUZGAKQ " },
                { name: "Digital Marketing Analytics in Theory", url: "https://www.coursera.org/account/accomplishments/verify/XXH5572DQRXM" },
            ],
            colors: [
                [125, 211, 252]
            ]
        }
    ];

    return (
        <>
            <section className="w-full py-20">
                <h1 className="heading">
                    My <span className="text-purple">Certifications</span>
                </h1>
                <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                    {certificates.map((cert, index) => (
                        <Card
                            key={index}
                            title={cert.title}
                            icon={cert.icon}
                            description={cert.description}
                        >
                            <CanvasRevealEffect
                                animationSpeed={5.1}
                                containerClassName={cert.bg}
                                colors={cert.colors}
                            />
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
};

const Card = ({
    title,
    icon,
    children,
    description,
}: {
    title: string;
    description: { name: string; url: string }[],
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
                    {title}
                </h2>
                <div className="text-lg dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: "#e4ecff" }}>
                    {description.map((cert, index) => (
                        <a key={index} href={cert.url} target="_blank" className="block">
                            {cert.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-white backdrop-blur-3xl text-sm font-medium">
                    {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Certifications;
