import bgContent from "../assets/home/chef-service.jpg"

const Content = () => {
    return (
        <section className="container mb-16 mx-auto p-7 md:p-24 rounded" style={{
            backgroundImage: `url(${bgContent})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundBlendMode: 'overlay',
        }}>
            <div className="bg-white bg-opacity-80 text-center rounded border px-14 py-10 md:px-20 md:py-10 lg:px-40 lg:py-16">
                <h3 className="cinzel font-semibold text-gray-800 mb-2 text-3xl">Bistro Boss</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </section>
    )
}

export default Content;