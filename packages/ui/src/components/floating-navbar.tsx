'use client'
import React, { useState } from 'react'
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { cn } from '../lib/utils'
import Link from 'next/link'
export const FloatingNavbar = ({
    navItems,
    className,
}: {
    navItems: {
        name: string
        link: string
        icon?: JSX.Element
    }[]
    className?: string
}) => {
    const { scrollYProgress } = useScroll()
    const [visible, setVisible] = useState(false)
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (typeof latest === 'number') {
            let direction = latest! - scrollYProgress.getPrevious()!
            if (scrollYProgress.get() < 0.5) {
                return setVisible(false)
            } else {
                if (direction < 0) {
                    return setVisible(true)
                } else {
                    return setVisible(false)
                }
            }
        }
    })
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                    'flex max-w-fit fixed top-15 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg z-[1000] items-center justify-center space-x-4',
                    { className },
                )}
            >
                {navItems.map((NavItem: any, index: number) => (
                    <Link
                        id={`link=${index}`}
                        href={NavItem.link}
                        className={cn('relative items-center flex space-x-1 ', {
                            className,
                        })}
                    >
                        <span className='block sm:hidden'>{NavItem.name}</span>
                        <span className='hidden sm:block text-sm'>
                            {NavItem.icon}
                        </span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    )
}
