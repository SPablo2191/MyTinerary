import { MainLayout } from "../../layouts/mainLayout/MainLayoutComponent";
import MachuPichu from "../../assets/images/machu_pichu_picture.jpg";
import { Journey } from "../../models/journey.interface";
import JourneyCarousel from "../../components/carousel/CarouselComponent";

const journey_list: Journey[] = [
    { id: 1, cityName: "Tokyo", countryName: "Japan", imageUrl: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/akihabara-iStock-484915982-1024x600.jpg" } as Journey,
    { id: 2, cityName: "New York", countryName: "United States", imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/aa/b1/79/caption.jpg?w=1200&h=-1&s=1" } as Journey,
    { id: 3, cityName: "Salta", countryName: "Argentina", imageUrl: "https://media.viajando.travel/p/ad14f80564c664abcb7dc54c319fb650/adjuntos/255/imagenes/000/327/0000327535/1200x675/smart/salta-san-franciscojpg.jpg" } as Journey,
    { id: 4, cityName: "Arequipa", countryName: "Perú", imageUrl: "https://www.ngenespanol.com/wp-content/uploads/2022/07/GettyImages-1156132465-1280x720.jpg" } as Journey,
];

export function Home() {
    return (
        <MainLayout>
            <div className="my-4 flex justify-center align-items-center flex-col border-1">

                <div className="justify-center align-items-center md:grid grid-cols-2 gap-2">
                    <div className="text-justify mr-10">
                        <h1 className="text-center font-bold text-3xl my-4">Find the perfect destination</h1>
                        <p className="text-lg">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                        <button className="bg-violet-700 font-bold p-4 my-4 px-20  rounded-lg">View More</button>
                    </div>
                    <div>
                        <img src={MachuPichu} alt="" className="w-full rounded-lg" />
                    </div>
                </div>
                <h2 className="text-center my-6 text-3xl">Popular Journeys to make</h2>
                <div>
                    <JourneyCarousel items={journey_list} />
                </div>
            </div>
        </MainLayout>
    );
}