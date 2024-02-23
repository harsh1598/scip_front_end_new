import React from 'react';
import './Loader.css'
import Lottie from "react-lottie";
import * as animatedData from "../../assets/test.json";

interface PropData {
    show: boolean;
    style?: boolean
}

const Loader = (props: PropData) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animatedData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            {
                props.show && <div className="resultLoading">
                    <div className='bg' style={{ backgroundColor: '#000000' }}></div>

                    <div className="resultLoading card-header page-content" style={{ textAlign: 'center', marginTop: '15%' }}>
                        <Lottie options={defaultOptions} height={50} width={50} />
                    </div>
                </div >
            }
        </>
    )
}

export default Loader;
