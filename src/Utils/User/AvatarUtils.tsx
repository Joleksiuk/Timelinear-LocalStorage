import React from 'react'

export type DiceBearAvatarCategory =
    | 'adventurer'
    | 'adventurer-neutral'
    | 'avataaars'
    | 'avataaars-neutral'
    | 'big-ears'
    | 'big-ears-neutral'
    | 'big-smile'
    | 'bottts'
    | 'bottts-neutral'
    | 'croodles'
    | 'croodles-neutral'
    | 'fun-emoji'
    | 'icons'
    | 'identicon'
    | 'initials'
    | 'lorelei'
    | 'lorelei-neutral'
    | 'micah'
    | 'miniavs'
    | 'notionists'
    | 'notionists-neutral'
    | 'open-peeps'
    | 'personas'
    | 'pixel-art'
    | 'pixel-art-neutral'
    | 'rings'
    | 'shapes'
    | 'thumbs'

export const diceBearAvatarCategories: DiceBearAvatarCategory[] = [
    'adventurer',
    'adventurer-neutral',
    'avataaars',
    'avataaars-neutral',
    'big-ears',
    'big-ears-neutral',
    'big-smile',
    'bottts',
    'bottts-neutral',
    'croodles',
    'croodles-neutral',
    'fun-emoji',
    'icons',
    'identicon',
    'initials',
    'lorelei',
    'lorelei-neutral',
    'micah',
    'miniavs',
    'notionists',
    'notionists-neutral',
    'open-peeps',
    'personas',
    'pixel-art',
    'pixel-art-neutral',
    'rings',
    'shapes',
    'thumbs',
]

export default {
    getAvatarUrl(seed = '', category = 'identicon'): string {
        return `https://api.dicebear.com/7.x/${category}/svg?seed=${seed}`
    },

    getAvatar(seed: string, category: DiceBearAvatarCategory): JSX.Element {
        const source = `https://api.dicebear.com/7.x/${category}/svg?seed=${seed}`
        return <img src={source} alt="" />
    },
}
