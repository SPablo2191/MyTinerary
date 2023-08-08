import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Journey } from '../../models/journey.interface';





export default function JourneyCarousel({ items }: { items: Journey[] }) {
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const itemTemplate = (item: Journey) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={item.imageUrl} alt={item.cityName} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{item.cityName}</h4>
                    <h6 className="mt-0 mb-3">${item.countryName}</h6>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <Carousel value={items} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={itemTemplate} />
        </div>
    )
}
        