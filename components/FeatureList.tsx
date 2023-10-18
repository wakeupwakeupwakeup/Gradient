import React from 'react';
import features from '../public/page_data/features_list.json'

export default function FeatureList() {

    return (
        <div>
            {

                features.map((feature, index) => {
                    const backgroundImage = {
                        backgroundImage: `url('/gradient_${index+1}.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }

                    return (
                        <div key={index} style={backgroundImage} className={`px-5 py-7 min-h-[196px]`}>
                            <div className={"mb-6"}>
                                <span className={"text-3xl font-light"}>{feature.number}</span>
                            </div>
                            <p className={"text-sm"}>{feature.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}