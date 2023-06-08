'use client'

import {
    FullScreenBannerContentStyled,
    FullScreenBannerImageStyled,
    FullScreenBannerStyled
} from '@/components/FullScreenBanner/styles'
import React from 'react'
import Image from 'next/image'

interface FullScreenBannerProps {
    image: string
    alt: string
    color: string
    side: 'left' | 'right'
    children: React.ReactNode
}

export default function FullScreenBanner({ children, side, color, image, alt} :FullScreenBannerProps) {
    return (
        <FullScreenBannerStyled color={color} side={side}>
            <FullScreenBannerImageStyled>
                <Image fill={true} src={image} alt={alt} />
            </FullScreenBannerImageStyled>

            <FullScreenBannerContentStyled>
                {children}
            </FullScreenBannerContentStyled>
        </FullScreenBannerStyled>
    )
}