import { Card } from 'primereact/card';


export default function CardComponent({ title, subTitle, description, imageUrl, footer }: { title: string, subTitle: string, description: string, imageUrl: string, footer : string}) {
    const header = (
        <img alt="Card" src={imageUrl} />
    );
    const footerComponent = (
        <div className="">
            <p>{footer}</p>
        </div>
    );

    return (
        <div className=" mx-4">
            <Card title={title} subTitle={subTitle} footer={footerComponent} header={header} className="bg-white">
                <p className="m-0">
                    {description}
                </p>
            </Card>
        </div>
    )
}
