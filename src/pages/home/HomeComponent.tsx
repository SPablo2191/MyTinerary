import { MainLayout } from "../../layouts/mainLayout/MainLayoutComponent";
import MachuPichu from "../../assets/images/machu_pichu_picture.jpg";

export function Home() {
    return (
        <MainLayout>
            <div className="my-4 flex justify-center align-items-center border-1">

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
            </div>
        </MainLayout>
    );
}