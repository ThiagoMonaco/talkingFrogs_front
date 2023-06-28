'use client'

import {
    FullScreenBannerContentStyled,
    FullScreenBannerImageStyled,
    FullScreenBannerStyled
} from '@components/FullScreenBanner/styles'
import React, { FC } from 'react'
import Image from 'next/image'

interface FullScreenBannerProps {
    image: string
    alt: string
    color: string
    side: 'left' | 'right'
    children: React.ReactNode
}

export const FullScreenBanner: FC<FullScreenBannerProps> = ({ children, side, color, image, alt}) => {
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