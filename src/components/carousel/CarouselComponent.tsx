import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Journey } from '../../models/journey.interface';
import CardComponent from '../ui/card/CardComponent';





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
            <CardComponent key={item.id} title={item.cityName} subTitle={item.countryName} imageUrl={item.imageUrl} description='' footer='' />
        );
    };

    return (
        <Carousel value={items} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} itemTemplate={itemTemplate} />
    )
}
