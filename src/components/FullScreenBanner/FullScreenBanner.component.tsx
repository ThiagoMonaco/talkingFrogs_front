'use client'

import {
    FullScreenBannerContentStyled,
    FullScreenBannerImageStyled,
    FullScreenBannerStyled
} from '@components/FullScreenBanner/styles'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { Logo } from '@/components'

interface FullScreenBannerProps {
    image: string
    alt: string
    color: string
    side: 'left' | 'right'
    children: React.ReactNode
}

export const FullScreenBanner: FC<FullScreenBannerProps> = ({ children, side, color, image, alt}) => {
    const [firstRender, setFirstRender] = useState(true)
    const [isUnmounting, setIsUnmounting] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFirstRender(false)
        }, 1500)
    }, [])

    const triggerUnmountAnimation = async () => {
        setIsUnmounting(true)
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(null)
            }, 1000)
        })
    }

    return (
        <FullScreenBannerStyled color={color} side={side}>
            <FullScreenBannerImageStyled isUnmounting={isUnmounting}>
                <Image fill={true} src={image} alt={alt} />
            </FullScreenBannerImageStyled>

            <FullScreenBannerContentStyled isUnmounting={isUnmounting} firstRender={firstRender}>
                <Logo onClick={triggerUnmountAnimation}/>
                {children}
            </FullScreenBannerContentStyled>
        </FullScreenBannerStyled>
    )
}