import services from '../public/page_data/services_list.json'
import Image from 'next/image'

function Spheres(index: number) {
    const spheres = []
    for (let i = 0; i < index+1; i++) {
        spheres.push(
                <Image className={`${i > 0 ? "-ml-2" : ""}`} src={`/sphere_${i+1}.svg`} alt={`Sphere image`} width={48} height={48} key={i} />
        )
    }
    return spheres
}

export default function Services() {
    return (
        <div className={"flex flex-col border-2 border-white"}>
            {
                services.map((service, index) => {
                    return (
                        <div key={index}>
                            <div className={"flex border-y-2 border-white px-12 py-5"}>
                                {Spheres(index)}
                            </div>
                            <div className={"px-12 py-8"}>
                                <h3 className={"heading mb-4"}>{service.title}</h3>
                                <p className={"text-xs"}>{service.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}