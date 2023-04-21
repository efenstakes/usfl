import { useFrame } from '@react-three/fiber'
import { Variants, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import './announce.scss'

// import Logo from '/assets/USFL_Logo.png'


const variants: Variants = {
    initial: {
        // opacity: 0,
    },
    animate: {
        // opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: .1,
            damping: 10,
        }
    },
    exit: {
        // opacity: 0,
    }
}

const textVariants: Variants = {
    initial: {
        opacity: 0,
        y: 200,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0,
            damping: 20,
        }
    },
    exit: {
        opacity: 0,
        y: 0,
        scale: 0,
        transition: {
            duration: 15,
        }
    }
}

const AnnounceComponent = () => {
    const [hide, setHide] = useState<boolean>(false)
    let [opacity, setOpacity] = useState<number>(1)
    
    useEffect(()=> {
        setTimeout(()=> {
            startFadingOut()
        }, 4000)
    }, [])


    const startFadingOut = ()=> {
        const interval = setInterval(()=> {
            if( opacity <= 0 ) {
                clearInterval(interval)
                setHide(true)
            }
            console.log("opacity ", opacity)
            setOpacity(opacity -= .05)
        }, 100)
    }

    useEffect(()=> {

        

    }, [ hide ])

    if( hide ) return <></>
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="announce"
            style={{
                opacity: opacity,
                // display: hide ? 'none' : 'flex',
            }}
        >

            <motion.img
                src={'/assets/USFL_Logo.png'}
                className="announce__image"
                variants={textVariants}
            />

            <div className="announce__titles">
                <motion.h1
                    variants={textVariants}
                    className="announce__title"
                >
                    Is Back and
                </motion.h1>
                <motion.h1
                    variants={textVariants}
                    className="announce__title_2"
                >
                    A New Season
                </motion.h1>
            </div>
            <motion.h1
                variants={textVariants}
                className="announce__text"
            >
                Is Here
            </motion.h1>
            
        </motion.div>
    )
}

export default AnnounceComponent

